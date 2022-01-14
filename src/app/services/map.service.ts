import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResAPICountryName } from '../interfaces/resApiCountryName.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }
    _urlBase = environment.restcountries;

  getAllCategories() {
    const url: string = `${this._urlBase}/all?fields=name,latlng`;
  
    return this.http.get<ResAPICountryName[]>(url).pipe(
        map( (todo) => {           
            return  todo.map( item => {
                return  item.name.common
               
            })
        })
    );
}

}
