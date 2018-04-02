import { Component, ViewChild } from '@angular/core';
import $ from "jquery";
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Common } from '../../providers/common';
import { SeriePage } from '../serie/serie';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  @ViewChild("updatebox") updatebox;
  selectedItem: any;
  info: string = "Informations";
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  userPostData = {
    user_id: "",
    token: "",
    frigo:"",
    temp:"", 
    valeur:""
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public common: Common,
              public app: App,
              public authService: AuthService,
            ) {
            this.selectedItem = navParams.get('item');
            const data = JSON.parse(localStorage.getItem("userData"));
            this.userDetails = data.userData;
            this.userPostData.user_id = this.userDetails.user_id;
            this.userPostData.token = this.userDetails.token;
            this.userPostData.frigo = this.selectedItem.id;
            this.userPostData.valeur = this.selectedItem.valeur;
  }
  ajout(value){
    $('.donnee').append(value);
  }
  del(){
    var text = $('.donnee').text();
    var texts = text.substring(0,text.length-1)
    $('.donnee').text(texts);
  }
  val() {
    var text = $('.donnee').text();
    this.userPostData.temp = text;
    console.log(this.userPostData.temp)
      this.authService.postData(this.userPostData, "ajoutTemperature").then(
        result => {
          this.resposeData = result;
          
          if(this.resposeData.feedData.data == "OK"){
            this.selectedItem.tempId = true;
            this.navCtrl.setRoot(SeriePage);
          }
        },
        err => {
          //Connection failed message
        }
      );
  }
  hs() {
    this.userPostData.temp = "HS";
    console.log(this.userPostData.temp)
      this.authService.postData(this.userPostData, "ajoutTemperature").then(
        result => {
          this.resposeData = result;
          
          if(this.resposeData.feedData.data == "OK"){
            this.selectedItem.tempId = true;
            this.navCtrl.setRoot(SeriePage);
          }
        },
        err => {
          //Connection failed message
        }
      );
  }
  getTemperature() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "temperatureId").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.feedData;
        } else {
          console.log("No access");
          this.common.closeLoading();
        }
      },
      err => {
        //Connection failed message
      }
    );
  }
  ionViewDidEnter(){
    this.getTemperature()
  }
 
}
