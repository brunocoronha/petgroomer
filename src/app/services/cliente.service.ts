import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../pages/models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'https://api.exemplo.com/clientes'; // URL da API onde os dados serão salvos

  constructor(private http: HttpClient) {}

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
