import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { EnderecoPageModule } from '../endereco/endereco.module';
import { ClienteFormComponent } from '../cliente/cliente-form/cliente-form.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroClienteModule } from './cadastro-cliente/cadastro-cliente.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecoPageModule,
  ],
  declarations: [
    CadastroClienteComponent,
    ClienteFormComponent,
    CadastroClienteComponent
  ],
  exports: [

  ]
})
export class CadastroPageModule {}
