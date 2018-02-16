import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountsProvider } from '../../providers/accounts/accounts';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ChildrenPage } from '../children/children';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public accountsProvider:AccountsProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  return(){
    this.navCtrl.pop();
  }

  signUp(data){
    this.data = data;
    this.accountsProvider.register(JSON.stringify(data.value)).subscribe(res=>{
      this.createAlert("Congrats your account was created!");

    },
    err => {
      this.showAlert(err.message);

    }
  );
  }
  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']

    });
    alert.present();
  }

  createAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Congrats!',
      subTitle: message,
      buttons: [{
        text: "Ok",
        handler :()=>{
          this.navCtrl.push(ChildrenPage,{
            name : this.data.value.name
          })
        }
      }]
    });
    alert.present();
  }


 

}
