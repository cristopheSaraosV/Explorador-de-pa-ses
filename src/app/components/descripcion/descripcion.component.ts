import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: [
  ]
})
export class DescripcionComponent implements OnInit {


  countryName: string = ''

  constructor(private data: DataService){}

    
    ngOnInit(): void {
        this.data.currentCountry.subscribe(country => this.countryName = country)

  }

}
