import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@IonicPage()
@Component({
  selector: 'page-streaming',
  templateUrl: 'streaming.html',
})
export class StreamingPage {
  video: any;
  

  constructor(private streamingMedia: StreamingMedia, public navCtrl: NavController, public navParams: NavParams) {
    this.video = navParams.get('item');
  }
  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape'
    };
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo('http://cnfddl.mass-download.net/%5BC-N-F%5D_Essai_V2_Ne_Pas_DL_Tanaka_12_%5BBD_504P_AAC%5D_%5B27383207%5D.mp4', options);
  }
  ionViewDidLoad() {
   this.startVideo();
  }
 
}
