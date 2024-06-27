import { Injectable } from '@angular/core';

import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  addDoc
  } from '@angular/fire/firestore';


  export interface Kontakt {
    id?: number;
    ime?: string;
    prezime?: string;
    brojTelefona?: string;
    email?:string;
    omiljeniKontakt?:boolean;
    }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getkontakt() {
    const kontaktiRef = collection(this.firestore, 'kontakti');
    return collectionData(kontaktiRef, { idField: 'id' });
  }

  

  addKontakt(kontakt:Kontakt) {
    const kontaktiRef = collection(this.firestore, 'kontakti');
    return addDoc(kontaktiRef, kontakt);
  }

  updateKontakt(kontakt:Kontakt) {
    const kontaktiRef = doc(this.firestore, `kontakti/${kontakt.id}`);
    return updateDoc(kontaktiRef, {
    ime: kontakt.ime,
    prezime: kontakt.prezime,
    brojTelefona: kontakt.brojTelefona,
    email:kontakt.email,
    omiljeniKontakt:kontakt.omiljeniKontakt,
    });
  }
  deleteKontakt(kontakt: Kontakt) {
    const kontaktiRef = doc(this.firestore, `kontakti/${kontakt.id}`);
    return deleteDoc(kontaktiRef);
    }
}

