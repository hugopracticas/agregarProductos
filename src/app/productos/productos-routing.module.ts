import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'agregaProducto', component: AgregarProductosComponent },
  { path: 'listadoProducto', component: ListaProductosComponent },
  { path: 'detalleProducto', component: DetalleProductoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
