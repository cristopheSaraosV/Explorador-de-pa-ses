import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styles: [
  ]
})
export class ClimaComponent implements OnInit {

    countryName: string = ''
    constructor(private data: DataService) {}
    ngOnInit(): void {
      this.data.currentCountry.subscribe(
        (country) => (this.countryName = country),
      )
    }
}
