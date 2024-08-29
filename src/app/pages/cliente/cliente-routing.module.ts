import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePage } from './cliente.component';
import { CadastroPage } from '../cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ClientePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
