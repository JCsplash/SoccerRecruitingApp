import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../providers/mock-data';
/**
 * Generated class for the Messages page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public MockDataService: MockData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Messages');
  }

}
