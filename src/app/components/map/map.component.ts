import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map, Marker, marker, tileLayer } from 'leaflet';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit  {

    countryName: string = ''
    latlng: number[] = [-33.4496, -70.7108]

    constructor(private data: DataService, private mapService: MapService) {}

    ngAfterViewInit(): void {
        this.createMap();
        this.getLatLngCountry(); // * Revisar si es necesario
      }

      ngOnInit():void{
            this.getCountry();        
      }


      getCountry() {
        this.data.currentCountry.subscribe(
          (countryAndCode) => {
              const country = countryAndCode.split('-');
              this.countryName = country[0]
              this.mapService.getDescriptionCountry(this.countryName).subscribe( res => {
                  this.latlng = res[0].latlng;
                  this.getLatLngCountry();
              })
            },
        )

      }

      getLatLngCountry(){
        const lat:number  = this.latlng[0];
        const long:number = this.latlng[1];

        this.marketItem.setLatLng([lat,long]).bindPopup(this.countryName);
        this.map.fitBounds([
            [lat,long]
        ]).setZoom(3)
      }
 

 marketItem!:Marker;
map!:Map;

createMap(){
    const map = new Map('map').setView( [-33.4496, -70.7108 ], 15);

    tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
    {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const lat:number  = 121212;
    const long:number = 212121;

    this.marketItem = marker([lat, long]).addTo(map)
    this.map = map;
}




 
}
