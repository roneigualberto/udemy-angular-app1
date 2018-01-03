import { Component, OnInit,OnDestroy, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public intrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  rodada: number = 0;
  rodadaFrase: Frase;
  public progresso: number = 0;

  public tentativas: number = 3;

   @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

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
      this.progresso += 25;

      if (this.rodada === 4) {
        alert('Concluiu as traduções com sucesso!');
        this.encerrarJogo.emit('vitoria');
      }
      this.atualizaRodada();

    }
    else {
      alert('A tradução está incorreta');
      this.tentativas--;
      if (this.tentativas === -1) { 
        alert('Você perdeu todas as tentativas');
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

  ngOnDestroy(): void {
    console.log('');
  }

 

}
