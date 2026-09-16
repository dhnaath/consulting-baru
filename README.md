# Naera Stravisenc

Frontend mandiri untuk Client Consultant Hub. Aplikasi ini berfokus pada dashboard konsultan, workspace klien, proyek, tugas, catatan, deliverable, keuangan, investasi, syariah, pajak, valuasi, dan alat produktivitas.

## Jalankan lokal

```bash
pnpm install
pnpm dev
```

Vite akan menjalankan aplikasi di `http://localhost:5173`.

## Validasi

```bash
pnpm typecheck
pnpm build
```

Aplikasi ini sengaja berjalan tanpa backend. Data demo disimpan di browser melalui `localStorage`, sedangkan fitur yang membutuhkan layanan eksternal menggunakan data fallback lokal agar frontend tetap dapat dimuat tanpa endpoint server.
