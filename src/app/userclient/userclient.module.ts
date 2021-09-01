import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserclientPageRoutingModule } from './userclient-routing.module';

import { UserclientPage } from './userclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserclientPageRoutingModule
  ],
  declarations: [UserclientPage]
})
export class UserclientPageModule {}
