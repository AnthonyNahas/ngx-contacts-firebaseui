import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {Contact} from 'ngx-material-contacts';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

export const collections = {
  contacts: 'contacts',
};

@Injectable()
export class NgxContactsFirebaseUIService {

  constructor(public afs: AngularFirestore) {
  }

  // get timestamp() {
  //     return firebase.firestore.FieldValue.serverTimestamp();
  // }

  public getContactDocRefByID(id: string): AngularFirestoreDocument<Contact> {
    return this.afs.doc(`${collections.contacts}/${id}`);
  }

  public getContactsCollectionRef(queryFn?: QueryFn): AngularFirestoreCollection<Contact> {
    return this.afs.collection(`${collections.contacts}/`, queryFn);
  }

  public async addContactData(contact: Contact): Promise<Contact> {
    try {
      const contactsCollectionRef: AngularFirestoreCollection<Contact> = this.getContactsCollectionRef();
      const contactDocRef: DocumentReference = await contactsCollectionRef.add({name: contact.name, email: contact.email});
      const contactAdded: AngularFirestoreDocument<Contact> = await this.getContactDocRefByID(contactDocRef.id);
      await contactAdded.update({id: contactDocRef.id});
      return Object.assign(contact, {id: contactDocRef.id});
    } catch (e) {
      return e;
    }

  }

  public updateContactData(contact: Contact): Promise<any> {
    const contactRef: AngularFirestoreDocument<Contact> = this.getContactDocRefByID(contact.id);
    return contactRef.set(contact, {merge: true})
  }

  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
