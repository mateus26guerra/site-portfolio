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

  nome: string = '';
  assunto: string = '';
  mensagem: string = '';

  

  enviarMensagem() {
    const texto = `Nome: ${this.nome} %0AMensagem: ${this.mensagem}`;
    const numero = '5581996836797'; // Exemplo: 5599999999999
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  }
}
