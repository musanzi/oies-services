import { Component } from '@angular/core';
import { TopbarComponent } from './shared/ui/topbar/topbar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopbarComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'woies-sarl';
}
