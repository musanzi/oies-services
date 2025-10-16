import { afterNextRender, Component, inject, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/ui/topbar/topbar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { LoaderComponent } from './shared/ui/loader/loader.component';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.html'
})
export class App {
  #ngZone = inject(NgZone);

  constructor() {
    this.#ngZone.runOutsideAngular(() => {
      afterNextRender(() => {
        Aos.init();
      });
    });
  }
}
