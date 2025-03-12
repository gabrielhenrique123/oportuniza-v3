import { Component } from '@angular/core';

@Component({
  selector: 'app-vagas',
  imports: [],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})

export class VagasComponent {
  i: number = 0;

  setSlide(index: number) {
    this.i = index;
  }
}
