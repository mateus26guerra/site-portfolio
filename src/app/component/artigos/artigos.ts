import { Component } from '@angular/core';

export interface Artigo {
  titulo: string;
  resumo: string;
  // Palavras que aparecem na capa do card
  destaques: string[];
  publicadoEm: string;
  minutosLeitura: number;
  links: {
    devTo?: string;
    medium?: string;
  };
}

@Component({
  selector: 'app-artigos',
  standalone: true,
  templateUrl: './artigos.html',
  styleUrls: ['./artigos.css']
})
export class ArtigosComponent {

  artigos: Artigo[] = [
    {
      titulo: 'SSR, CSR e SSG: qual a diferença e por que tantos SaaS em React acabam sendo vulneráveis?',
      resumo: 'O que muda entre renderizar no navegador, no servidor ou em páginas estáticas, e como a escolha errada acaba expondo dados em SaaS feitos às pressas.',
      destaques: ['SSR', 'CSR', 'SSG'],
      publicadoEm: '10 de agosto de 2026',
      minutosLeitura: 8,
      links: {
        devTo: 'https://dev.to/dev26/ssr-csr-e-ssg-qual-a-diferenca-e-por-que-tantos-saas-em-react-acabam-sendo-vulneraveis-1aj6',
        medium: 'https://medium.com/@mateus26fotos/ssr-csr-e-ssg-qual-a-diferen%C3%A7a-e-por-que-tantos-saas-em-react-acabam-sendo-vulner%C3%A1veis-ccff42bfc17b'
      }
    }
  ];

}
