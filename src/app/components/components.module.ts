import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MonedaComponent } from './moneda/moneda.component';
import { ClimaComponent } from './clima/clima.component';



@NgModule({
  declarations: [
        SearchComponent,
        MapComponent,
        DescripcionComponent,
        NoticiasComponent,
        MonedaComponent,
        ClimaComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SearchComponent,
        MapComponent,
        DescripcionComponent,
        NoticiasComponent,
        MonedaComponent,
        ClimaComponent,
    ]
})
export class ComponentsModule { }
