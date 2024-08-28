// src/app/endereco/endereco.model.ts

export class Endereco {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  country: string;
  state: string;
  postalCode: string;

  constructor(
    street: string = '',
    number: string = '',
    complement: string = '',
    neighborhood: string = '',
    city: string = '',
    country: string = '',
    state: string = '',
    postalCode: string = ''
  ) {
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.country = country;
    this.state = state;
    this.postalCode = postalCode;
  }
}
