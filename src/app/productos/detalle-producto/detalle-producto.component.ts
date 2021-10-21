import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/sistema.interface';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() detalleProducto: Object;

  @Input() iindex: number;

  constructor() { 
    console.log(this.iindex);
  }

  ngOnInit(): void {
    
  }

}
