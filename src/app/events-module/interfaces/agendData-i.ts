import { AgendI } from '../../agends-module/interfaces/agend-i';
import { PeopleI } from '../../people-module/interfaces/people-i';

export interface AgendDataI {
  agend: AgendI;
  owner: PeopleI;
}
