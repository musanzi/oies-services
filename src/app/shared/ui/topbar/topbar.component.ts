import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  host: {
    '(window:scroll)': 'onWindowScroll()'
  },
  imports: [NgOptimizedImage, CommonModule, RouterModule],
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  isFixed = signal<boolean>(false);

  onWindowScroll(): void {
    this.isFixed.set(window.scrollY > 50);
  }
}
