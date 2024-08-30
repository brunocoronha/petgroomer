import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../models/endereco.model';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss'],
})
export class EnderecoFormComponent {
  enderecoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enderecoForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.enderecoForm.valid) {
      const newEndereco: Endereco = this.enderecoForm.value;
      console.log('Endereco registrado:', newEndereco);
      // Aqui você pode implementar a lógica para salvar o enderco
    }
  }

  clearEndereco(){

  }
}



