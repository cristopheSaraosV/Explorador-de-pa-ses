import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private mapServices:MapService) { }

  listCountry: {name: string, code: string} []= [];
  
  
  @Output() eventCountrySelected: EventEmitter<string> = new EventEmitter();
  countrySelected: string = ''


  ngOnInit(): void {
      this.mapServices.getAllCountry().subscribe( res => {  
        this.listCountry = res;
      })
  }

  searchCountry(){
      
      this.eventCountrySelected.emit(this.countrySelected);
}

}
