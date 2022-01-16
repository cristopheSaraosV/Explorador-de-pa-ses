import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';
import { ResOpenWeatherMap } from '../../interfaces/resOpenWeatherMap.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { countryWeather } from '../../interfaces/countryWeather.interface';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styles: [
  ]
})
export class ClimaComponent implements OnInit,AfterViewInit {

    countryName: string = ''
    countryWeather: countryWeather= {
        name:'chile',
        description:'Clear sky',
        main:'Clear',
        temperature:30,
        feels_like: 287.82,
        grnd_level: 980,
        humidity: 81,
        pressure: 1014,
        sea_level: 1014,
        temp_max: 30,
        temp_min: 2,
        icon:'01n'
    }

    constructor(private data: DataService, private mapService: MapService) {}
   ngAfterViewInit(): void {
    this.getWeather()
  }

  ngOnInit(): void {
    this.getCountry()
  }

  getCountry() {
    this.data.currentCountry.subscribe(
      (countryAndCode) => {
          const country = countryAndCode.split('-');
          this.countryName = country[0]
          this.getWeather()
        },
    )
  }
  getWeather(){
      if(this.countryName !== 'Search a country'){
          this.mapService.getClima(this.countryName).subscribe(res => {
              this.countryWeather = {
                  name:res.name,
                  main: res.weather[0].main,
                  description: res.weather[0].description,
                  temperature: res.main.temp,
                  feels_like:res.main.feels_like,
                  grnd_level:res.main.grnd_level,
                  humidity: res.main.humidity,
                  pressure: res.main.pressure,
                  sea_level: res.main.sea_level,
                  temp_max: res.main.temp_max,
                  temp_min: res.main.temp_min,
                  icon: res.weather[0].icon
              };
          })
      }
  }

}
