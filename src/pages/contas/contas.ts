import { Component } from '@angular/core';
import { NavController, ModalController, AlertController} from 'ionic-angular';
import { DAOContas } from '../../app/dao/dao-contas';
import { ModalContasPage} from '../modalContas/modalContas';

@Component({
  templateUrl: 'contas.html'
})
export class ContasPage {

  private dao: any;
  private listContas: any;
  

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.dao = new DAOContas();
    this.listContas = this.dao.getList();

    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
  }

  insertList(data){
    this.dao.insert(data);
  }

  insert() {
    let alert = this.alertCtrl.create({
      title: 'Descrição',
      inputs: [
        {
          name: 'descricao',
          placeholder: 'Insira o novo gasto'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            if(data.descricao == ""){
              return false;
            }else{
              this.insertList(data.descricao);
              return true;
            }
            
          }
        }
      ]
    });
    alert.present();
  }

  edit(conta){
    let alert = this.alertCtrl.create({
      title: 'Editar Conta',
      inputs: [
        {
          name: 'descricao',
          value: conta.descricao
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            if(data.descricao == ""){
              return false;
            }else{
              conta.descricao = data.descricao;
              return true;
            }
            
          }
        }
      ]
    });
    alert.present();    
  }

  delete(conta){
    this.dao.delete(conta);
  }

}