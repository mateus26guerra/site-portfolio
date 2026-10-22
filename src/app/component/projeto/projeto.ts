import { Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto, ProjetosService } from '../../services/projeto';

interface ImagemGaleria {
  src: string;
  titulo?: string;
}




@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projeto.html',
  styleUrls: ['./projeto.css']
})
export class Projetoo {

  projetoAny:any[]=[];

  @ViewChild('carousel')
  carousel!:ElementRef<HTMLDivElement>;

  constructor(private projeto:ProjetosService, private zone:NgZone){}

  ngOnInit(){
    this.projetoAny=this.projeto.getProjetos();
  }

  proximo(){
    this.carousel.nativeElement.scrollBy({
      left:380,
      behavior:'smooth'
    });
  }

  anterior(){
    this.carousel.nativeElement.scrollBy({
      left:-380,
      behavior:'smooth'
    });
  }


  scrollLeft() {
  this.carousel.nativeElement.scrollBy({
    left: -340,
    behavior: 'smooth'
  });
}

scrollRight() {
  this.carousel.nativeElement.scrollBy({
    left: 340,
    behavior: 'smooth'
  });
}

projetoSelecionado: Projeto | null = null;

imagensProjeto: ImagemGaleria[] = [];
diagramasProjeto: ImagemGaleria[] = [];

imagemAmpliada: string | null = null;

// Carrossel automático: a lista é duplicada para o loop não ter emenda
get itensCarrossel(): ImagemGaleria[] {
  return [...this.itensGaleria, ...this.itensGaleria];
}

private trilhoEl?: HTMLElement;
private animacaoId = 0;
private posicao = 0;
private mouseEmCima = false;
private pausadoAte = 0;
private readonly velocidade = 0.5; // px por quadro

// O carrossel só existe com o modal aberto, então liga/desliga junto com ele
@ViewChild('trilhoImagens')
set trilhoImagens(ref: ElementRef<HTMLElement> | undefined) {
  this.pararCarrossel();
  this.trilhoEl = ref?.nativeElement;
  if (this.trilhoEl) this.iniciarCarrossel();
}

private iniciarCarrossel(): void {
  const el = this.trilhoEl!;
  this.posicao = 0;
  el.scrollLeft = 0;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Fora da zona do Angular para não rodar detecção de mudanças a cada quadro
  this.zone.runOutsideAngular(() => {
    const passo = () => {
      const metade = el.scrollWidth / 2;

      if (this.mouseEmCima || performance.now() < this.pausadoAte) {
        this.posicao = el.scrollLeft;
      } else if (metade > el.clientWidth) {
        this.posicao += this.velocidade;
        if (this.posicao >= metade) this.posicao -= metade;
        el.scrollLeft = this.posicao;
      }

      this.animacaoId = requestAnimationFrame(passo);
    };
    this.animacaoId = requestAnimationFrame(passo);
  });
}

private pararCarrossel(): void {
  cancelAnimationFrame(this.animacaoId);
}

// Print de celular (em pé) aparece inteiro no card, sem cortar
marcarRetrato(event: Event): void {
  const img = event.target as HTMLImageElement;
  img.classList.toggle('retrato', img.naturalHeight > img.naturalWidth);
}

pausarCarrossel(pausar: boolean): void {
  this.mouseEmCima = pausar;
}

passarCarrossel(direcao: number): void {
  const el = this.trilhoEl;
  if (!el) return;

  const slide = el.querySelector<HTMLElement>('.slide');
  const distancia = slide ? slide.offsetWidth + 16 : 300;
  const metade = el.scrollWidth / 2;

  // Pula para a cópia equivalente antes de voltar, para o loop continuar sem fim
  if (direcao < 0 && el.scrollLeft < distancia) el.scrollLeft += metade;
  if (direcao > 0 && el.scrollLeft + distancia >= metade) el.scrollLeft -= metade;

  this.pausadoAte = performance.now() + 800;
  el.scrollBy({ left: direcao * distancia, behavior: 'smooth' });
}

get itensGaleria(): ImagemGaleria[] {
  return [...this.imagensProjeto, ...this.diagramasProjeto];
}

get todasImagens(): string[] {
  return this.itensGaleria.map(item => item.src);
}

abrirProjeto(projeto: Projeto){
  this.projetoSelecionado = projeto;

  this.imagensProjeto = [
    { src: projeto.imagem1, titulo: projeto.tituloImagem1 },
    { src: projeto.imagem2, titulo: projeto.tituloImagem2 },
    { src: projeto.imagem3, titulo: projeto.tituloImagem3 },
    { src: projeto.imagem4, titulo: projeto.tituloImagem4 },
    { src: projeto.imagem5, titulo: projeto.tituloImagem5 },
    { src: projeto.imagem6, titulo: projeto.tituloImagem6 }
  ].filter(item => !!item.src) as ImagemGaleria[];

  this.diagramasProjeto = [
    { src: projeto.uml, titulo: projeto.tituloUml || 'Diagrama UML' },
    { src: projeto.arquitetura, titulo: projeto.tituloArquitetura || 'Arquitetura' }
  ].filter(item => !!item.src) as ImagemGaleria[];

  // Trava a rolagem da página enquanto o modal está aberto
  document.body.style.overflow = 'hidden';
}

fecharProjeto(){
  this.projetoSelecionado = null;
  this.imagemAmpliada = null;
  document.body.style.overflow = '';
}

ampliarImagem(url: string): void {
  this.imagemAmpliada = url;
}

fecharImagemAmpliada(): void {
  this.imagemAmpliada = null;
}

navegarImagem(direcao: number, event?: Event): void {
  event?.stopPropagation();

  const imagens = this.todasImagens;
  if (!this.imagemAmpliada || imagens.length < 2) return;

  const atual = imagens.indexOf(this.imagemAmpliada);
  this.imagemAmpliada = imagens[(atual + direcao + imagens.length) % imagens.length];
}

@HostListener('document:keydown', ['$event'])
onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    if (this.imagemAmpliada) {
      this.fecharImagemAmpliada();
    } else if (this.projetoSelecionado) {
      this.fecharProjeto();
    }
  }

  if (this.imagemAmpliada && event.key === 'ArrowLeft') this.navegarImagem(-1);
  if (this.imagemAmpliada && event.key === 'ArrowRight') this.navegarImagem(1);
}

ngOnDestroy(){
  this.pararCarrossel();
  document.body.style.overflow = '';
}
}
