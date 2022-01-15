import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
  SimpleChanges,
} from '@angular/core'
import { DataService } from '../../services/data.service'
import { MapService } from '../../services/map.service'
import { CountryDetail } from '../../interfaces/countryDetail.interface'
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: [],
})
export class DescripcionComponent implements OnInit, AfterViewInit {
  countryName: string = ''
  countryDetail: CountryDetail = {
    capital: '',
    flag: '',
    languages: '',
    population: 0,
    region: '',
    latlng:[]
  }

  constructor(private data: DataService, private mapService: MapService) {}
   
  ngAfterViewInit(): void {
    this.getDataCountry()
  }

  ngOnInit(): void {
    this.getCountry()
  }

  getCountry() {
    this.data.currentCountry.subscribe(
      (countryAndCode) => {
          const country = countryAndCode.split('-');
          this.countryName = country[0]
          this.getDataCountry()
        },
    )
  }

  getDataCountry() {
    this.mapService.getDescriptionCountry(this.countryName).subscribe((res) => {
      this.countryDetail = res[0];
    },
    (error)=> {
        console.log(error.code);
    })
  }
}
