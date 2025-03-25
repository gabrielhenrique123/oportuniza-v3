import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;
  passwordVisible: boolean = false;

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!this.acceptTerms) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.');
      return;
    }

    console.log('Cadastro realizado com sucesso:', { email: this.email, password: this.password });
  }
}
