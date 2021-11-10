import { Component, OnInit } from '@angular/core';
import {ListaAsignaturas} from '../../interfaces/asignaturas';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})

export class InicioComponent implements OnInit {
  
  ListaAsignaturas=ListaAsignaturas;
  constructor() {
   
   }

  ngOnInit(): void {
  }
  promedio(nota1:number,porcentaje1:number,nota2:number,porcentaje2:number,nota3:number,porcentaje3:number,nota4:number,porcentaje4:number,nota5:number,porcentaje5:number):number{
    let promedio:number=0;
    promedio=((nota1*(porcentaje1/100))+(nota2*(porcentaje2/100))+(nota3*(porcentaje3/100))+(nota4*(porcentaje4/100))+(nota5*(porcentaje5/100)));
    return(Number(promedio.toFixed(1)));
  }
  clase(promedio:number):number{
    let idClase:number=0
    if (promedio>6){
      idClase=1;
    }else if(promedio<4.5){
      idClase=3;
    }else{
      idClase=2;
    }
    return(idClase);
  }
  
  
}
