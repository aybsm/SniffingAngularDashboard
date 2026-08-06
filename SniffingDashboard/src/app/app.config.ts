import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { apiErrorInterceptor } from './core/api-error.interceptor';
import { apiKeyInterceptor } from './core/api-key.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiKeyInterceptor, apiErrorInterceptor])),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ]
};
