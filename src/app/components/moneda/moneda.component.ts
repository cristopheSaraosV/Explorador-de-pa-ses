import { Currencies } from './../../interfaces/resApiCountry.interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styles: [
  ]
})
export class MonedaComponent implements OnInit {

    countryName: string = ''
    countryCurrency: Currencies = {}
    constructor(private data: DataService, private mapService:MapService) {}

     ngOnInit(): void {
        this.getCountry();   
    }

    ngAfterViewInit(): void {
        this.getCurrency()
      }


      getCountry() {
        this.data.currentCountry.subscribe(
          (countryAndCode) => {
              const country = countryAndCode.split('-');
              if(country[0].length<= 0){
                  this.countryName = 'us'
              }
              this.countryName = country[0] 
              this.getCurrency()
            },
        )
      }

      getCurrency(){
        this.mapService.getCurrencyCountry(this.countryName).subscribe(res => {
            res.forEach(res=> {
                this.countryCurrency = res.currency;
            })
        })
      }
}
