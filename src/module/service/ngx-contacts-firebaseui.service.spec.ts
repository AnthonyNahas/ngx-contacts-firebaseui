import {TestBed, inject} from '@angular/core/testing';

import {NgxContactsFirebaseUIService} from './ngx-contacts-firebaseui.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';

describe('NgxContactsFirebaseUIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFirestoreModule],
      providers: [
        NgxContactsFirebaseUIService,
        {
          provide: FirebaseAppConfigToken,
          useValue: {
            apiKey: 'AIzaSyCuXvsqNNs_swqfEgpwj1TkSguz1x7MAOM',
            authDomain: 'ngx-contacts-firebaseui.firebaseapp.com',
            databaseURL: 'https://ngx-contacts-firebaseui.firebaseio.com',
            projectId: 'ngx-contacts-firebaseui',
            storageBucket: 'ngx-contacts-firebaseui.appspot.com',
            messagingSenderId: '714316265414'
          }
        },
        {
          provide: FirebaseAppName,
          useFactory: ''
        }]
    });
  });

  it('should create service', inject([NgxContactsFirebaseUIService], (service: NgxContactsFirebaseUIService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([NgxContactsFirebaseUIService], (service: NgxContactsFirebaseUIService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

  it('should say hello to provided user', inject([NgxContactsFirebaseUIService], (service: NgxContactsFirebaseUIService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
