import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core'
import { DataService } from '../../services/data.service'
import { MapService } from '../../services/map.service'
import { CountryDetail } from '../../interfaces/countryDetail.interface'

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: [],
})
export class DescripcionComponent implements OnInit, AfterViewInit {
  countryName: string = ''
  countryDetail: CountryDetail = {
    capital: '',
    flag: '',
    languages: '',
    population: 0,
    region: '',
  }

  constructor(private data: DataService, private mapService: MapService) {}
  ngAfterViewInit(): void {
    this.getDataCountry()
  }

  ngOnInit(): void {
    this.getCountry()
  }

  getCountry() {
    this.data.currentCountry.subscribe(
      (country) => (this.countryName = country),
    )
    this.getDataCountry()
  }

  getDataCountry() {
    this.mapService.getDescriptionCountry(this.countryName).subscribe((res) => {
      console.log(res)
      this.countryDetail = res[0]
    })
  }
}
