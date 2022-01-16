import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResAPICountryName } from '../interfaces/resApiCountryName.interface';
import { ResAPICountry } from '../interfaces/resApiCountry.interface';
import { ResNewsAPI } from '../interfaces/resNewsApi.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }
    _urlBase = environment.restcountries;
    _urlBaseNew = environment.newsapi;

  getAllCountry() {
    const url: string = `${this._urlBase}/all?fields=name,latlng,cca2`;
  
    return this.http.get<ResAPICountryName[]>(url).pipe(
        map( (todo) => {           
            return  todo.map( item => {
                return  {name: item.name.common, code: item.cca2}
               
            })
        })
    );
}

 


  getDescriptionCountry(country:string) {
    const url: string = `${this._urlBase}/name/${country}`;
  
    return this.http.get<ResAPICountry[]>(url).pipe(
        map( (res) => {         
            return res.map( item => {
                return {
                    capital:item.capital[0],
                    region:item.region,
                    languages:item.languages.spa,
                    population:item.population,
                    flag:item.flags.png,
                    latlng:item.latlng
                }
            })  
        })
    );
}
  getCurrencyCountry(country:string) {
    const url: string = `${this._urlBase}/name/${country}`;
  
    return this.http.get<ResAPICountry[]>(url).pipe(
        map( (res) => {         
            return res.map( item => ({currency: item.currencies}) )
        } 
        )
    );
}


getNoticias(country:string='us'){
    const url: string = `${this._urlBaseNew}&country=${country}`;

    return this.http.get<ResNewsAPI>(url)

   
}

}
