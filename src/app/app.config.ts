import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PageTitleStrategy } from './page-title.strategy';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations()
  ]
};
