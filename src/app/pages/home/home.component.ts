import { Component, OnInit } from '@angular/core';
import { navItem } from '../../interfaces/navItem.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  listItem:navItem[] = [];


  ngOnInit(): void {

    this.listItem = [
        { name:'Descripcion',route:'/descripcion' },
        { name:'Noticias',route:'/noticias' },
        { name:'Moneda',route:'/moneda' },
        { name:'Clima',route:'/clima' },
    ]
  }

}
