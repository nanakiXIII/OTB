import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LireNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lire-news',
  templateUrl: 'lire-news.html',
})
export class LireNewsPage {
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LireNewsPage');
  }

}
