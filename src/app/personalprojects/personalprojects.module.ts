import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalprojectsPageRoutingModule } from './personalprojects-routing.module';

import { PersonalprojectsPage } from './personalprojects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalprojectsPageRoutingModule
  ],
  declarations: [PersonalprojectsPage]
})
export class PersonalprojectsPageModule {}
