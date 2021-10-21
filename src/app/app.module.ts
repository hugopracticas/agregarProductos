import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosModule } from './productos/productos.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent,
    //InputComponent
  ],
  exports:[
   //InputComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ProductosModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
