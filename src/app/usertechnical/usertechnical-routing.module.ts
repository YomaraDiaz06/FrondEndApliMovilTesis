import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsertechnicalPage } from './usertechnical.page';

const routes: Routes = [
  {
    path: '',
    component: UsertechnicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsertechnicalPageRoutingModule {}
