import { Injectable } from '@angular/core';
import {Asignatura, ListaAsignaturas,} from '../interfaces/asignaturas'


@Injectable({
  providedIn: 'root'
})
export class CrearCursoService {

  constructor() { }

  EnviarDatos(Datos:Asignatura){
    ListaAsignaturas.push(Datos);
    console.log(JSON.stringify(Datos));
  }
  EditarDatos(nombre:string, Datos:Asignatura){
    console.log(JSON.stringify(nombre));
    let objIndex: number= ListaAsignaturas.findIndex((Asignatura=>Asignatura.nombre==nombre));
    ListaAsignaturas[objIndex]=Datos;
    console.log(JSON.stringify(Datos));
  }
}
