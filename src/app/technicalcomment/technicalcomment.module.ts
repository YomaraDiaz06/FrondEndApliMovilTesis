import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalcommentPageRoutingModule } from './technicalcomment-routing.module';

import { TechnicalcommentPage } from './technicalcomment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalcommentPageRoutingModule
  ],
  declarations: [TechnicalcommentPage]
})
export class TechnicalcommentPageModule {}
