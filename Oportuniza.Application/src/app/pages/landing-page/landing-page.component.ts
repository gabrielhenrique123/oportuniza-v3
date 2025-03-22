import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SobreComponent } from './sobre/sobre.component';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { VagasComponent } from './vagas/vagas.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { BlocoAcaoComponent } from './bloco-acao/bloco-acao.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, HeroComponent, SobreComponent, ComofuncionaComponent, VagasComponent, DepoimentosComponent, BlocoAcaoComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
