import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsercommentPageRoutingModule } from './usercomment-routing.module';

import { UsercommentPage } from './usercomment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsercommentPageRoutingModule
  ],
  declarations: [UsercommentPage]
})
export class UsercommentPageModule {}
