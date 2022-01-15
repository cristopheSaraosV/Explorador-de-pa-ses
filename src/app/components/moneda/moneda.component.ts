import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styles: [
  ]
})
export class MonedaComponent implements OnInit {

    countryName: string = ''
    constructor(private data: DataService) {}
    ngOnInit(): void {
      this.data.currentCountry.subscribe(
        (country) => (this.countryName = country),
      )
    }

}
