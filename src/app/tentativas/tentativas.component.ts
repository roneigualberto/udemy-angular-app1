import { Component, OnInit,OnChanges, Input } from '@angular/core';

import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;


  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
  }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      //this.
      this.coracoes[indice - 1].cheio = false;
    }

    /*this.coracoes.forEach((coracao: Coracao, index:number) => {
        coracao.cheio = this.tentativas
    });*/
    console.log('Tentativas: ', this.tentativas);
  }

  ngOnInit() {
    console.log(this.coracoes);

    
  }

}
