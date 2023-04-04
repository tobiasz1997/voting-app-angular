import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "@features/dashboard/dashboard.component";
import { NgModule } from "@angular/core";

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
