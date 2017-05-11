import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../providers/mock-data';

/**
 * Generated class for the CollegeList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-college-list',
  templateUrl: 'college-list.html',
})
export class CollegeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public MockDataService: MockData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollegeList');
  }
  goCollegePage(school){
    this.navCtrl.push('CollegePage',{
      college: school
    })
  }
}
