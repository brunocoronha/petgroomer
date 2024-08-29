import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePageComponent } from './cliente.component';
import { EnderecoPageModule } from '../endereco/endereco.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule,
    EnderecoPageModule
  ],
  declarations: [
    ClientePageComponent
  ],
  exports: [
    ClientePageComponent,
  ]
})
export class ClientePageModule {}
