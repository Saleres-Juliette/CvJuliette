import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamprojectsPageRoutingModule } from './teamprojects-routing.module';

import { TeamprojectsPage } from './teamprojects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamprojectsPageRoutingModule
  ],
  declarations: [TeamprojectsPage]
})
export class TeamprojectsPageModule {}
