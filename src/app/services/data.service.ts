import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject("eu");
  currentCountry = this.messageSource.asObservable();

  constructor() { }

  changeCountry(country: string) {
    this.messageSource.next(country)
  }

}