import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vagas',
  imports: [RouterModule],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})

export class VagasComponent {
  i: number = 0;

  setSlide(index: number) {
    this.i = index;
  }
}
