import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {NgxContactsFirebaseUIService} from '../service/ngx-contacts-firebaseui.service';
import {Contact} from 'ngx-material-contacts';
import {E} from '@angular/core/src/render3';
import {MatTable} from '@angular/material';

@Component({
  selector: 'ngx-contacts-component',
  templateUrl: './ngx-contacts-firebaseui.component.html',
  styleUrls: ['./ngx-contacts-firebaseui.component.scss']
})
export class NgxContactsFirebaseuiComponent implements OnInit, OnDestroy {

  @Input()
  contacts: Contact[] = [];

  @Output()
  onContactAdded: EventEmitter<Contact> = new EventEmitter<Contact>();

  @Output()
  onContactRemoved: EventEmitter<Contact> = new EventEmitter<Contact>();

  @Output()
  onError: EventEmitter<any> = new EventEmitter<any>();

  contactSubscription: any;

  constructor(public auth: AngularFireAuth,
              public contactService: NgxContactsFirebaseUIService) {
  }

  ngOnInit(): void {
    this.contactSubscription = this.contactService
      .getContactsCollectionRef()
      .valueChanges()
      .subscribe(contacts => {
        console.log('contacts -> ', contacts);
        this.contacts = Object.assign(this.contacts, contacts);
      })
  }

  addContact(contact: Contact) {
    console.log('on add contact: ', contact);

    this.contactService.addContactData(contact)
      .then((result: Contact) => {
        console.log('on result: ', result);
        this.onContactAdded.emit(result)
      })
      .catch(err => {
        console.error('on error --> ', err);
        this.onError.emit(err);
      });
  }

  removeContact(contact: Contact) {

  }

  ngOnDestroy(): void {
  }

}
