import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftskillsPage } from './softskills.page';

const routes: Routes = [
  {
    path: '',
    component: SoftskillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftskillsPageRoutingModule {}
