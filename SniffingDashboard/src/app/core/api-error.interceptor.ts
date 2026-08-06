import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  if (!req.url.startsWith(environment.apiBaseUrl)) {
    return next(req);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // status 0 = browser nggak dapat response HTTP sama sekali
      // (server down, DNS gagal, koneksi ditolak, CORS diblok) -
      // beda dari 4xx/5xx yang berarti API-nya kejangkau tapi nolak request.
      if (error.status === 0) {
        router.navigateByUrl('/unavailable');
      }
      return throwError(() => error);
    })
  );
};
