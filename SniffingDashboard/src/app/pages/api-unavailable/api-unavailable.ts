import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-unavailable',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './api-unavailable.html',
  styleUrl: './api-unavailable.scss',
})
export class ApiUnavailable {
  private readonly router = inject(Router);

  protected readonly contact = {
    email: 'aybs.muhammad@gmail.com',
    github: 'https://github.com/aybsm',
    linkedin: 'https://www.linkedin.com/in/muhammad-ainul-yaqin-budi-sutikno-28893713a',
  };

  retry(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
