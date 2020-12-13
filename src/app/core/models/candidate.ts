import { IAcceptance } from './index';

export interface ICandidate {
  acceptance?: IAcceptance;
  last_name: string;
  first_name: string;
  political_trend: string;
  age: string;
  id: string;
  image: string;
  political_party: string;
  job?: string;
}
