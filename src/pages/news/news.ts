import { Component } from "@angular/core";
import { NavController, App } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { LireNewsPage } from "../lire-news/lire-news";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  userPostData = {
    user_id: "",
    token: "",
    lastCreated:""
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
    this.getNews();
  }
  getNews() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "news").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.feedData;
          const dataLength = this.resposeData.feedData.length;

          this.userPostData.lastCreated = this.resposeData.feedData[
            dataLength - 1
          ].date;
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
  doInfinite(e): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.authService.postData(this.userPostData, "news").then(
          result => {
            this.resposeData = result;
            console.log(this.resposeData);
            if (this.resposeData.feedData.length) {
              const newData = this.resposeData.feedData;
              this.userPostData.lastCreated = this.resposeData.feedData[
                newData.length - 1
              ].date;

              for (let i = 0; i < newData.length; i++) {
                this.dataSet.push(newData[i]);
              }
            } else {
              console.log("No user updates");
            }
          },
          err => {
            //Connection failed message
          }
        );
        resolve();
      }, 500);
    });
  }
  itemTapped(event, item) {
    this.navCtrl.push(LireNewsPage, {
      item: item
    });
  }
  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
