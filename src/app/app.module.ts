import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment';
import 'moment/locale/fr';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { LinkyModule } from 'angular-linky';
import { SeriePage } from '../pages/serie/serie';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { NewsPage } from '../pages/news/news';
import { LireNewsPage } from '../pages/lire-news/lire-news';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeriePage,
    ItemDetailsPage,
    NewsPage,
    LireNewsPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeriePage,
    ItemDetailsPage,
    NewsPage,
    LireNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia
  ]
})
export class AppModule {}
