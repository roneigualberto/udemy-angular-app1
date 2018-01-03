import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public intrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  rodada: number = 0;
  rodadaFrase: Frase;
  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() { 
    this.atualizaRodada();
    console.log(FRASES);
  }

  ngOnInit() {
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement> event.target).value;
    console.log('teste', this.resposta);
  }

  public verificarResposta(): void {
    
    if (this.rodadaFrase.frasePtBr ==  this.resposta) {
      alert('A tradução está correta');
      this.rodada++;
      this.atualizaRodada();
      this.progresso += 25;
    }
    else {
      alert('A tradução está incorreta');
      this.tentativas--;
      if (this.tentativas === -1) { 
        alert('Você perdeu todas as tentativas');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

 

}
