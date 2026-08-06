# SniffingWorker

Sistem buat mendeteksi stored procedure di SQL Server yang kemungkinan kena
**parameter sniffing** atau **stale statistics** — capture eksekusi query stats
secara periodik, simpan histori-nya, dan tampilkan lewat dashboard.

## Arsitektur

```
SniffingWorker (Windows Service)  --EXEC-->  SQL Server (IP_SNIFFING_CAPTURE)
                                                      |
                                                      v
                                                 SNIFFINGLOG (partitioned per bulan)
                                                      ^
                                                      |
SniffingDashboard (Angular)  --HTTPS-->  SniffingApi (Web API)  --EXEC-->  SQL Server
```

Tiga komponen independen, masing-masing bisa di-deploy terpisah:

| Project | Peran |
|---|---|
| `SniffingWorker` | Windows Service — jalan sesuai jadwal cron, `EXEC IP_SNIFFING_CAPTURE` buat snapshot query stats ke tabel `SNIFFINGLOG` |
| `SniffingApi` | Web API — nyuplai data ke dashboard (grid, top offenders) dan aksi recompile SP |
| `SniffingDashboard` | Angular SPA — dashboard buat lihat & analisa hasil capture |

## Tech Stack

**Backend — `SniffingWorker`**
- .NET 5 · Worker Service (`Microsoft.Extensions.Hosting.WindowsServices`)
- Dapper — akses data
- Serilog — structured logging (console + file)
- Polly — retry policy dengan exponential backoff buat transient DB error
- Cronos — jadwal berbasis cron expression (bukan fixed interval)
- Repository pattern + Dependency Injection

**Backend — `SniffingApi`**
- .NET 5 · ASP.NET Core Web API
- Dapper — EXEC stored procedure, nggak ada raw SQL di C#
- Serilog
- Otp.NET + QRCoder — verifikasi TOTP (Google Authenticator) buat aksi sensitif (recompile)
- Custom API Key middleware — proteksi seluruh endpoint (constant-time comparison)
- CORS — dibatasi ke origin dashboard aja

**Frontend — `SniffingDashboard`**
- Angular 21 (standalone components)
- Angular Material — UI components, tema custom warna-warni
- ApexCharts (`ng-apexcharts`) — visualisasi chart
- HTTP Interceptor — nempelin API key otomatis ke tiap request

**Database**
- SQL Server — tabel `SNIFFINGLOG` di-partition per bulan (clustered index `(CapturedAt, Id)`)
- 4 stored procedure: `IP_SNIFFING_CAPTURE`, `IP_SNIFFING_LOG_GET`,
  `IP_SNIFFING_TOP_OFFENDER_GET`, `IP_SNIFFING_RECOMPILE` — semua query dieksekusi
  lewat SP, nggak ada inline SQL

## Struktur Project

```
SniffingWorker.sln
SniffingWorker/       .NET 5 Windows Service
SniffingApi/          .NET 5 Web API
SniffingDashboard/    Angular 21 + Angular Material
```

## Menjalankan Secara Lokal

**SniffingWorker / SniffingApi**
```bash
dotnet build
dotnet run --project SniffingApi
```
Isi `ConnectionStrings:DefaultConnection`, `Totp:SharedSecret`, dan `ApiKey:Value`
di `appsettings.Development.json` (nggak ikut commit, isi sendiri di lokal).

**SniffingDashboard**
```bash
cd SniffingDashboard
npm install
npm start
```
Sesuaikan `apiBaseUrl` dan `apiKey` di `src/environments/environment.development.ts`.

## Keamanan

- Connection string & secret **nggak pernah** ditaruh di `appsettings.json` yang
  ke-commit — selalu di `appsettings.Production.json` (git-ignored) atau environment variable.
- Aksi sensitif (`sp_recompile`) wajib verifikasi kode TOTP dulu.
- Semua endpoint API diproteksi API key (`X-Api-Key` header).

## Dibangun Bersama Claude

Seluruh sistem ini — dari desain arsitektur, skema database (termasuk keputusan
partitioning dan clustered index), retry policy, sampai halaman dashboard —
dikerjakan lewat kolaborasi dengan **Claude**, AI assistant dari Anthropic.

Peran pembagiannya jelas: **Software Architect** (Muhammad Ainul Yaqin Budi
Sutikno) menentukan arsitektur, mereview tiap keputusan teknis, dan mengarahkan
lewat diskusi — mulai dari kenapa pakai `BIGINT IDENTITY` bukan `DATETIME`
sebagai primary key, sampai kenapa `CROSS APPLY` dipakai buat menghindari
duplikasi formula. Claude berperan sebagai *developer* yang mengeksekusi,
menjelaskan trade-off di tiap pilihan teknis, dan mengimplementasikan hasil
diskusi jadi kode nyata — bukan sekadar "generate lalu terima begitu saja".

---

**Software Architect:** Muhammad Ainul Yaqin Budi Sutikno
[GitHub](https://github.com/aybsm) ·
[LinkedIn](https://www.linkedin.com/in/muhammad-ainul-yaqin-budi-sutikno-28893713a) ·
[Email](mailto:aybs.muhammad@gmail.com)
