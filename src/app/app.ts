import { afterNextRender, Component, inject, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './shared/components/topbar/topbar';
import { Footer } from './shared/components/footer/footer';
import { Loader } from './shared/components/loader/loader';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Footer, Loader],
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
