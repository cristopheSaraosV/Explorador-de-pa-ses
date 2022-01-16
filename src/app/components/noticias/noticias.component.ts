import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MapService } from '../../services/map.service';
import { Article } from '../../interfaces/resNewsApi.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

    countryName: string = '';
    countryCode: string = '';

    newsList:Article[]=[];
    constructor(private data: DataService, private mapService:MapService) {}
    ngOnInit(): void {
        this.getCountry();   
    }

    ngAfterViewInit(): void {
        this.getNews()
      }

    getCountry() {
        this.data.currentCountry.subscribe(
          (countryAndCode) => {
              const country = countryAndCode.split('-');
              if(country[0].length<= 0){
                  this.countryCode = 'us'
              }
              this.countryName = country[0] 
              this.countryCode = country[1]
              this.getNews()
            },
        )
      }

      getNews() {
        this.mapService.getNoticias(this.countryCode).subscribe(res => {
            this.newsList = res.articles;
        })
      }
}
