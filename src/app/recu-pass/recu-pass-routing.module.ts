import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuPassPage } from './recu-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecuPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuPassPageRoutingModule {}
