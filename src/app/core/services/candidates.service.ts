import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private collectionName: string;

  constructor(private firestore: AngularFirestore) {
    this.collectionName = "candidates";
  }

  getCandidates() {
    const collection = this.firestore.collection(this.collectionName);
    return collection.valueChanges();
  }

  createCandidate(id, data) {
    return this.firestore.collection(this.collectionName).doc(id).set(data);
  }

  getId() {
    return this.firestore.createId();
  }
}
