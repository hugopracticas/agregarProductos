import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/sistema.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor() { 
    this._productos = JSON.parse(localStorage.getItem('productos')!) || [];
  }

  private _productos: Producto[] = [
    {
      nombre: 'Redmi Note8',
      marca: 'Xiaomi',
      categoria: 'Telefonia',
      costo: 3000,
      imagen: '',
      descripcion: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
      // identificador: 'tel12345'
    },
    {
      nombre: 'Monitor',
      marca: 'SAMSUNG',
      categoria: 'Computacion',
      costo: 4000,
      imagen: '',
      descripcion: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
      //identificador: 'com12345'
    },
    {
      nombre: 'Audifonos',
      marca: 'SONY',
      categoria: 'Audio',
      costo: 700,
      imagen: '',
      descripcion: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
      //identificador: 'aud12345'
    },
    {
      nombre: 'Audifonos',
      marca: 'SONY',
      categoria: 'Audio',
      costo: 700,
      imagen: '',
      descripcion: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
      //identificador: 'aud12345'
    }
  ];

  /**Obtener producto */

  get productos(): Producto[] {
    return [...this._productos];
  }

  /**Agregar producto */
  agregarProducto( producto: Producto ){
    this._productos.push( producto );
    localStorage.setItem('productos', JSON.stringify(this._productos));
  }

  /**Buscar Producto */
  buscarProducto( id: string ){
    const resultado = this._productos.filter( producto => producto.nombre === id );
    return resultado;
  }
}
