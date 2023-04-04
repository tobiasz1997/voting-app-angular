import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ICandidate } from "@core/models/candidate.interface";

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private readonly _candidates$ = new BehaviorSubject<Array<ICandidate>>(DUMMY_DATA);

  get candidates$(): Observable<Array<ICandidate>> {
    return this._candidates$;
  }

  constructor() { }

  public addCandidate(name: string): void {
    const newCandidate: ICandidate = {
      id: uuidv4(),
      name,
      votesCount: 0
    };

    this._candidates$.next([...this._candidates$.value, newCandidate])
  }

  public setVoteForCandidate(id: string): void {
    const voter =  this._candidates$.value.find(x => x.id === id);

    if (voter) {
      const voterIndex =  this._candidates$.value.indexOf(voter);
      const newArray = this._candidates$.value;
      newArray.splice(voterIndex, 1, {...voter, votesCount: voter.votesCount + 1})
      this._candidates$.next([...newArray]);
    }
  }
}

const DUMMY_DATA = [
  {
    id: 'eec4ab8a-00b1-46b6-ab88-07a546222581',
    name: 'Andrzej',
    votesCount: 3
  },
  {
    id: '14261e8a-d764-4103-af13-5c277b2afdf9',
    name: 'adrian',
    votesCount: 0
  },
]
