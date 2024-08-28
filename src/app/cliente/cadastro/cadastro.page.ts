import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EnderecoFormComponent } from 'src/app/endereco/endereco-form/endereco-form.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  nome: string = '';
  cpf: string = '';
  telefone: string = '';
  email: string = '';



  @ViewChild(EnderecoFormComponent) enderecoComponent!: EnderecoFormComponent;
  pets: Array<{ nome: string; raca: string; cor: string; porte: string; isActive: boolean }> = [];

  constructor(private alertController: AlertController) {}

  limparCampos() {
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.email = '';
    this.enderecoComponent.clearEndereco(); // Método que você criará no EnderecoComponent
    this.pets = [];
  }

  async cadastrar() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Cadastro realizado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
