import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GoalsComponent, AboutComponent, ActivitiesComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
