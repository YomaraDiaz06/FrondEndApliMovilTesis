import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalcommentPage } from './technicalcomment.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalcommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalcommentPageRoutingModule {}
