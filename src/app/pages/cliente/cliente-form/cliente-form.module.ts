import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteFormComponent } from './cliente-form.component';

@NgModule({
  declarations: [ClienteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [ClienteFormComponent]  // Exporta para ser usado em outros módulos
})
export class ClienteFormModule {}
