import { Component } from '@angular/core';
import { NavController, ModalController, ViewController} from 'ionic-angular';
import { DAOContas } from '../../app/dao/dao-contas';

@Component({
  templateUrl: 'modalContas.html'
})
export class ModalContasPage {

    private conta: any;

    constructor(public navCtrl: NavController) {
        this.conta = {descricao: ""};
    }

    salvar(){
        this.navCtrl.pop();
        
    }

}