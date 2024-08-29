import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [
    EnderecoFormComponent,
  ],
  exports: [
    EnderecoPageModule
  ]
})
export class EnderecoPageModule {}
