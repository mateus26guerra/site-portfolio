import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { FaleComigoComponent } from './component/fale-comigo/fale-comigo';
import { FormsModule } from '@angular/forms';
import { Experiencia } from './component/experiencia/experiencia';
import { Footer } from './shared/footer/footer';
import { FormacaoComponent } from './component/formacao/formacao';
import { ListaDeTodosOsCursos } from './shared/lista-de-todos-os-cursos/lista-de-todos-os-cursos';
import { Home } from './component/home/home';
import { ParticlesContact } from './component/particles-contact/particles-contact';
import { Projetoo } from './component/projeto/projeto';

import { CommonModule } from '@angular/common';
import { Capgemini } from './component/experiencia/capgemini/capgemini';

@NgModule({
  declarations: [
    App,
    ListaDeTodosOsCursos,
    Capgemini,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Navbar,
    FaleComigoComponent,
    Experiencia,
    Footer,
    FormacaoComponent,
    Home,
    ParticlesContact,
    Projetoo,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
