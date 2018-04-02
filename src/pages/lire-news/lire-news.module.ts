import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LireNewsPage } from './lire-news';

@NgModule({
  declarations: [
    LireNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(LireNewsPage),
  ],
})
export class LireNewsPageModule {}
