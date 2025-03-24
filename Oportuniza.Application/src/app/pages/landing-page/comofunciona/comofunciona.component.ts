import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-comofunciona',
  imports: [CommonModule, RouterModule],
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
