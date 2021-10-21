import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoServiceService } from '../../services/producto-service.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  constructor( private productoService: ProductoServiceService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  productoForm = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    marca: new FormControl('',[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    categoria: new FormControl('',[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)  
    ]),
    costo: new FormControl('',[
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(1),
      Validators.pattern(/[0-9]/)
    ]),
    imagen: new FormControl('',[
      Validators.required
    ]),
    descripcion: new FormControl('',[
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(5)
    ]),
    // identificador: new FormControl('',[
    //   Validators.required,
    //   Validators.maxLength(8),
    //   Validators.minLength(8)
    // ])
  });

  onSubmit(){
    if(this.productoForm.invalid){
      return;
    }
    this.productoService.agregarProducto(this.productoForm.value)
    this.router.navigateByUrl('/listadoProducto')
  }
}
