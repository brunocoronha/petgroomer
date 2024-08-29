// src/app/cliente/cliente.page.ts
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model'; // Importa o modelo
import { Endereco } from '../endereco/endereco.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clienteForm: FormGroup | undefined;
  cliente: Cliente;

  constructor(private clienteService: ClienteService) {
    this.cliente = {
      id: '',
      nome: '',
      email: '',
      telefone: '',
      isActive: false,
      endereco:{
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        country: '',
        state: '',
        postalCode: '',
      }
    };
  }
  ngOnInit(): void {
    null;
  }

  salvarCliente() {
    this.clienteService.salvarCliente(this.cliente).subscribe(
      (response) => {
        console.log('Cliente salvo com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao salvar o cliente:', error);
      }
    );
  }
}
