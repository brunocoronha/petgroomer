import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroPage } from './cadastro.page';

import { EnderecoPageModule } from 'src/app/endereco/endereco.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecoPageModule
  ],
  declarations: [
    CadastroPage
  ],
  exports: [
  ]
})
export class CadastroPageModule {}
