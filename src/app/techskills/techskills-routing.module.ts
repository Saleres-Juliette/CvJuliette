import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechskillsPage } from './techskills.page';

const routes: Routes = [
  {
    path: '',
    component: TechskillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechskillsPageRoutingModule {}
