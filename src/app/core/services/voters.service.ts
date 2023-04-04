import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { IVoter } from "@core/models/voter.interface";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class VotersService {
  private readonly _voters$ = new BehaviorSubject<Array<IVoter>>(DUMMY_DATA);

  get voters$(): Observable<Array<IVoter>> {
    return this._voters$;
  }

  constructor() { }

  public addVoter(name: string): void {
    const newVoter: IVoter = {
      id: uuidv4(),
      name,
      voted: false
    };

    this._voters$.next([...this._voters$.value, newVoter])
  }

  public setVoterVoteStatus(id: string): void {
   const voter =  this._voters$.value.find(x => x.id === id);

   if (voter) {
     const voterIndex =  this._voters$.value.indexOf(voter);
     const newArray = this._voters$.value;
     newArray.splice(voterIndex, 1, {...voter, voted: true})
     this._voters$.next([...newArray]);
   }
  }
}

const DUMMY_DATA = [
  {
    id: 'eec4ab8a-00b1-46b6-ab88-07a546fa2581',
    name: 'Adam',
    voted: true
  },
  {
    id: '14261e8a-d764-4103-af13-5c235b2afdf9',
    name: 'Julian',
    voted: false
  },
]
