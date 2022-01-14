import { Component, OnInit } from '@angular/core';
import { navItem } from '../interfaces/navItem.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  providers:[DataService],
  styles: [
  ]
})
export class PagesComponent implements OnInit {

    listItem:navItem[] = [];
    country:string = '' 

    constructor(private data: DataService) { }

   
    ngOnInit(): void {
      this.data.currentCountry.subscribe(message => this.country = message);

    this.listItem = [
        { name:'Descripcion', route:'/descripcion' },
        { name:'Noticias',    route:'/noticias' },
        { name:'Moneda',      route:'/moneda' },
        { name:'Clima',       route:'/clima' },
    ]
  }

  selectCountry(country:string){
      this.data.changeCountry(country)
    this.country = country
}

}
