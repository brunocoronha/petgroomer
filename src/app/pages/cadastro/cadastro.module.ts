import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroPage } from './cadastro.component';

import { EnderecoPageModule } from '../endereco/endereco.module';
import { ClientePageModule } from '../cliente/cliente.module';
import { ClienteFormComponent } from '../cliente/cliente-form/cliente-form.component';
import { ClienteFormModule } from '../cliente/cliente-form/cliente-form.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecoPageModule,
    ClientePageModule,
    ClienteFormModule
  ],
  declarations: [
    CadastroClienteComponent,
    ClienteFormComponent
  ],
  exports: [
    CadastroPageModule
  ]
})
export class CadastroPageModule {}
