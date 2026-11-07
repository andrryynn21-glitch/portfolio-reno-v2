import yammatcha from "../assets/images/projects/yammatcha.webp";
import kasir from "../assets/images/projects/kasir.webp";
import invitation from "../assets/images/projects/invitation.webp";
import webcraft from "../assets/images/projects/webcraft.jpg";
import kalaJumpa from "../assets/images/projects/kala-jumpa.jpg";
import tibaTibaWarkop from "../assets/images/projects/tiba-tiba-warkop.jpg";
import duoFund from "../assets/images/projects/duofund.jpg";
import undanganDigital from "../assets/images/projects/undangan-digital.jpg";
import ruangDengar from "../assets/images/projects/ruang-dengar.jpg";
import aryaNotes from "../assets/images/projects/aryanotes.jpg";

const projects = [
  {
    id: "yammatcha",
    title: "Yammatcha",
    category: "Website",
    label: "Website bisnis / UMKM",
    status: "completed",
    description:
      "Membawa cerita, menu, dan suasana sebuah usaha ke ruang digital. Informasi bisnis dalam satu tempat, dengan akses langsung ke WhatsApp.",
    problem:
      "Bagaimana membuat calon pelanggan lebih mudah mengenal usaha dan menemukan informasi sebelum berkunjung?",
    solution:
      "Website profil usaha yang menyatukan menu, galeri, informasi bisnis, dan jalur kontak yang mudah ditemukan.",
    features: [
      "Katalog menu",
      "Galeri usaha",
      "Informasi bisnis",
      "Kontak WhatsApp",
    ],
    note: "Proyek website UMKM. Tautan di bawah membuka situs yang dipublikasikan, bukan repositori kode.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://andrryynn21-glitch.github.io/yammatcha-website/",
    image: yammatcha,
    imageAlt: "Tampilan halaman utama website Yammatcha",
  },
  {
    id: "kasir",
    title: "Kasir UMKM",
    category: "Aplikasi",
    label: "Aplikasi web / Proyek akademik",
    status: "completed",
    description:
      "Dari pencatatan transaksi sampai laporan penjualan. Aplikasi berbasis web untuk menyatukan kebutuhan operasional kasir dalam satu dashboard.",
    problem:
      "Bagaimana menghubungkan data produk, proses transaksi, dan ringkasan penjualan dalam satu aplikasi?",
    solution:
      "Aplikasi kasir dengan antarmuka web, pemrosesan PHP, dan penyimpanan data MySQL untuk alur pengelolaan usaha.",
    features: [
      "Pencatatan transaksi",
      "Manajemen produk",
      "Laporan penjualan",
      "Dashboard admin",
    ],
    note: "Proyek akademik, 2025. Pratinjau menggunakan data kosong; demo publik belum tersedia.",
    tech: ["JavaScript", "PHP", "MySQL", "HTML / CSS"],
    demo: null,
    image: kasir,
    imageAlt:
      "Dashboard aplikasi Kasir Yammatcha dengan ringkasan transaksi dan produk",
  },
  {
    id: "invitation",
    title: "Aurora Invitation",
    category: "Website",
    label: "Undangan digital / Proyek pribadi",
    status: "development",
    description:
      "Eksplorasi undangan digital yang lebih personal. Menggabungkan cerita, detail acara, dan interaksi tamu dalam pengalaman berbasis web.",
    problem:
      "Bagaimana menyajikan informasi acara dengan lebih personal dan mudah diakses dari ponsel?",
    solution:
      "Pengembangan undangan berbasis React dengan tampilan responsif dan animasi untuk mendukung alur pembacaan undangan.",
    features: [
      "Target: hitung mundur",
      "Target: RSVP",
      "Target: galeri foto",
      "Target: musik latar",
    ],
    note: "Masih dikembangkan. Daftar di atas adalah cakupan pengembangan; pratinjau belum mewakili seluruh fitur final.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: "https://andrryynn21-glitch.github.io/aurora-invitation/",
    image: invitation,
    imageAlt: "Pratinjau sampul website undangan digital Aurora Invitation",
  },
  {
    id: "webcraft",
    title: "WebCraft",
    category: "Website",
    label: "Landing page / Jasa pembuatan website",
    status: "published",
    description:
      "Etalase layanan pembuatan website untuk usaha dan personal brand. Menghubungkan layanan, karya yang sudah tayang, alur pengerjaan, dan pilihan paket dalam satu halaman.",
    problem:
      "Bagaimana membantu calon pelanggan memahami layanan dan proses pembuatan website sebelum memulai konsultasi?",
    solution:
      "Landing page yang menyusun layanan, portofolio, proses kerja, harga, dan FAQ secara berurutan, dengan akses konsultasi melalui WhatsApp.",
    features: [
      "Katalog layanan website",
      "Portofolio dengan tautan proyek",
      "Paket harga dan FAQ",
      "Kontak konsultasi WhatsApp",
    ],
    note: "Gambar diambil langsung dari halaman publik WebCraft. Angka performa dan informasi komersial pada situs sumber tidak diaudit ulang dalam portofolio ini.",
    tech: ["React"],
    demo: "https://webcraft-landing-nine.vercel.app/",
    image: webcraft,
    imageAlt:
      "Tangkapan layar asli WebCraft dengan hero ungu-biru, layanan pembuatan website, dan panel performa",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "kala-jumpa",
    title: "Kedai Kala Jumpa",
    category: "Website",
    label: "Website bisnis / Kedai kopi",
    status: "published",
    description:
      "Mengenalkan kedai di Serang lewat cerita, suasana, dan menu. Identitas hangat dengan ilustrasi kereta berpadu katalog sajian dan daftar pesanan untuk WhatsApp.",
    problem:
      "Bagaimana membawa karakter kedai ke website sekaligus membantu pengunjung mencari menu dan merencanakan kunjungan?",
    solution:
      "Website kedai dengan cerita tempat, katalog berkategori dan pencarian, penyusunan daftar pesanan, serta informasi fasilitas, jam buka, dan rute lokasi.",
    features: [
      "Kategori dan pencarian menu",
      "Daftar pesanan untuk WhatsApp",
      "Informasi jam buka dan fasilitas",
      "Tautan rute Google Maps",
    ],
    note: "Tangkapan layar halaman utama kedai. Pemeriksaan dilakukan pada halaman publik, tanpa mengirim pesanan atau menghubungi pihak kedai.",
    tech: ["Next.js", "React"],
    demo: "https://kala-jumpa.vercel.app/",
    image: kalaJumpa,
    imageAlt:
      "Tangkapan layar asli Kedai Kala Jumpa dengan ilustrasi kereta, judul kedai, dan informasi kunjungan",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "tiba-tiba-warkop",
    title: "Tiba-Tiba Warkop",
    category: "Website",
    label: "Website bisnis / Warkop interaktif",
    status: "published",
    description:
      "Website warkop dengan karakter retro-brutalis yang kuat. Bukan hanya daftar menu: pengunjung bisa menyusun estimasi bon dan membagi tagihan bersama teman.",
    problem:
      "Bagaimana membuat informasi warkop mudah dijelajahi, dengan pengalaman yang mencerminkan suasana tongkrongan dan kebutuhan patungan?",
    solution:
      "Katalog menu berpadu simulator bon, pengaturan porsi, split bill, dan informasi lokasi. Visual kontras, efek CRT, dan topik obrolan memberi karakter tersendiri.",
    features: [
      "Filter kategori menu",
      "Simulasi bon dan split bill",
      "Salin atau bagikan estimasi bon",
      "Lokasi dan generator topik obrolan",
    ],
    note: "Gambar berasal dari halaman utama yang sedang tayang. Bon pada situs merupakan estimasi; pembayaran tetap dilakukan ke kasir warkop, bukan melalui website.",
    tech: ["Next.js", "React"],
    demo: "https://tiba-tiba-warkop.vercel.app/",
    image: tibaTibaWarkop,
    imageAlt:
      "Tangkapan layar asli Tiba-Tiba Warkop bertema hitam-kuning dengan kartu Warkop Pass dan akses simulator bon",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "duofund",
    title: "DuoFund",
    category: "Aplikasi",
    label: "Aplikasi web / Keuangan bersama",
    status: "published",
    description:
      "Ruang pencatatan tabungan untuk dua orang. Membantu pasangan melihat catatan menabung, target, dan komitmen bersama dalam satu aplikasi.",
    problem:
      "Bagaimana membuat aktivitas menabung bersama lebih teratur tanpa memisahkan catatan, tujuan, dan kewajiban rutin?",
    solution:
      "Aplikasi yang memperkenalkan ruang pasangan, pencatatan aktivitas, target tabungan, serta komitmen dan tagihan. Cakupan fitur dibedakan melalui paket layanan.",
    featuresLabel: "Fitur yang diperkenalkan",
    features: [
      "Ruang tabungan untuk dua orang",
      "Pencatatan aktivitas dan riwayat",
      "Target tabungan bersama",
      "Komitmen dan tagihan rutin",
    ],
    note: "Gambar menampilkan onboarding asli. Deskripsi merujuk halaman publik dan perbandingan paket, bukan pengujian akun. DuoFund hanya mencatat aktivitas; uang tetap berada di rekening atau e-wallet pengguna.",
    tech: ["Next.js", "React"],
    demo: "https://duofund-app.vercel.app/",
    image: duoFund,
    imageAlt:
      "Tangkapan layar onboarding asli DuoFund bertuliskan One wallet, two people dengan ilustrasi dompet",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "undangan-digital",
    title: "Undangan Digital",
    category: "Aplikasi",
    label: "Aplikasi web / Platform undangan",
    status: "published",
    description:
      "Platform undangan pernikahan dengan pilihan motif, tema, dan paket. Menggabungkan identitas visual personal dengan informasi layanan yang dapat dibandingkan sebelum membuat undangan.",
    problem:
      "Bagaimana membantu calon pengguna memilih tampilan dan cakupan undangan digital yang sesuai kebutuhan acaranya?",
    solution:
      "Halaman pengenalan menampilkan motif, tema, dan pratinjau visual, lalu mengarahkan pengguna ke perbandingan paket serta akses pembuatan undangan.",
    features: [
      "Pilihan motif dan tema visual",
      "Pratinjau desain undangan",
      "Perbandingan paket Silver, Premium, dan VIP",
      "Akses halaman pembuatan undangan",
    ],
    note: "Gambar diambil dari landing page asli, terpisah dari proyek Aurora Invitation. Saat diperiksa, halaman paket menyatakan contoh undangan paket belum dibuat; pembuatan undangan dan RSVP belum diuji.",
    tech: ["Next.js", "React"],
    demo: "https://undangan-digital-two-gules.vercel.app/",
    image: undanganDigital,
    imageAlt:
      "Tangkapan layar asli platform Undangan Digital dengan motif batik, tema emas, dan pratinjau nama mempelai",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "ruang-dengar",
    title: "Ruang Dengar",
    category: "Aplikasi",
    label: "Aplikasi web / Pengaduan mahasiswa",
    status: "published",
    description:
      "Ruang untuk menyampaikan pengaduan privat dan aspirasi kelas. Halaman masuk memperkenalkan alur akun pribadi untuk memantau laporan dan berpartisipasi dalam perbaikan pengalaman belajar.",
    problem:
      "Bagaimana memberi mahasiswa ruang untuk menyampaikan kendala dan aspirasi dengan akses yang sesuai peran pengguna?",
    solution:
      "Aplikasi pengaduan dengan akses akun pribadi, pendaftaran, dan pemulihan kata sandi. Halaman publik membedakan pengaduan privat dari aspirasi bersama.",
    featuresLabel: "Cakupan yang diperkenalkan",
    features: [
      "Pengaduan privat mahasiswa",
      "Aspirasi dan pemantauan laporan",
      "Akses masuk dan pendaftaran akun",
      "Pemulihan kata sandi",
    ],
    note: "Tangkapan layar asli halaman masuk; area setelah login tidak ditinjau. Situs menyatakan verifikasi dilakukan manual dan tidak terintegrasi resmi dengan UNPAM. Teknologi internal tidak ditebak dari halaman publik.",
    tech: [],
    demo: "https://ruang-dengar.infinityfreeapp.com/?i=1",
    image: ruangDengar,
    imageAlt:
      "Tangkapan layar asli halaman masuk Ruang Dengar dengan panel hijau Didengar, Ditangani, Lebih baik dan formulir login",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "aryanotes",
    title: "AryaNotes",
    category: "Aplikasi",
    label: "Aplikasi web / Kolaborasi tim",
    status: "published",
    description:
      "Ruang kerja rapat untuk tim pengembangan game. Memusatkan agenda, notulen, keputusan, dan tindak lanjut agar konteks diskusi tidak terpisah dari pekerjaan tim.",
    problem:
      "Bagaimana menjaga hasil rapat tetap terdokumentasi dan terhubung dengan penanggung jawab serta tenggat tugas?",
    solution:
      "Aplikasi yang memperkenalkan tiga tahap kerja: merencanakan agenda, menyimpan konteks keputusan, dan menindaklanjuti tugas melalui ruang kerja tim.",
    featuresLabel: "Fitur yang diperkenalkan",
    features: [
      "Agenda dan jadwal rapat",
      "Notulen dan catatan keputusan",
      "Penanggung jawab dan tenggat tugas",
      "Status tindak lanjut tim",
    ],
    note: "Gambar diambil langsung dari halaman publik AryaNotes. Ruang kerja memerlukan login; alur internal dan penyimpanan data tidak diuji dalam pemeriksaan ini.",
    tech: ["Next.js", "React"],
    demo: "https://aryanotes-andrryynn21.netlify.app/",
    image: aryaNotes,
    imageAlt:
      "Tangkapan layar asli AryaNotes dengan judul Ide tercatat, Keputusan jelas, Tim bergerak dan tiga tahap alur kerja",
    imageCapturedAt: "2026-11-07",
  },
  {
    id: "portfolio",
    title: "Ruang digital Reno",
    category: "Website",
    label: "Portofolio / Proyek pribadi",
    status: "completed",
    description:
      "Website yang sedang Anda jelajahi. Ruang untuk mendokumentasikan karya, perjalanan belajar, dan pendekatan membangun produk dengan bantuan AI.",
    problem:
      "Bagaimana memperkenalkan diri melalui karya yang jelas, bukan sekadar daftar teknologi dan angka kemampuan?",
    solution:
      "Portofolio berbasis React dengan ringkasan proyek, konteks pengembangan, dan navigasi yang mengutamakan konten.",
    features: [
      "Filter proyek",
      "Ringkasan studi kasus",
      "Tema terang / gelap",
      "Kontak terintegrasi",
    ],
    note: "Proyek pribadi, 2026. Portofolio ini terus diperbarui seiring perjalanan belajar dan karya baru.",
    tech: ["React", "Vite", "CSS"],
    demo: "#home",
    image: null,
  },
];

export default projects;
