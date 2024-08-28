import { Component } from '@angular/core';
import { Endereco } from './endereco.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage  {

  endereco: Endereco;

  constructor() {
    this.endereco = {
      postalCode: '',
      street: '',
      city: '',
      neighborhood: '',
      number: '',
      complement:'',
      country:'',
      state:'',
    };
  }


  salvarCliente() {
    // Lógica para salvar o cliente
  }



}
