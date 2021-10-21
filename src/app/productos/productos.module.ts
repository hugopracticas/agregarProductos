import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    InputComponent,
    ListaProductosComponent,
    AgregarProductosComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductosModule { }
