import { Component, OnInit } from '@angular/core';
import { navItem } from '../../interfaces/navItem.interface';
import { CountrySelected } from '../../interfaces/countrySelected.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }


  country:CountrySelected = {common:'default', latLng:[-33.4378, -70.6502]}

  ngOnInit(): void {


  }


}
