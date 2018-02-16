import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ChildrenPage } from '../children/children';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

goToSignup(){
  this.navCtrl.push(RegisterPage);
}
goToChildren(){
  this.navCtrl.push(ChildrenPage);
}
 

}
