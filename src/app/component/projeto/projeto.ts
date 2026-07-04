import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosService } from '../../services/projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.html',
  styleUrls: ['./projeto.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Projetoo {
  projetoAny: any[] = [];
  projetoExpandidoIndex: number | null = null;

  constructor(private projeto: ProjetosService) {}

  ngOnInit(): void {
    this.projetoAny = this.projeto.getProjetos();
  }

  toggleDetalhes(index: number): void {
    this.projetoExpandidoIndex = this.projetoExpandidoIndex === index ? null : index;
  }
}
