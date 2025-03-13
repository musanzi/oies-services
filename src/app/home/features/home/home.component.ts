import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { GoalsComponent } from '../goals/goals.component';
import { AboutComponent } from '../about/about.component';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, GoalsComponent, AboutComponent, ActivitiesComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
