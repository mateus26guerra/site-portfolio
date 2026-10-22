import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-fale-comigo',
  templateUrl: './fale-comigo.html',
  styleUrls: ['./fale-comigo.css'],
  standalone: true,
  imports: [FormsModule]
})
export class FaleComigoComponent  {

  private readonly numeroWhatsapp = '5581996836797';

  nome: string = '';
  mensagem: string = '';

  canais = [
    {
      nome: 'WhatsApp',
      valor: '(81) 99683-6797',
      icone: 'fa-brands fa-whatsapp',
      link: `https://wa.me/${this.numeroWhatsapp}`
    },
    {
      nome: 'E-mail',
      valor: 'mateus26guerra@gmail.com',
      icone: 'fa-solid fa-envelope',
      link: 'mailto:mateus26guerra@gmail.com'
    },
    {
      nome: 'LinkedIn',
      valor: 'Mateus Guerra',
      icone: 'fa-brands fa-linkedin-in',
      link: 'https://www.linkedin.com/in/mateus-guerra-117637280/'
    },
    {
      nome: 'GitHub',
      valor: 'mateus26game',
      icone: 'fa-brands fa-github',
      link: 'https://github.com/mateus26game'
    }
  ];

  enviarMensagem() {
    if (!this.nome.trim() || !this.mensagem.trim()) return;

    const texto = encodeURIComponent(`Nome: ${this.nome}\nMensagem: ${this.mensagem}`);
    window.open(`https://wa.me/${this.numeroWhatsapp}?text=${texto}`, '_blank');
  }
}
