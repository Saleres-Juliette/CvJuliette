import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalprofilePageRoutingModule } from './personalprofile-routing.module';

import { PersonalprofilePage } from './personalprofile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    PersonalprofilePageRoutingModule
  ],
  declarations: [PersonalprofilePage]
})
export class PersonalprofilePageModule {}
