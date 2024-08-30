import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroClienteComponent } from './cadastro-cliente.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
      // Importa o módulo que contém o ClienteFormComponent
  ],
  declarations: [
    CadastroClienteComponent,
  ],
  exports: [
    CadastroClienteComponent
  ]  // Exporta se precisar ser usado em outros módulos
})
export class CadastroClienteModule {}
