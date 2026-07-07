import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cursos, Curso } from '../../services/cursos';

@Component({
  selector: 'app-formacao',
  standalone: true,
  templateUrl: './formacao.html',
  styleUrls: ['./formacao.css'],
  imports: [CommonModule, RouterModule]
})
export class FormacaoComponent implements OnInit {

  periodoAtual = 0;
  cursosUdemy: Curso[] = [];
  cursosUdemyDuplicados: Curso[] = [];

  constructor(private cursos:Cursos){}

  ngOnInit():void{

    this.calcularPeriodoAtual();

    this.cursosUdemy = this.cursos.getCursosUdemy();
    this.cursosUdemyDuplicados = [...this.cursosUdemy, ...this.cursosUdemy];

  }

  calcularPeriodoAtual():void{

    const inicio=new Date(2023,3);
    const hoje=new Date();

    const meses=(hoje.getFullYear()-inicio.getFullYear())*12
    +(hoje.getMonth()-inicio.getMonth());

    this.periodoAtual=Math.floor(meses/6)+1;

  }

}