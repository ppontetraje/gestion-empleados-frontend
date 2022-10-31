import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //obtiene lista de empleados en backend
  private baseURL="http://localhost:8081/api/v1/empleados";
  constructor(private httpClient : HttpClient) {

   }

   obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
   }

 

}
