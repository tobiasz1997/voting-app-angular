import { Component } from '@angular/core';
import { DashboardService } from "@features/dashboard/dashboard.service";
import { IVoteForm } from "@features/dashboard/interfaces/vote-form.interface";
import { ICandidate } from "@core/models/candidate.interface";
import { IVoter } from "@core/models/voter.interface";

@Component({
  selector: 'va-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public voters$ = this._dashboardService.voters$;
  public candidates$ = this._dashboardService.candidates$;

  constructor(
    private readonly _dashboardService: DashboardService
  ) { }

  public trackByCandidateId(index: number, candidate: ICandidate): string {
    return candidate.id;
  }

  public trackByVoterId(index: number, voter: IVoter): string {
    return voter.id;
  }

  public handleAddVoter(name: string): void {
    this._dashboardService.addNewVoter(name)
  }

  public handleAddCandidate(name: string): void {
    this._dashboardService.addNewCandidate(name)
  }

  public handleVote(payload: IVoteForm): void {
    this._dashboardService.vote(payload);
  }
}
