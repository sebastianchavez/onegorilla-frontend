import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { SliderComponent } from './components/slider/slider.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Sweet alert 2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    SliderComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    Angular2UsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
