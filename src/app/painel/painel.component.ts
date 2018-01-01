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
  public resposta: string;

  constructor() { 
    console.log(FRASES);
  }

  ngOnInit() {
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement> event.target).value;
    console.log('teste', this.resposta);
  }

  public verificarResposta(): void {
    console.log('Verificar resposta: ', this.resposta);
  }

}
