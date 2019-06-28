import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'slider', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
