import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {

  constructor() { }
    
  ngAfterViewInit(): void {
    const map = new Map('map').setView([-33.4378, -70.6502], 15);
    tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
    {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    
    const lat:number = -33.4378;
    const long:number = -70.6502;

    const markerItem = marker([lat, long]).addTo(map).bindPopup('Ciudad');


}


  ngOnInit(): void {
    

  }

 
}
