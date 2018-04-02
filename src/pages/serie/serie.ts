import { Component, ViewChild } from "@angular/core";
import { NavController, App } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { ItemDetailsPage } from "../item-details/item-details";

/**
 * Generated class for the SeriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  pet: string = "Animes";
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };

  constructor(
    public common: Common,
    public navCtrl: NavController,
    public app: App,
    public authService: AuthService
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.getScan();
  }
  getScan() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "frigo").then(
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
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
    console.log(item)
  }
  ionViewDidEnter(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriePage');
  }

}
