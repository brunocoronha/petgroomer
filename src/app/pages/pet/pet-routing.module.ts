import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetPage } from './pet.component';

const routes: Routes = [
  {
    path: '',
    component: PetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetPageRoutingModule {}
