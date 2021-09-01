import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsertechnicalPageRoutingModule } from './usertechnical-routing.module';

import { UsertechnicalPage } from './usertechnical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsertechnicalPageRoutingModule
  ],
  declarations: [UsertechnicalPage]
})
export class UsertechnicalPageModule {}
