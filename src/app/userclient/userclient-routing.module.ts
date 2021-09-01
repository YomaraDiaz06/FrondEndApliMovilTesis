import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserclientPage } from './userclient.page';

const routes: Routes = [
  {
    path: '',
    component: UserclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserclientPageRoutingModule {}
