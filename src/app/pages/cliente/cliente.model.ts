import { Endereco } from "../endereco/endereco.model";

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: Endereco;
  isActive: boolean;
}
