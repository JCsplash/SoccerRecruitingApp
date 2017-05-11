import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollegeListPage } from './college-list';
import { CollegeThumbnailModule } from '../../components/college-thumbnail/college-thumbnail.module';
@NgModule({
  declarations: [
    CollegeListPage,
  ],
  imports: [
    CollegeThumbnailModule,
    IonicPageModule.forChild(CollegeListPage),
  ],
  exports: [
    CollegeListPage
  ]
})
export class CollegeListPageModule {}
