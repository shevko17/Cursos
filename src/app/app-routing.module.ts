import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {EditarCursoComponent} from './componentes/editar-curso/editar-curso.component';
import {CursosComponent} from './componentes/cursos/cursos.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"editarCurso/:nombre",component:EditarCursoComponent},
  {path:"cursos",component:CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
