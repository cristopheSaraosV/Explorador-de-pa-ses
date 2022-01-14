import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { CountrySelected } from '../../interfaces/countrySelected.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit, OnChanges {

  constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.country.firstChange == false ){

        }
    }

 
    
  ngAfterViewInit(): void {
      this.createMap();
}


createMap(){
    const map = new Map('map').setView( [-33.4496, -70.7108 ], 15);

    tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
    {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const lat:number  = 121212;
    const long:number = 212121;

    const markerItem = marker([lat, long]).addTo(map).bindPopup('Ciudad');
    return map;
}




  ngOnInit(): void {
    

  }

 
}
