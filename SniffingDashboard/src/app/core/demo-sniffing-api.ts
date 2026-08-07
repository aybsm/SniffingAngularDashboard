import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, throwError } from 'rxjs';
import { SniffingApi } from './sniffing-api';
import {
  RecompileResult,
  SniffingLogGridQuery,
  SniffingLogGridResult,
  TopOffenderDto,
  TopOffendersQuery,
  TrendPoint,
  TrendQuery,
} from './models';

const DUMMY_DATA_URL = 'assets/dummy-data';

@Injectable({
  providedIn: 'root',
})
export class DemoSniffingApi extends SniffingApi {
  override getGrid(_query: SniffingLogGridQuery): Observable<SniffingLogGridResult> {
    return this.http.get<SniffingLogGridResult>(`${DUMMY_DATA_URL}/grid.json`);
  }

  override getTopOffenders(_query: TopOffendersQuery): Observable<TopOffenderDto[]> {
    return this.http.get<TopOffenderDto[]>(`${DUMMY_DATA_URL}/top-offenders.json`);
  }

  override getTrend(_query: TrendQuery): Observable<TrendPoint[]> {
    return this.http.get<TrendPoint[]>(`${DUMMY_DATA_URL}/trend.json`);
  }

  override recompile(_procedureId: number, _totpCode: string): Observable<RecompileResult> {
    return throwError(
      () =>
        new HttpErrorResponse({
          error: {
            message:
              'Fitur recompile dinonaktifkan di mode demo. Clone repo ini dan jalankan dengan API asli untuk mencoba fitur ini.',
          },
          status: 403,
        })
    ).pipe(delay(400));
  }
}
