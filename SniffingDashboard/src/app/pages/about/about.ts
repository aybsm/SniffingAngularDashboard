import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface TechGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = {
    name: 'Muhammad Ainul Yaqin Budi Sutikno',
    role: 'Software Architect',
    initials: 'MA',
    bio:
      'Merancang arsitektur sistem end-to-end — dari worker service, API, ' +
      'skema database, sampai dashboard — dengan fokus ke keputusan desain yang ' +
      'terukur: performa, keamanan, dan kemudahan maintain jangka panjang.',
    email: 'aybs.muhammad@gmail.com',
    github: 'https://github.com/aybsm',
    linkedin: 'https://www.linkedin.com/in/muhammad-ainul-yaqin-budi-sutikno-28893713a',
  };

  protected readonly techGroups: TechGroup[] = [
    { category: 'Backend', items: ['.NET 5', 'ASP.NET Core Web API', 'Worker Service', 'Dapper'] },
    { category: 'Database', items: ['SQL Server', 'Table Partitioning', 'Stored Procedure'] },
    { category: 'Reliability', items: ['Serilog', 'Polly', 'Cronos', 'Otp.NET (TOTP 2FA)'] },
    { category: 'Frontend', items: ['Angular', 'Angular Material', 'ApexCharts', 'TypeScript'] },
  ];
}
