import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html'
})
export class Hero {
  activities: string[] = ['Utajiri', 'Élevage', 'Agriculture', 'Énergie'];
}
