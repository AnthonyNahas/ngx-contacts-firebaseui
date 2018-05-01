import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'ngx-contacts-firebaseui-demo-id'}),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCuXvsqNNs_swqfEgpwj1TkSguz1x7MAOM',
      authDomain: 'ngx-contacts-firebaseui.firebaseapp.com',
      databaseURL: 'https://ngx-contacts-firebaseui.firebaseio.com',
      projectId: 'ngx-contacts-firebaseui',
      storageBucket: 'ngx-contacts-firebaseui.appspot.com',
      messagingSenderId: '714316265414'
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
