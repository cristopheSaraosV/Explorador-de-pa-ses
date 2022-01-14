import { Component, OnInit } from '@angular/core';
import { navItem } from '../../interfaces/navItem.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  constructor() { }

  listItem:navItem[] = [];

  ngOnInit(): void {
    this.listItem = [
        { name:'Descripcion', route:'/descripcion' },
        { name:'Noticias',    route:'/noticias' },
        { name:'Moneda',      route:'/moneda' },
        { name:'Clima',       route:'/clima' },
    ]
  }

 

}
