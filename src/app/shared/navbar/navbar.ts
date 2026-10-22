import { Component, OnDestroy, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnDestroy {
  // Altura do navbar fixo, para a seção não ficar escondida atrás dele
  private readonly offset = 72;

  private observer?: IntersectionObserver;

  links = [
    { id: 'inicio', label: 'Início' },
    { id: 'jornada', label: 'Jornada' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ];

  menuOpen = false;
  secaoAtiva = 'inicio';

  constructor() {
    afterNextRender(() => this.observarSecoes());
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  irPara(event: Event, id: string): void {
    event.preventDefault();
    this.menuOpen = false;

    const secao = document.getElementById(id);
    if (!secao) return;

    const top = secao.getBoundingClientRect().top + window.scrollY - this.offset;
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(top, 0), behavior: reduzir ? 'auto' : 'smooth' });
  }

  // Marca como ativa a seção que cruza a faixa logo abaixo do navbar
  private observarSecoes(): void {
    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.secaoAtiva = entry.target.id;
        }
      },
      { rootMargin: `-${this.offset}px 0px -60% 0px` }
    );

    for (const link of this.links) {
      const secao = document.getElementById(link.id);
      if (secao) this.observer.observe(secao);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
