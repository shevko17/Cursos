import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarCursoComponent,
    CursosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
