import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockData } from '../../providers/mock-data';

/**
 * Generated class for the SearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public MockDataService: MockData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResults');
  }
  goCollegePage(school){
    this.navCtrl.push('CollegePage',{
      college: school
    })
  }

}
