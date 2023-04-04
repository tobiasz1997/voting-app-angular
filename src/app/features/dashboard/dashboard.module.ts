import { DashboardComponent } from "@features/dashboard/dashboard.component";
import { DashboardRoutingModule } from "@features/dashboard/dashboard-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { VoteFormComponent } from './components/vote-form/vote-form.component';
import { DashboardService } from "@features/dashboard/dashboard.service";
import { VotersToSelectOptionsPipe } from './pipes/voters-to-select-options.pipe';
import { CandidatesToSelectOptionsPipe } from './pipes/candidates-to-select-options.pipe';

@NgModule({
  imports: [
    DashboardRoutingModule,
    NgTemplateOutlet,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    AddUserFormComponent,
    TableWrapperComponent,
    VoteFormComponent,
    VotersToSelectOptionsPipe,
    CandidatesToSelectOptionsPipe,
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
