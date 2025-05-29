import { afterNextRender, Component, inject, NgZone } from '@angular/core';
import { TopbarComponent } from './shared/ui/topbar/topbar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import Aos from 'aos';
import { LoaderComponent } from './shared/ui/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TopbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  #ngZone = inject(NgZone);

  constructor() {
    this.#ngZone.runOutsideAngular(() => {
      afterNextRender(() => {
        Aos.init();
      });
    });
  }
}
