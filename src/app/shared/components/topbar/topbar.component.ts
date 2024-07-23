import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {}
