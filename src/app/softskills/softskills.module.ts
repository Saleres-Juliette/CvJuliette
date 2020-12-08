import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftskillsPageRoutingModule } from './softskills-routing.module';

import { SoftskillsPage } from './softskills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftskillsPageRoutingModule
  ],
  declarations: [SoftskillsPage]
})
export class SoftskillsPageModule {}
