import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.fade-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(300, [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
        ])
      ])
    ])
  ]
})
export class HeroComponent {
  activities: string[] = ['Utajiri', 'Élevage', 'Agriculture', 'Énergie'];
}
