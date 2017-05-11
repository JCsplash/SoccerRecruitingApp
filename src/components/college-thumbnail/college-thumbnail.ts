import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CollegeThumbnail component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'college-thumbnail',
  templateUrl: 'college-thumbnail.html'
})
export class CollegeThumbnail {
  @Input('college') college;
  text: string;

  constructor(public navCtrl: NavController) {}
  goCollegePage(){
    this.navCtrl.push('CollegePage', {
      college: this.college
    })
  }
}
