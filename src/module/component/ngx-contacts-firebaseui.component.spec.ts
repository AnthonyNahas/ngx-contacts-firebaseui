import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgxContactsFirebaseuiComponent} from './ngx-contacts-firebaseui.component';
import {NgxMaterialContactsModule} from 'ngx-material-contacts';
import {FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';
import {NgxContactsFirebaseUIService} from '../..';
import {AngularFirestoreModule} from 'angularfire2/firestore';

describe('NgxContactsFirebaseuiComponent', function () {
  let de: DebugElement;
  let comp: NgxContactsFirebaseuiComponent;
  let fixture: ComponentFixture<NgxContactsFirebaseuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxMaterialContactsModule,
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
      declarations: [NgxContactsFirebaseuiComponent],
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
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxContactsFirebaseuiComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
