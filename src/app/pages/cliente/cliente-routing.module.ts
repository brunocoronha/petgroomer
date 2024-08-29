import { ClienteFormModule } from './cliente-form/cliente-form.module';
import { ClientePageModule } from './../../cliente/cliente.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePageComponent } from './cliente.component';
import { CadastroPage } from '../cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ClientePageComponent,
  }
  {
    path: '',
    loadChildren: () => import('ClientePageModule').then( m => m.ClientePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
