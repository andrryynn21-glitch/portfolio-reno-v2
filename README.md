# Reno Andrian / Portfolio

Portofolio mahasiswa Sistem Informasi yang mengeksplorasi pembangunan website dan aplikasi dengan bantuan AI. Dibangun dengan React 19, Vite, dan CSS tanpa library animasi tambahan.

## Menjalankan

Gunakan Node.js 22.12+ dan npm.

```sh
npm ci
npm run dev
```

## Konten dan fitur

- Sebelas proyek terdokumentasi: Yammatcha, Kasir UMKM, Aurora Invitation, WebCraft, Kedai Kala Jumpa, Tiba-Tiba Warkop, DuoFund, Undangan Digital, Ruang Dengar, AryaNotes, dan portofolio ini.
- Filter website/aplikasi serta detail kebutuhan, pendekatan, fitur, dan status proyek.
- Pendidikan dan pengalaman praktik kerja lapangan, terpisah dari daftar proyek.
- Tema terang/gelap dengan preferensi tersimpan, navigasi mobile, dan dukungan reduced motion.
- Formulir kontak dengan EmailJS atau draf email jika konfigurasi belum tersedia.
- Metadata sosial, favicon, canonical, robots, dan sitemap sesuai target build.

Data profil, proyek, pendidikan/pengalaman, dan teknologi berada di `src/data/`. Komponen halaman berada di `src/components/`, token visual di `src/index.css`, dan tata letak di `src/App.css`.

Status proyek harus mencerminkan kondisi sebenarnya. Demo Kasir belum tersedia; Aurora Invitation masih dalam pengembangan. Jangan menambahkan angka pengguna, hasil bisnis, atau kemampuan yang belum dapat dibuktikan. PDF CV terbaru tersedia di `src/assets/pdf/CV_Reno_Andrian.pdf` dan digunakan oleh tombol Unduh CV.

Tujuh proyek tambahan menggunakan tangkapan layar asli berukuran 1440x900 yang diambil dari URL publik pada 7 November 2026, disimpan lokal sebagai JPG di `src/assets/images/projects/`. Klik gambar proyek untuk membuka tangkapan layar ukuran penuh. Status "Tayang publik" menunjukkan halaman bisa diakses, bukan klaim bahwa semua fitur selesai diuji. DuoFund menampilkan onboarding, Ruang Dengar menampilkan login, dan AryaNotes menampilkan landing page; tidak ada akun atau transaksi nyata yang digunakan. Contoh paket Undangan Digital belum tersedia saat pemeriksaan. Teknologi hanya dicantumkan ketika ada bukti pada halaman yang dibuka.

## Memperbarui CV

CV satu halaman A4 menggunakan teks yang dapat dipilih, bukan gambar. Sumber konten dan tata letaknya adalah `src/assets/pdf/CV_Reno_Andrian.html`; ubah sumber tersebut, lalu jalankan:

```sh
npx playwright install chromium
npm run build:cv
```

Generator memeriksa tinggi konten agar tidak melampaui satu halaman. PDF memuat tautan kontak dan proyek yang dapat diklik, serta struktur dokumen bertag. Periksa kembali hasil PDF setelah mengubah isinya. Build website memakai PDF yang sudah dihasilkan, sehingga deployment tidak memerlukan Chromium. CV menautkan domain portofolio yang aktif saat diperiksa, `https://portfolio-reno-v2.vercel.app/`.

## Kontak

Untuk mengaktifkan pengiriman langsung, sediakan variabel berikut di environment lokal atau build:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Template EmailJS harus menerima field `name`, `email`, dan `message`. Variabel `VITE_*` terlihat di browser, jadi jangan menyimpan private key atau rahasia di dalamnya. Atur pembatasan domain dan perlindungan spam di dashboard EmailJS.

Tanpa ketiga variabel tersebut, formulir membuka draf melalui `mailto:` dan tidak mengklaim pesan telah terkirim. Tautan email dan WhatsApp tetap tersedia. Kegagalan pengiriman tidak menghapus isian.

## Validasi

```sh
npm run lint
npx playwright install chromium
npm test
npm run build
npm run build:github
```

Pengujian menggunakan Chromium desktop dan emulasi mobile, termasuk ukuran 320-1920px, aksesibilitas dengan axe, navigasi, tema, aset, filter, dan formulir. Dua server pengujian menggunakan port 4173 dan 4174. Pengiriman EmailJS dimock dengan kredensial khusus pengujian; tes tidak mengirim email nyata.

## Build dan preview

```sh
# Default: canonical https://renoandrian.vercel.app/
npm run build
npm run preview

# GitHub Pages: base /portfolio-reno-v2/
npm run build:github
npm run preview -- --mode github
```

Canonical dan berkas SEO dihasilkan dari `vite.config.js`. Jika domain berubah, perbarui URL di sana. `public/social-preview.svg` adalah sumber desain untuk `public/preview.png` berukuran 1200x630; perbarui PNG juga ketika desain preview berubah.

Analisis bundle bersifat opsional melalui `ANALYZE=true npm run build`; hasilnya `dist/stats.html`. Perintah `npm run deploy` tetap tersedia untuk publikasi GitHub Pages, tetapi build dan pengujian tidak otomatis melakukan deployment.
