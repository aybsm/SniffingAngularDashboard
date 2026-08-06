import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SniffingApi } from '../../core/sniffing-api';
import { SniffingLogDto } from '../../core/models';
import {
  RecompileDialog,
  RecompileDialogResult,
} from '../../shared/recompile-dialog/recompile-dialog';

@Component({
  selector: 'app-sniffing-grid',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './sniffing-grid.html',
  styleUrl: './sniffing-grid.scss',
})
export class SniffingGrid {
  private readonly api = inject(SniffingApi);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  @ViewChild(MatSort) sort!: MatSort;

  protected readonly displayedColumns = [
    'capturedAt',
    'procedureName',
    'schemaName',
    'executionCount',
    'readVariancePerc',
    'avgReadsPerc',
    'totalLogicalReads',
    'maxCPUTimeMs',
    'actions',
  ];

  protected readonly rows = signal<SniffingLogDto[]>([]);
  protected readonly totalCount = signal(0);
  protected readonly loading = signal(false);

  protected readonly procedureNameFilter = signal('');
  protected readonly dateFrom = signal<Date | null>(null);
  protected readonly dateTo = signal<Date | null>(null);

  private pageIndex = 0;
  private pageSize = 20;
  private sortColumn = 'CapturedAt';
  private sortDescending = true;

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);

    this.api
      .getGrid({
        skip: this.pageIndex * this.pageSize,
        take: this.pageSize,
        sortColumn: this.sortColumn,
        sortDescending: this.sortDescending,
        procedureName: this.procedureNameFilter() || undefined,
        dateFrom: this.dateFrom()?.toISOString(),
        dateTo: this.dateTo()?.toISOString(),
      })
      .subscribe({
        next: (result) => {
          this.rows.set(result.data);
          this.totalCount.set(result.totalCount);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.snackBar.open('Gagal memuat data SniffingLog.', 'Tutup', { duration: 4000 });
        },
      });
  }

  onPage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  onSort(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      this.sortColumn = 'CapturedAt';
      this.sortDescending = true;
    } else {
      this.sortColumn = sort.active;
      this.sortDescending = sort.direction === 'desc';
    }
    this.pageIndex = 0;
    this.load();
  }

  applyFilter(): void {
    this.pageIndex = 0;
    this.load();
  }

  clearFilter(): void {
    this.procedureNameFilter.set('');
    this.dateFrom.set(null);
    this.dateTo.set(null);
    this.pageIndex = 0;
    this.load();
  }

  openRecompile(row: SniffingLogDto): void {
    const ref = this.dialog.open(RecompileDialog, {
      width: '420px',
      data: { procedureId: row.procedureID, procedureName: `${row.schemaName}.${row.procedureName}` },
    });

    ref.afterClosed().subscribe((result: RecompileDialogResult | undefined) => {
      if (result) {
        this.snackBar.open(`${result.message} (${result.procedureName})`, 'Tutup', { duration: 4000 });
      }
    });
  }
}
