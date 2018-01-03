import { Component, OnInit, Input } from '@angular/core';

import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number = 0;


  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
   
  }

  ngOnInit() {
    console.log(this.coracoes);

    console.log('Tentativas: ', this.tentativas);
  }

}
