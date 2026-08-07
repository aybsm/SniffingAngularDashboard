export interface SniffingLogDto {
  id: number;
  capturedAt: string;
  procedureID: number;
  procedureName: string;
  schemaName: string;
  executionCount: number;
  minLogicalReads: number;
  maxLogicalReads: number;
  readVariance: number;
  readVariancePerc: number | null;
  totalLogicalReads: number;
  avgReads: number;
  avgReadsPerc: number | null;
  minCPUTimeMs: number;
  maxCPUTimeMs: number;
}

export interface SniffingLogGridResult {
  data: SniffingLogDto[];
  totalCount: number;
}

export interface SniffingLogGridQuery {
  skip: number;
  take: number;
  sortColumn?: string;
  sortDescending?: boolean;
  procedureName?: string;
  dateFrom?: string;
  dateTo?: string;
}

export type TopOffenderMetric = 'ReadVariancePerc' | 'AvgReadsPerc';

export interface TopOffendersQuery {
  metric?: TopOffenderMetric;
  top?: number;
  dateFrom?: string;
  dateTo?: string;
  minExecutionCount?: number;
}

export interface TopOffenderDto {
  procedureID: number;
  procedureName: string;
  schemaName: string;
  capturedAt: string;
  executionCount: number;
  readVariance: number;
  readVariancePerc: number | null;
  avgReads: number;
  avgReadsPerc: number | null;
}

export interface TrendQuery {
  metric?: TopOffenderMetric;
  top?: number;
  dateFrom?: string;
  dateTo?: string;
}

export interface TrendPoint {
  procedureID: number;
  procedureName: string;
  capturedAt: string;
  metricValue: number | null;
}

export interface RecompileResult {
  procedureName: string;
  message: string;
}

export interface ApiErrorResult {
  message: string;
}
