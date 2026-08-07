import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { apiErrorInterceptor } from './core/api-error.interceptor';
import { apiKeyInterceptor } from './core/api-key.interceptor';
import { DemoSniffingApi } from './core/demo-sniffing-api';
import { SniffingApi } from './core/sniffing-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([apiKeyInterceptor, apiErrorInterceptor])),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    { provide: SniffingApi, useClass: environment.demoMode ? DemoSniffingApi : SniffingApi }
  ]
};
