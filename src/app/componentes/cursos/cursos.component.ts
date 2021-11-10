import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {CrearCursoService} from '../../servicios/crear-curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  formulario:FormGroup;
  activarMsg:boolean=false;

  constructor(public Form:FormBuilder, public Servicio:CrearCursoService) {
    this.formulario=this.Form.group({
      nombre:["",Validators.required],
      nota1:["",[Validators.required]],
      porcentaje1:["",[Validators.required]],
      nota2:["",],
      porcentaje2:["",],
      nota3:["",],
      porcentaje3:["",],
      nota4:["",],
      porcentaje4:["",],
      nota5:["",],
      porcentaje5:["",]
    })
   }

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsg=true;
    this.Servicio.EnviarDatos({
    "nombre":this.formulario.get("nombre")?.value,
    "nota1":this.formulario.get("nota1")?.value,
    "porcentaje1":this.formulario.get("porcentaje1")?.value,
    "nota2":this.formulario.get("nota2")?.value,
    "porcentaje2":this.formulario.get("porcentaje2")?.value,
    "nota3":this.formulario.get("nota3")?.value,
    "porcentaje3":this.formulario.get("porcentaje3")?.value,
    "nota4":this.formulario.get("nota4")?.value,
    "porcentaje4":this.formulario.get("porcentaje4")?.value,
    "nota5":this.formulario.get("nota5")?.value,
    "porcentaje5":this.formulario.get("porcentaje5")?.value,
    });
  }
}
