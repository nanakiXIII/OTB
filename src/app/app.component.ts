import { Component, ViewChild  } from '@angular/core';
import { Platform, App, MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplitPane } from '../providers/split-pane';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SeriePage } from '../pages/serie/serie';
import { NewsPage } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Login;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public app: App, 
    public splitPane: SplitPane, 
    public menu: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  test(){
    this.menu.toggle();
    // console.log(this.app.getActiveNavs());
    // this.app.getRootNav().push(AboutPage);
    this.nav.setRoot(AboutPage)
  }
  news(){
    this.menu.toggle();
    this.nav.setRoot(NewsPage)
  }
  compte(){
    this.menu.toggle();
    this.nav.setRoot(HomePage)
  }
  serie(){
    this.menu.toggle();
    this.nav.setRoot(SeriePage)
  }
   backToWelcome(){
    this.app.getRootNav().push(Login);
    // const root = this.app.getRootNav();
    // root.popToRoot();
  }

  logout(){
    //Api Token Logout 
    
    localStorage.clear();
    this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 500);
    
  }
}
