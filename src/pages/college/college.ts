import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the College page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-college',
  templateUrl: 'college.html',
})
export class CollegePage {
  college: {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('college'));
    this.college = this.navParams.get('college');
  }

  ionViewDidLoad() {


  }

}
