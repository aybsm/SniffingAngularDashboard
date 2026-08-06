import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { SniffingApi } from '../../core/sniffing-api';
import { ApiErrorResult } from '../../core/models';

export interface RecompileDialogData {
  procedureId: number;
  procedureName: string;
}

export interface RecompileDialogResult {
  procedureName: string;
  message: string;
}

@Component({
  selector: 'app-recompile-dialog',
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './recompile-dialog.html',
  styleUrl: './recompile-dialog.scss',
})
export class RecompileDialog {
  private readonly dialogRef = inject(MatDialogRef<RecompileDialog, RecompileDialogResult>);
  private readonly api = inject(SniffingApi);
  protected readonly data = inject<RecompileDialogData>(MAT_DIALOG_DATA);

  protected readonly totpCode = signal('');
  protected readonly submitting = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    if (this.totpCode().length !== 6 || this.submitting()) {
      return;
    }

    this.submitting.set(true);
    this.errorMessage.set(null);

    this.api.recompile(this.data.procedureId, this.totpCode()).subscribe({
      next: (result) => {
        this.submitting.set(false);
        this.dialogRef.close(result);
      },
      error: (err: HttpErrorResponse) => {
        this.submitting.set(false);
        const apiError = err.error as ApiErrorResult | undefined;
        this.errorMessage.set(apiError?.message ?? 'Terjadi kesalahan, coba lagi.');
      },
    });
  }
}
