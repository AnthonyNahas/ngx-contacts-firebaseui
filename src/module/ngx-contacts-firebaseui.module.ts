import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgxContactsFirebaseuiComponent} from './component/ngx-contacts-firebaseui.component';
import {NgxContactsFirebaseUIService} from './service/ngx-contacts-firebaseui.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';

import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {NgxMaterialContactsModule} from 'ngx-material-contacts';

// Export module's public API
export {NgxContactsFirebaseuiComponent} from './component/ngx-contacts-firebaseui.component';
export {NgxContactsFirebaseUIService} from './service/ngx-contacts-firebaseui.service';

@NgModule({
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule.forRoot(null),
    NgxMaterialContactsModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports: [NgxContactsFirebaseuiComponent, NgxMaterialContactsModule, NgxAuthFirebaseUIModule],
  declarations: [NgxContactsFirebaseuiComponent]
})
export class NgxContactsFirebaseUIModule {
  static forRoot(configFactory?: FirebaseAppConfig, appNameFactory?: () => string): ModuleWithProviders {
    return {
      ngModule: NgxContactsFirebaseUIModule,
      providers:
        [{
          provide: FirebaseAppConfigToken,
          useValue: configFactory
        },
          {
            provide: FirebaseAppName,
            useFactory: appNameFactory
          },
          NgxContactsFirebaseUIService
        ]
    };
  }
}
