import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nome;
  private listContas: any;

  constructor() {
    this.nome = "Joao";
  }

  getNome(){
    return "retornado pelo metodo: " + this.nome;
  }

}
