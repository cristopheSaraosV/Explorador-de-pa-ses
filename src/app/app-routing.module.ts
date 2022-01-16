import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { MonedaComponent } from './pages/moneda/moneda.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    { path:'',component: PagesComponent ,children:
    [
        {path:'descripcion', component:DescripcionComponent},
        {path:'noticias', component:NoticiasComponent},
        {path:'moneda',  component:MonedaComponent},
        {path:'clima',    component:ClimaComponent},
    ]},
    { path:'**', redirectTo:'descripcion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
