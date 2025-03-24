import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { TermoComponent } from './pages/termo/termo.component';
import { PrimeiraEtapaComponent } from './pages/primeira-etapa/primeira-etapa.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'termo', component: TermoComponent},
  { path: 'primeira-etapa', component: PrimeiraEtapaComponent},
];

