// src/app/component/lista-de-todos-os-cursos/lista-de-todos-os-cursos.ts
import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../services/cursos';

@Component({
  selector: 'app-lista-de-todos-os-cursos',
  standalone: false,
  templateUrl: './lista-de-todos-os-cursos.html',
  styleUrls: ['./lista-de-todos-os-cursos.css'] // <- Atenção: é "styleUrls", não "styleUrl"
})
export class ListaDeTodosOsCursos implements OnInit {

  cursosUdemy: any[] = [];

  constructor(private cursosService: Cursos) {}

  ngOnInit(): void {
    this.cursosUdemy = this.cursosService.getCursosUdemy();
  }
}
