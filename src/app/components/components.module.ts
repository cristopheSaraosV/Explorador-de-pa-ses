import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MonedaComponent } from './moneda/moneda.component';
import { ClimaComponent } from './clima/clima.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
        SearchComponent,
        MapComponent,
        DescripcionComponent,
        NoticiasComponent,
        MonedaComponent,
        ClimaComponent,
        DetailComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        SearchComponent,
        MapComponent,
        DescripcionComponent,
        NoticiasComponent,
        MonedaComponent,
        ClimaComponent,
        DetailComponent
    ]
})
export class ComponentsModule { }
