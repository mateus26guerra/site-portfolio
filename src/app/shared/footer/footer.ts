import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  // Altura do navbar fixo, para a seção não ficar escondida atrás dele
  private readonly offset = 72;

  ano = new Date().getFullYear();

  redes = [
    { nome: 'GitHub', icone: 'fa-brands fa-github', link: 'https://github.com/mateus26game' },
    { nome: 'LinkedIn', icone: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/mateus-guerra-117637280/' },
    { nome: 'DEV Community', icone: 'fa-brands fa-dev', link: 'https://dev.to/dev26' },
    { nome: 'Medium', icone: 'fa-brands fa-medium', link: 'https://medium.com/@mateus26fotos' }
  ];

  links = [
    { id: 'inicio', label: 'Início' },
    { id: 'jornada', label: 'Jornada' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'artigos', label: 'Artigos' },
    { id: 'contato', label: 'Contato' }
  ];

  constructor(private router: Router) {}

  irPara(event: Event, id: string): void {
    event.preventDefault();

    // Fora da home (ex.: lista de cursos) a seção não existe: volta pra home e depois desce
    if (!document.getElementById(id)) {
      this.router.navigateByUrl('/').then(() => setTimeout(() => this.rolarAte(id)));
      return;
    }

    this.rolarAte(id);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: this.comportamento() });
  }

  private rolarAte(id: string): void {
    const secao = document.getElementById(id);
    if (!secao) return;

    const top = secao.getBoundingClientRect().top + window.scrollY - this.offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: this.comportamento() });
  }

  private comportamento(): ScrollBehavior {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }
}
