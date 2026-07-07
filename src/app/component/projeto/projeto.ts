import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosService } from '../../services/projeto';




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

  constructor(private projeto:ProjetosService){}

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

projetoSelecionado:any = null;

abrirProjeto(projeto:any){
  this.projetoSelecionado = projeto;
}

fecharProjeto(){
  this.projetoSelecionado = null;
}

// Adicione essa propriedade junto das outras do componente (ex: perto de projetoSelecionado)
imagemAmpliada: string | null = null;

// Adicione esses dois métodos junto dos outros (ex: perto de abrirProjeto / fecharProjeto)
ampliarImagem(url: string): void {
  this.imagemAmpliada = url;
}

fecharImagemAmpliada(): void {
  this.imagemAmpliada = null;
}
}