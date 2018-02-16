import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountsProvider } from '../../providers/accounts/accounts';

/**
 * Generated class for the ChildrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-children',
  templateUrl: 'children.html',
})
export class ChildrenPage {
  data;
  username;
  constructor(public navCtrl: NavController, public navParams: NavParams,public accountsProvider:AccountsProvider) {
    this.username = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrenPage');
    this.accountsProvider.getChildren().subscribe(res=>{
      this.data = res;
    });
  }

}
