import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalprojectsPage } from './personalprojects.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalprojectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalprojectsPageRoutingModule {}
