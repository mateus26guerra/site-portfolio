import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Experiencia } from '../experiencia/experiencia';
import { FormacaoComponent } from '../formacao/formacao';
import { Projetoo } from '../projeto/projeto';
import { FaleComigoComponent } from '../fale-comigo/fale-comigo';
import { ParticlesContact } from '../particles-contact/particles-contact';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Experiencia,
    FormacaoComponent,
    Projetoo,
    FaleComigoComponent,
    ParticlesContact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
