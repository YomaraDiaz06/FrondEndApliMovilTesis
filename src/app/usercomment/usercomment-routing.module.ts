import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsercommentPage } from './usercomment.page';

const routes: Routes = [
  {
    path: '',
    component: UsercommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsercommentPageRoutingModule {}
