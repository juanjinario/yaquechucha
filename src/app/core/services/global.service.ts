import { Injectable } from '@angular/core';
import { ICandidate } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _candidateProfile: ICandidate;

  constructor() { }

  get candidateProfile():  ICandidate {
    return this._candidateProfile;
  }

  set candidateProfile(profile: ICandidate) {
    this._candidateProfile = profile;
  }
}
