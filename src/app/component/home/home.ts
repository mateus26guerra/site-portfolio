import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

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
  styleUrls: ['./home.css']
})
export class Home implements OnInit, AfterViewInit {

  // Valores que aparecem na tela
  projetos = 0;
  commits = 0;
  cursos = 0;
  empresas = 0;

  // Valores finais
  private readonly totalProjetos = 50;
  private readonly totalCommits = 250;
  private readonly totalCursos = 22;
  private readonly totalEmpresas = 3;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.animarContadores();
    }, 500);

  }

  baixarCurriculo(): void {

    const link = document.createElement('a');

    link.href = 'mateus.pdf';

    link.download = 'Mateus_Guerra_Curriculo.pdf';

    link.click();

  }

  private animarContadores(): void {

    this.animarNumero('projetos', this.totalProjetos, 20);

    this.animarNumero('commits', this.totalCommits, 10);

    this.animarNumero('cursos', this.totalCursos, 50);

    this.animarNumero('empresas', this.totalEmpresas, 600);

  }

  private animarNumero(
    campo: 'projetos' | 'commits' | 'cursos' | 'empresas',
    destino: number,
    velocidade: number
  ): void {

    let valor = 0;

    const incremento = Math.ceil(destino / 80);

    const timer = setInterval(() => {

      valor += incremento;

      if (valor >= destino) {

        valor = destino;

        clearInterval(timer);

      }

      this[campo] = valor;

    }, velocidade);

  }

}