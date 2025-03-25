import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.css'
})
export class RedefinirSenhaComponent {
  email: string = '';

  sendResetLink() {
    if (!this.email) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }


    console.log('E-mail de redefinição enviado para:', this.email);
    alert('Um link para redefinir sua senha foi enviado para o seu e-mail.');
  }
}
