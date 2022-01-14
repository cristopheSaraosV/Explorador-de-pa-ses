import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MapService } from '../../services/map.service';
import { CountrySelected } from '../../interfaces/countrySelected.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private mapServices:MapService) { }

  listCountry: CountrySelected[]= [];




  ngOnInit(): void {
      this.mapServices.getAllCategories().subscribe( res => {
    
        this.listCountry = res;
      })
  }

  searchCountry(){
}

}
