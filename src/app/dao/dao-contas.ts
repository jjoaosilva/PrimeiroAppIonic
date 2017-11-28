import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export class DAOContas{

    list;

    constructor(){
        this.list = [];
    }

    getList(){
        this.list = [
            {descricao: "Alimentacao"},
            {descricao: "Lazer"},
            {descricao: "Transporte"}
        ];
        
        return this.list;
    }

    insert(conta){
        this.list.push({descricao: conta});
    }

    edit(){

    }

    delete(conta){
        let index = this.list.indexOf(conta);
        this.list.splice(index, 1);
    }
}