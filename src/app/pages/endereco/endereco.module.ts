import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


@NgModule({
  declarations: [
    EnderecoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    EnderecoFormComponent
  ]
})
export class EnderecoPageModule {}
