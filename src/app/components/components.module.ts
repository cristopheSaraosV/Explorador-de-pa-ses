import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { ContainerDetailComponent } from './container-detail/container-detail.component';



@NgModule({
  declarations: [
        SearchComponent,
        MapComponent,
        ContainerDetailComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
      SearchComponent,
      MapComponent,
      ContainerDetailComponent,
    ]
})
export class ComponentsModule { }
