import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-comofunciona',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './comofunciona.component.html',
  styleUrl: './comofunciona.component.css'
})

export class ComofuncionaComponent {
  i: number = 0;

  setSlide(index: number) {
    this.i = index;
  }
}
