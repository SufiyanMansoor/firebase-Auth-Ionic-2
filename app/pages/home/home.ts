import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/common';
import {AuthData} from '../../providers/auth-data/auth-data';
import {LoginPage} from '../login/login';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'build/pages/home/home.html';
  

})
export class HomePage {
 
  constructor(public nav: NavController) {
    
  }
  logOut(){
  this.authData.logoutUser().then(() => {
    this.nav.rootNav.setRoot(LoginPage);
  });
}
}
