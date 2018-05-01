import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxContactsFirebaseUIModule} from 'ngx-contacts-firebaseui';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgxContactsFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyCuXvsqNNs_swqfEgpwj1TkSguz1x7MAOM',
      authDomain: 'ngx-contacts-firebaseui.firebaseapp.com',
      databaseURL: 'https://ngx-contacts-firebaseui.firebaseio.com',
      projectId: 'ngx-contacts-firebaseui',
      storageBucket: 'ngx-contacts-firebaseui.appspot.com',
      messagingSenderId: '714316265414'
    }),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
