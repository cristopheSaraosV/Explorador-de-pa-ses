import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

    countryName: string = ''
    constructor(private data: DataService, private mapService:MapService) {}
    ngOnInit(): void {
      this.data.currentCountry.subscribe(
        (country) => (this.countryName = country),
      )

      this.mapService.getNoticias('us').subscribe( res => {
          console.log(res[0].articles);
      })
    }
}
