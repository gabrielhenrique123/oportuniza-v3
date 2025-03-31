import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(private router: Router) {
    this.restoreTermsAcceptance();
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPassword() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  register() {
    if (!this.email || !this.validateEmail(this.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (this.password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!this.acceptTerms) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.');
      return;
    }

    console.log('Cadastro realizado com sucesso:', { email: this.email, password: this.password });

    this.router.navigate(['/primeira-etapa']);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  saveTermsAcceptance() {
    localStorage.setItem('acceptTerms', JSON.stringify(this.acceptTerms));
  }


  restoreTermsAcceptance() {
    const storedAcceptance = localStorage.getItem('acceptTerms');
    if (storedAcceptance) {
      this.acceptTerms = JSON.parse(storedAcceptance);
    }
  }
}
