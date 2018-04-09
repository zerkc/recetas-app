import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Firebase } from '@ionic-native/firebase';
import { HttpClientModule } from '@angular/common/http';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//components
import { RecipientItemComponent } from '../components/recipientItem/recipientItem';
import { RecipientListComponent } from '../components/recipientList/recipientList';
import { DetailsPage } from '../pages/details/details';
import { ModalStepDetails } from '../components/modals/stepmodal/stepmodal';
// AF2 Settings
export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    RecipientItemComponent,
    RecipientListComponent,
    ModalStepDetails
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    ModalStepDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
