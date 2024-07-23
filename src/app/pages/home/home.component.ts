import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AboutComponent } from './components/about/about.component';
import { GaleryComponent } from './components/galery/galery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GoalsComponent, AboutComponent, GaleryComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
