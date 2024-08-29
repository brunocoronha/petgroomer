import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask.directive';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
  declarations: [
    CpfMaskDirective,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfMaskDirective,
    PhoneMaskDirective
  ]
})
export class DirectivesModule { }
