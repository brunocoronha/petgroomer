import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent {
  petForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      raca: ['', Validators.required],
      cor: [''],
      porte: [''],
      isActive: [true],
      id_proprietario: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.petForm.valid) {
      const newPet: Pet = this.petForm.value;
      console.log('Pet registrado:', newPet);
      // Aqui você pode implementar a lógica para salvar o pet
    }
  }
}
