// src/app/cliente/cliente.page.ts
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model'; // Importa o modelo

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  cliente: Cliente;

  constructor() {
    this.cliente = {
      id: '',
      nome: '',
      email: '',
      telefone: ''
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  salvarCliente() {
    // Lógica para salvar o cliente
  }
}
