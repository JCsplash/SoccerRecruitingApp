import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollegeThumbnail } from './college-thumbnail';

@NgModule({
  declarations: [
    CollegeThumbnail,
  ],
  imports: [
    IonicPageModule.forChild(CollegeThumbnail),
  ],
  exports: [
    CollegeThumbnail
  ]
})
export class CollegeThumbnailModule {}
