import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechskillsPageRoutingModule } from './techskills-routing.module';

import { TechskillsPage } from './techskills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechskillsPageRoutingModule
  ],
  declarations: [TechskillsPage]
})
export class TechskillsPageModule {}
