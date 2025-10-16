import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Goals } from '../../components/goals/goals';
import { About } from '../../components/about/about';
import { Activities } from '../../components/activities/activities';

@Component({
  selector: 'app-landing',
  imports: [Hero, Goals, About, Activities],
  templateUrl: './landing.html'
})
export class Landing {}
