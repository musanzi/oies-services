import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  host: { '(window:scroll)': 'onWindowScroll()' },
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.html'
})
export class Topbar {
  isFixed = signal<boolean>(false);

  onWindowScroll(): void {
    this.isFixed.set(window.scrollY > 50);
  }
}
