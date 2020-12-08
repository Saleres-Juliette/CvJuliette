import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PersonalprofilePage } from './personalprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalprofilePageRoutingModule {}
