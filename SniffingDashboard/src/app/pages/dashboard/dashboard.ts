import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
} from 'ng-apexcharts';
import { SniffingApi } from '../../core/sniffing-api';
import { maskSpName } from '../../core/mask-sp-name';
import { TopOffenderDto, TrendPoint } from '../../core/models';
import { MaskSpNamePipe } from '../../shared/mask-sp-name.pipe';
import {
  RecompileDialog,
  RecompileDialogResult,
} from '../../shared/recompile-dialog/recompile-dialog';

const FLAGGED_THRESHOLD = 0.5;

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    NgApexchartsModule,
    MaskSpNamePipe,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly api = inject(SniffingApi);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly loading = signal(false);
  protected readonly trendLoading = signal(false);
  protected readonly topOffenders = signal<TopOffenderDto[]>([]);
  protected readonly trendPoints = signal<TrendPoint[]>([]);
  protected readonly displayedColumns = [
    'procedureName',
    'executionCount',
    'readVariancePerc',
    'actions',
  ];

  protected readonly monitoredCount = computed(() => this.topOffenders().length);
  protected readonly flaggedCount = computed(
    () => this.topOffenders().filter((o) => (o.readVariancePerc ?? 0) > FLAGGED_THRESHOLD).length
  );
  protected readonly totalExecutions = computed(() =>
    this.topOffenders().reduce((sum, o) => sum + o.executionCount, 0)
  );
  protected readonly avgVariancePerc = computed(() => {
    const list = this.topOffenders();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, o) => acc + (o.readVariancePerc ?? 0), 0);
    return sum / list.length;
  });

  protected readonly chartSeries = computed<ApexAxisChartSeries>(() => [
    {
      name: 'Read Variance %',
      data: this.topOffenders().map((o) => Math.round((o.readVariancePerc ?? 0) * 1000) / 10),
    },
  ]);
  protected readonly chartCategories = computed(() =>
    this.topOffenders().map((o) => maskSpName(o.procedureName))
  );

  protected readonly chart: ApexChart = { type: 'bar', height: 320, toolbar: { show: false } };
  protected readonly plotOptions: ApexPlotOptions = {
    bar: { borderRadius: 6, horizontal: true },
  };
  protected readonly dataLabels: ApexDataLabels = { enabled: true, formatter: (val) => `${val}%` };
  protected readonly colors = ['#e53935'];

  protected get xaxis(): ApexXAxis {
    return { categories: this.chartCategories() };
  }

  // ---- Trend chart (spline, multi-line per procedure) ----
  protected readonly trendSeries = computed<ApexAxisChartSeries>(() => {
    const grouped = new Map<number, { name: string; data: [number, number | null][] }>();

    for (const p of this.trendPoints()) {
      if (!grouped.has(p.procedureID)) {
        grouped.set(p.procedureID, { name: maskSpName(p.procedureName), data: [] });
      }
      const value = p.metricValue !== null ? Math.round(p.metricValue * 1000) / 10 : null;
      grouped.get(p.procedureID)!.data.push([new Date(p.capturedAt).getTime(), value]);
    }

    return Array.from(grouped.values());
  });

  protected readonly trendChart: ApexChart = {
    type: 'line',
    height: 320,
    toolbar: { show: false },
    zoom: { enabled: false },
  };
  protected readonly trendXaxis: ApexXAxis = {
    type: 'datetime',
    labels: { datetimeUTC: false },
  };
  protected readonly trendStroke: ApexStroke = { curve: 'smooth', width: 2 };
  protected readonly trendDataLabels: ApexDataLabels = { enabled: false };
  protected readonly trendLegend: ApexLegend = { position: 'bottom' };

  constructor() {
    this.load();
    this.loadTrend();
  }

  load(): void {
    this.loading.set(true);
    this.api.getTopOffenders({ metric: 'ReadVariancePerc', top: 10 }).subscribe({
      next: (data) => {
        this.topOffenders.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.snackBar.open('Gagal memuat top offenders.', 'Tutup', { duration: 4000 });
      },
    });
  }

  loadTrend(): void {
    this.trendLoading.set(true);
    this.api.getTrend({ metric: 'ReadVariancePerc', top: 5 }).subscribe({
      next: (data) => {
        this.trendPoints.set(data);
        this.trendLoading.set(false);
      },
      error: () => {
        this.trendLoading.set(false);
        this.snackBar.open('Gagal memuat trend chart.', 'Tutup', { duration: 4000 });
      },
    });
  }

  openRecompile(row: TopOffenderDto): void {
    const ref = this.dialog.open(RecompileDialog, {
      width: '420px',
      data: { procedureId: row.procedureID, procedureName: `${row.schemaName}.${row.procedureName}` },
    });

    ref.afterClosed().subscribe((result: RecompileDialogResult | undefined) => {
      if (result) {
        this.snackBar.open(`${result.message} (${result.procedureName})`, 'Tutup', { duration: 4000 });
        this.load();
      }
    });
  }
}
