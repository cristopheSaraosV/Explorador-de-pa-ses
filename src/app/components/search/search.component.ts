import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private mapServices:MapService,private dataService:DataService) { }

  listCountry: {name: string, code: string} []= [];
  
  
  countrySelected: string = '';


  ngOnInit(): void {


      this.mapServices.getAllCountry().subscribe( res => {  
        this.listCountry = res;
      })
      
  }

  searchCountry(){
      this.dataService.changeCountry(this.countrySelected);
}

}
