import { Injectable } from "@angular/core";
import { VotersService } from "@core/services/voters.service";
import { CandidatesService } from "@core/services/candidates.service";
import { IVoteForm } from "@features/dashboard/interfaces/vote-form.interface";

@Injectable()
export class DashboardService {
  public voters$ = this._votersService.voters$;
  public candidates$ = this._candidateService.candidates$;

  constructor(
    private readonly _votersService: VotersService,
    private readonly _candidateService: CandidatesService
  ) { }

  public addNewVoter(name: string): void {
    this._votersService.addVoter(name);
  }

  public addNewCandidate(name: string): void {
    this._candidateService.addCandidate(name);
  }

  public vote(payload: IVoteForm): void {
    this._votersService.setVoterVoteStatus(payload.voterId);
    this._candidateService.setVoteForCandidate(payload.candidateId);
  }
}
