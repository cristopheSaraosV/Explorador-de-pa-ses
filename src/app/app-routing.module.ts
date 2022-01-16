import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    { path:'',component: PagesComponent ,children:
    [
        {path:'descripcion', component:DescripcionComponent},
        {path:'noticias', component:NoticiasComponent},
        {path:'moneda',  component:MonedaComponent},
        {path:'clima',    component:ClimaComponent},
    ]},
    { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
