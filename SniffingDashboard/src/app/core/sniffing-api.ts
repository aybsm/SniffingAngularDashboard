import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  RecompileResult,
  SniffingLogGridQuery,
  SniffingLogGridResult,
  TopOffenderDto,
  TopOffendersQuery,
  TrendPoint,
  TrendQuery,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class SniffingApi {
  protected readonly http = inject(HttpClient);
  protected readonly baseUrl = `${environment.apiBaseUrl}/api/sniffinglog`;

  getGrid(query: SniffingLogGridQuery): Observable<SniffingLogGridResult> {
    let params = new HttpParams()
      .set('skip', query.skip)
      .set('take', query.take);

    if (query.sortColumn) params = params.set('sortColumn', query.sortColumn);
    if (query.sortDescending !== undefined) params = params.set('sortDescending', query.sortDescending);
    if (query.procedureName) params = params.set('procedureName', query.procedureName);
    if (query.dateFrom) params = params.set('dateFrom', query.dateFrom);
    if (query.dateTo) params = params.set('dateTo', query.dateTo);

    return this.http.get<SniffingLogGridResult>(this.baseUrl, { params });
  }

  getTopOffenders(query: TopOffendersQuery): Observable<TopOffenderDto[]> {
    let params = new HttpParams();

    if (query.metric) params = params.set('metric', query.metric);
    if (query.top !== undefined) params = params.set('top', query.top);
    if (query.dateFrom) params = params.set('dateFrom', query.dateFrom);
    if (query.dateTo) params = params.set('dateTo', query.dateTo);
    if (query.minExecutionCount !== undefined) params = params.set('minExecutionCount', query.minExecutionCount);

    return this.http.get<TopOffenderDto[]>(`${this.baseUrl}/top-offenders`, { params });
  }

  getTrend(query: TrendQuery): Observable<TrendPoint[]> {
    let params = new HttpParams();

    if (query.metric) params = params.set('metric', query.metric);
    if (query.top !== undefined) params = params.set('top', query.top);
    if (query.dateFrom) params = params.set('dateFrom', query.dateFrom);
    if (query.dateTo) params = params.set('dateTo', query.dateTo);

    return this.http.get<TrendPoint[]>(`${this.baseUrl}/trend`, { params });
  }

  recompile(procedureId: number, totpCode: string): Observable<RecompileResult> {
    const params = new HttpParams().set('totpCode', totpCode);
    return this.http.post<RecompileResult>(`${this.baseUrl}/${procedureId}/recompile`, null, { params });
  }
}
