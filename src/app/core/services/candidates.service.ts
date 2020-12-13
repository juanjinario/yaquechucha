import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProposal, ICandidate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private collectionName: string;

  constructor(private firestore: AngularFirestore) {
    this.collectionName = 'candidates';
  }

  getCandidates() {
    const collection = this.firestore.collection(this.collectionName);
    return collection.valueChanges();
  }

  getCandidate(id) {
    const collection = this.firestore.collection(this.collectionName).doc(id);
    return collection.valueChanges()
      .pipe(map((data: ICandidate) => data));;
  }

  getProposals(id) {
    const collection = this.firestore.collection(this.collectionName);
    return collection.doc(id).collection('proposals').valueChanges()
      .pipe(map((data: IProposal[]) => data));
  }

  createCandidate(id, data) {
    return this.firestore.collection(this.collectionName).doc(id).set(data);
  }

  getId() {
    return this.firestore.createId();
  }
}
