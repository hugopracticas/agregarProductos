import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../services/producto-service.service';
import { Producto } from '../../interfaces/sistema.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  nombre: string;

  constructor( private productoService: ProductoServiceService, 
              private router: Router ) { }

  ngOnInit(): void {
   
  }

  detalleProducto: Producto;
  index: number;

  get productos(){
    console.log(this.productoService.productos);
    return this.productoService.productos;
  }

  detalle( producto: Producto, index: number ){
    this.detalleProducto = producto;
    let iindex: number = index;
    console.log(this.detalleProducto.nombre);
    console.log(iindex);
    this.router.navigateByUrl('/detalleProducto')
   
  }

  buscaProducto(){
    
  }

}
