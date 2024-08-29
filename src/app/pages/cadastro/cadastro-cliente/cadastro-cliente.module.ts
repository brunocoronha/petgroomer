import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroClienteComponent } from './cadastro-cliente.component';
import { ClienteFormModule } from '../../cliente/cliente-form/cliente-form.module';

@NgModule({
  declarations: [CadastroClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClienteFormModule  // Importa o módulo que contém o ClienteFormComponent
  ],
  exports: [
    ClienteFormModule
  ]  // Exporta se precisar ser usado em outros módulos
})
export class CadastroClienteModule {}
