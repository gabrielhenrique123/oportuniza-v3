import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segunda-etapa',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './segunda-etapa.component.html',
  styleUrls: ['./segunda-etapa.component.css']
})
export class SegundaEtapaComponent {
  // Variável para controlar o botão selecionado
  selectedButton: string | null = null;

  // Função chamada quando um botão é clicado
  selecionarBotao(botao: string) {
    // Verifica se o botão selecionado é o mesmo, caso contrário, alterna entre os botões
    if (this.selectedButton === botao) {
      this.selectedButton = null; // Desmarca se o mesmo botão for clicado novamente
    } else {
      this.selectedButton = botao; // Marca o botão clicado
    }
  }

  // Função para aplicar a cor de fundo ao botão com base no estado selecionado
  getBackgroundColor(botao: string): string {
    return this.selectedButton === botao ? '#2E3FFF' : '#d1d1d1';  // Cor azul quando selecionado, cinza quando não
  }

  // Função para aplicar a cor da fonte ao botão com base no estado selecionado
  getFontColor(botao: string): string {
    return this.selectedButton === botao ? 'white' : 'black';  // Cor branca quando selecionado, preta quando não
  }
}
