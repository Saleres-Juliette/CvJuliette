import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamprojectsPage } from './teamprojects.page';

const routes: Routes = [
  {
    path: '',
    component: TeamprojectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamprojectsPageRoutingModule {}
