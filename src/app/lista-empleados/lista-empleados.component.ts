import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados = dato;
    })
  }

}