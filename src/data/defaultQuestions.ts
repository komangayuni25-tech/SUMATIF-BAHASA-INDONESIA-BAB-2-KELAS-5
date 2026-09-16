import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: SOAL PILIHAN GANDA OBJEKTIF (20 BUTIR: SOAL 1 - 20)
  // =========================================================================

  // --- SOAL 1 ---
  {
    id: 1,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Mudah',
    text: 'Perhatikan percakapan antara Bu Guru Ayu dan Dimas pada gambar di atas!\nBerdasarkan dialog Dimas pada balon percakapan, penulisan kalimat langsung yang paling tepat dan sesuai tanda baca baku bahasa Indonesia adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="14" y="10" width="130" height="24" rx="6" fill="#1D4ED8"/>
      <text x="79" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">PERCAKAPAN KELAS</text>
      <!-- Balon Dialog Bu Guru -->
      <g transform="translate(18, 44)">
        <rect width="180" height="52" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.2"/>
        <text x="12" y="18" fill="#1E40AF" font-size="11" font-weight="bold">Bu Guru Ayu:</text>
        <text x="12" y="34" fill="#334155" font-size="10">"Apakah kamu sudah selesai</text>
        <text x="12" y="46" fill="#334155" font-size="10">membaca cerita fabel, Dimas?"</text>
      </g>
      <!-- Balon Dialog Dimas -->
      <g transform="translate(216, 44)">
        <rect width="186" height="52" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="1.2"/>
        <text x="12" y="18" fill="#065F46" font-size="11" font-weight="bold">Dimas:</text>
        <text x="12" y="34" fill="#1E293B" font-size="10">"Saya sudah membacanya, Bu.</text>
        <text x="12" y="46" fill="#1E293B" font-size="10">Ceritanya sangat mendidik."</text>
      </g>
      <text x="210" y="122" fill="#64748B" font-size="11" text-anchor="middle">Perhatikan tanda petik ("..."), huruf kapital pertama, dan tanda koma sebelum petikan</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Dimas berkata "saya sudah membacanya, Bu. Ceritanya sangat mendidik."' },
      { id: 'B', text: 'Dimas berkata: "Saya sudah membacanya, Bu ceritanya sangat mendidik!"' },
      { id: 'C', text: 'Dimas berkata, "Saya sudah membacanya, Bu. Ceritanya sangat mendidik."' },
      { id: 'D', text: 'Dimas berkata, "saya sudah membacanya Bu, Ceritanya sangat mendidik."' },
    ],
    correctAnswer: 'C',
    explanation:
      'Penulisan kalimat langsung yang benar ditandai dengan:\n1. Adanya tanda koma (,) sebelum tanda petik pembuka.\n2. Diapit sepasang tanda petik dua ("...").\n3. Huruf pertama di dalam tanda petik diawali dengan huruf kapital ("Saya...").\nJadi penulisan yang tepat adalah: Dimas berkata, "Saya sudah membacanya, Bu. Ceritanya sangat mendidik."',
  },

  // --- SOAL 2 ---
  {
    id: 2,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sedang',
    text: 'Perhatikan kartu ucapan kalimat langsung dari Danu pada gambar di atas!\nDanu berkata, "Aku akan mengembalikan buku ensiklopedia ini ke perpustakaan besok."\n\nJika kalimat tersebut diubah menjadi kalimat tak langsung, bentuk yang paling tepat adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="20" y="12" width="180" height="26" rx="6" fill="#0369A1"/>
      <text x="110" y="29" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KARTU UCAPAN DANU</text>
      <g transform="translate(20, 48)">
        <rect width="380" height="48" rx="8" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2"/>
        <text x="15" y="24" fill="#0C4A6E" font-size="12" font-weight="bold">Danu berkata, <tspan fill="#B91C1C">"Aku</tspan> akan mengembalikan buku ini <tspan fill="#B91C1C">besok."</tspan></text>
        <text x="15" y="40" fill="#0369A1" font-size="10">Perubahan: Kata ganti 'Aku' &amp; Keterangan waktu 'besok'</text>
      </g>
      <text x="210" y="120" fill="#475569" font-size="11" text-anchor="middle">Aturan: Kata ganti 'aku' -> 'ia/dia', kata tugas 'bahwa', 'besok' -> 'keesokan harinya'</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Danu mengatakan bahwa ia akan mengembalikan buku ensiklopedia itu ke perpustakaan keesokan harinya.' },
      { id: 'B', text: 'Danu mengatakan bahwa aku akan mengembalikan buku ensiklopedia ini ke perpustakaan besok.' },
      { id: 'C', text: 'Danu berkata apakah kamu akan mengembalikan buku ensiklopedia itu kemarin.' },
      { id: 'D', text: 'Danu berpesan bahwa mereka harus mengembalikan buku ensiklopedia ini sekarang juga.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perubahan dari kalimat langsung ke kalimat tak langsung melibatkan:\n1. Kata penghubung "bahwa".\n2. Kata ganti orang pertama "aku" berubah menjadi orang ketiga "ia" atau "dia".\n3. Kata tunjuk "ini" berubah menjadi "itu".\n4. Keterangan waktu "besok" berubah menjadi "keesokan harinya".\nJadi kalimat tak langsungnya: Danu mengatakan bahwa ia akan mengembalikan buku ensiklopedia itu ke perpustakaan keesokan harinya.',
  },

  // --- SOAL 3 ---
  {
    id: 3,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Mudah',
    text: 'Perhatikan tabel perubahan kata ganti (pronomina) dari kalimat langsung ke kalimat tak langsung pada gambar di atas!\nPasangan perubahan kata ganti yang tepat untuk mengisi nomor (3) pada tabel adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Header Tabel -->
      <rect x="20" y="12" width="185" height="24" fill="#3B82F6" rx="4"/>
      <text x="112" y="28" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Kalimat Langsung</text>
      <rect x="215" y="12" width="185" height="24" fill="#10B981" rx="4"/>
      <text x="307" y="28" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Kalimat Tak Langsung</text>
      <!-- Row 1 -->
      <rect x="20" y="40" width="185" height="22" fill="#EFF6FF"/>
      <text x="112" y="55" fill="#1E3A8A" font-size="11" text-anchor="middle">(1) Saya / Aku</text>
      <rect x="215" y="40" width="185" height="22" fill="#ECFDF5"/>
      <text x="307" y="55" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">Dia / Ia</text>
      <!-- Row 2 -->
      <rect x="20" y="65" width="185" height="22" fill="#EFF6FF"/>
      <text x="112" y="80" fill="#1E3A8A" font-size="11" text-anchor="middle">(2) Kamu</text>
      <rect x="215" y="65" width="185" height="22" fill="#ECFDF5"/>
      <text x="307" y="80" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">Saya / Dia</text>
      <!-- Row 3 -->
      <rect x="20" y="90" width="185" height="24" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" rx="4"/>
      <text x="112" y="106" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">(3) Kami / Kita</text>
      <rect x="215" y="90" width="185" height="24" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" rx="4"/>
      <text x="307" y="106" fill="#B45309" font-size="12" font-weight="bold" text-anchor="middle">[ . . . ? . . . ]</text>
      <text x="210" y="129" fill="#64748B" font-size="10" text-anchor="middle">Tabel Kaidah Konversi Pronomina Bahasa Indonesia</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kalian' },
      { id: 'B', text: 'Mereka' },
      { id: 'C', text: 'Anda' },
      { id: 'D', text: 'Beliau' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada perubahan kalimat langsung ke kalimat tak langsung, kata ganti jamak orang pertama "kami" atau "kita" yang diucapkan pembicara akan berubah menjadi kata ganti orang ketiga jamak, yaitu "mereka".',
  },

  // --- SOAL 4 ---
  {
    id: 4,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sedang',
    text: 'Perhatikan pengumuman pada papan tulis kelas di atas!\n"Ibu Guru mengumumkan bahwa besok seluruh siswa kelas lima wajib membawa kamus bahasa Indonesia."\n\nBentuk kalimat langsung yang tepat dari pengumuman tersebut adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
      <rect x="15" y="12" width="390" height="85" rx="8" fill="#0F172A" stroke="#334155"/>
      <text x="210" y="32" fill="#38BDF8" font-size="11" font-weight="bold" text-anchor="middle">📢 PENGUMUMAN WALI KELAS V</text>
      <line x1="30" y1="40" x2="390" y2="40" stroke="#334155" stroke-width="1"/>
      <text x="210" y="60" fill="#F1F5F9" font-size="11" text-anchor="middle">"Ibu Guru mengumumkan bahwa besok seluruh siswa kelas lima</text>
      <text x="210" y="78" fill="#FDE047" font-size="11" font-weight="bold" text-anchor="middle">wajib membawa kamus bahasa Indonesia."</text>
      <text x="210" y="118" fill="#94A3B8" font-size="10" text-anchor="middle">Ubah ke kalimat langsung ucapan Ibu Guru secara tepat!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ibu Guru berkata: "Besok seluruh siswa kelas lima wajib membawa kamus bahasa Indonesia."' },
      { id: 'B', text: 'Ibu Guru berkata, "Besok seluruh siswa kelas lima wajib membawa kamus bahasa Indonesia."' },
      { id: 'C', text: 'Ibu Guru bertanya, "Mengapa kamu tidak membawa kamus bahasa Indonesia besok?"' },
      { id: 'D', text: 'Ibu Guru berkata bahwa "Besok seluruh siswa kelas lima harus membawa kamus."' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat langsung diawali dengan pengiring lalu tanda koma (,), dibuka dengan tanda petik dua ("..."), dan huruf pertama kutipan menggunakan huruf kapital ("Besok..."). Pilihan B adalah bentuk yang baku dan tepat.',
  },

  // --- SOAL 5 ---
  {
    id: 5,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram perbandingan ciri-ciri kalimat pada gambar di atas!\nBerdasarkan diagram tersebut, ciri khas yang PALING membedakan kalimat tak langsung dari kalimat langsung adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Kotak Kalimat Langsung -->
      <g transform="translate(18, 15)">
        <rect width="185" height="110" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <rect x="10" y="10" width="165" height="22" rx="5" fill="#2563EB"/>
        <text x="92" y="25" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Kalimat Langsung</text>
        <text x="12" y="50" fill="#1E3A8A" font-size="10">• Menggunakan tanda petik ("...")</text>
        <text x="12" y="70" fill="#1E3A8A" font-size="10">• Intonasi dialog lisan</text>
        <text x="12" y="90" fill="#1E3A8A" font-size="10">• Kata ganti tetap asli</text>
      </g>
      <!-- Kotak Kalimat Tak Langsung -->
      <g transform="translate(217, 15)">
        <rect width="185" height="110" rx="10" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
        <rect x="10" y="10" width="165" height="22" rx="5" fill="#16A34A"/>
        <text x="92" y="25" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Kalimat Tak Langsung</text>
        <text x="12" y="50" fill="#166534" font-size="10">• <tspan font-weight="bold" fill="#B91C1C">Tidak ada tanda petik</tspan></text>
        <text x="12" y="70" fill="#166534" font-size="10">• Intonasi mendatar (berita)</text>
        <text x="12" y="90" fill="#166534" font-size="10">• Memakai kata: bahwa/agar/untuk</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Tidak menggunakan tanda petik dua dan dihubungkan oleh kata tugas seperti "bahwa" atau "agar"' },
      { id: 'B', text: 'Selalu diucapkan dengan nada seru yang tinggi di depan kelas' },
      { id: 'C', text: 'Wajib diakhiri dengan tanda tanya (?) dan tanda seru (!)' },
      { id: 'D', text: 'Menggunakan huruf kecil pada awal kalimatnya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ciri utama kalimat tak langsung adalah tidak menggunakan tanda petik dua ("..."), menggunakan konjungsi/kata penghubung seperti "bahwa", "agar", "untuk", atau "apakah", dan intonasi pembacaannya mendatar seperti kalimat berita.',
  },

  // --- SOAL 6 ---
  {
    id: 6,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sedang',
    text: 'Perhatikan ajakan Made di pojok baca kelas pada gambar di atas!\nMade berkata, "Ayo, kita membaca buku bersama di pojok baca kelas!"\n\nJika diubah ke dalam bentuk kalimat tak langsung, kalimat yang tepat adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FDF4FF" stroke="#E879F9" stroke-width="1.5"/>
      <g transform="translate(20, 15)">
        <rect width="380" height="75" rx="10" fill="#FFFFFF" stroke="#C084FC" stroke-width="1.2"/>
        <text x="20" y="28" fill="#7E22CE" font-size="12" font-weight="bold">📚 Pojok Baca Kelas V SD Negeri 3 Loloan Timur</text>
        <line x1="20" y1="36" x2="360" y2="36" stroke="#F3E8FF" stroke-width="1.5"/>
        <text x="20" y="55" fill="#4C1D95" font-size="11">Made berkata, <tspan fill="#BE185D" font-weight="bold">"Ayo, kita membaca buku bersama di pojok baca kelas!"</tspan></text>
      </g>
      <text x="210" y="118" fill="#6B21A8" font-size="10" font-weight="bold" text-anchor="middle">Kalimat ajakan langsung ('Ayo...') dikonversi dengan kata kerja 'mengajak' / 'agar'</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Made melarang teman-temannya membaca buku di pojok baca kelas.' },
      { id: 'B', text: 'Made mengajak teman-temannya untuk membaca buku bersama di pojok baca kelas.' },
      { id: 'C', text: 'Made menanyakan apakah pojok baca kelas sudah dibuka hari ini.' },
      { id: 'D', text: 'Made berkata bahwa saya sedang membaca buku sendirian di pojok baca.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat langsung yang berupa kalimat ajakan (ditandai kata "ayo" atau "mari") diubah menjadi kalimat tak langsung dengan menggunakan kata kerja performatif "mengajak" diikuti subjek dan tujuan ajakan. Jadi bentuk yang tepat adalah: Made mengajak teman-temannya untuk membaca buku bersama di pojok baca kelas.',
  },

  // --- SOAL 7 ---
  {
    id: 7,
    type: 'pg',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sukar',
    text: 'Perhatikan empat kartu kalimat langsung pada gambar di atas!\nKartu yang memiliki kesalahan dalam penulisan tanda baca atau huruf kapital kalimat langsung adalah kartu nomor...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Kartu 1 -->
      <g transform="translate(15, 12)">
        <rect width="190" height="52" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.2"/>
        <text x="10" y="18" fill="#065F46" font-size="10" font-weight="bold">Kartu [1]</text>
        <text x="10" y="34" fill="#1E293B" font-size="9.5">Ibu berpesan, "Hati-hati di jalan!"</text>
      </g>
      <!-- Kartu 2 -->
      <g transform="translate(215, 12)">
        <rect width="190" height="52" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.2"/>
        <text x="10" y="18" fill="#065F46" font-size="10" font-weight="bold">Kartu [2]</text>
        <text x="10" y="34" fill="#1E293B" font-size="9.5">"Kapan kita berangkat?" tanya Rani.</text>
      </g>
      <!-- Kartu 3 -->
      <g transform="translate(15, 72)">
        <rect width="190" height="52" rx="8" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2"/>
        <text x="10" y="18" fill="#991B1B" font-size="10" font-weight="bold">Kartu [3]</text>
        <text x="10" y="34" fill="#1E293B" font-size="9.5">Budi berkata, "buku ini sangat bagus."</text>
        <text x="10" y="46" fill="#B91C1C" font-size="8.5">(Perhatikan huruf awal petikan)</text>
      </g>
      <!-- Kartu 4 -->
      <g transform="translate(215, 72)">
        <rect width="190" height="52" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.2"/>
        <text x="10" y="18" fill="#065F46" font-size="10" font-weight="bold">Kartu [4]</text>
        <text x="10" y="34" fill="#1E293B" font-size="9.5">"Saya setuju," jawab Putu tenang.</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Kartu [1]' },
      { id: 'B', text: 'Kartu [2]' },
      { id: 'C', text: 'Kartu [3]' },
      { id: 'D', text: 'Kartu [4]' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada Kartu [3], terdapat kesalahan huruf kapital: kalimat petikan langsung harus diawali huruf kapital setelah tanda petik buka. Tertulis "buku ini..." (huruf b kecil), yang seharusnya ditulis dengan huruf kapital "Buku ini sangat bagus."',
  },

  // --- SOAL 8 ---
  {
    id: 8,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan fabel pada perkamen di atas!\n"Meskipun tubuhnya kecil, Semut Hitam tidak ragu menyelamatkan Burung Merpati yang terjerat jaring pemburu dengan menggigit kaki si pemburu sekuat tenaga."\n\nWatak atau penokohan Semut Hitam dalam kutipan cerita tersebut adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#FEFCE8" stroke="#FDE047" stroke-width="1.5"/>
      <g transform="translate(20, 14)">
        <rect width="380" height="85" rx="10" fill="#FEF9C3" stroke="#CA8A04" stroke-width="1"/>
        <text x="20" y="24" fill="#854D0E" font-size="11" font-weight="bold">📖 KUTIPAN CERITA FABEL</text>
        <text x="20" y="44" fill="#713F12" font-size="10">"Meskipun tubuhnya kecil, Semut Hitam tidak ragu</text>
        <text x="20" y="58" fill="#713F12" font-size="10">menyelamatkan Burung Merpati yang terjerat jaring</text>
        <text x="20" y="72" fill="#713F12" font-size="10">pemburu dengan menggigit kaki pemburu sekuat tenaga."</text>
      </g>
      <text x="210" y="122" fill="#A16207" font-size="11" font-weight="bold" text-anchor="middle">Identifikasi watak tokoh berdasarkan tindakan dalam cerita!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pemberani, setia kawan, dan suka menolong' },
      { id: 'B', text: 'Sombong dan suka pamer kekuatan' },
      { id: 'C', text: 'Penakut dan mudah berputus asa' },
      { id: 'D', text: 'Pemarah dan pendendam kepada manusia' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tindakan Semut Hitam yang berani menghadapi pemburu demi menyelamatkan Merpati membuktikan bahwa wataknya adalah pemberani, setia kawan, dan rela menolong sesama yang sedang kesusahan.',
  },

  // --- SOAL 9 ---
  {
    id: 9,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi senja dan penggalan latar cerita pada gambar di atas!\nLatar tempat dan suasana yang tergambar secara dominan dalam penggalan cerita tersebut adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <defs>
        <linearGradient id="sunsetGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FED7AA"/>
          <stop offset="100%" stop-color="#FDBA74"/>
        </linearGradient>
      </defs>
      <rect width="420" height="140" rx="14" fill="url(#sunsetGrad)" stroke="#FB923C" stroke-width="1.5"/>
      <!-- Elemen pemandangan danau -->
      <circle cx="90" cy="45" r="22" fill="#EA580C" opacity="0.85"/>
      <path d="M20 100 Q110 80 200 100 T380 100 L380 130 L20 130 Z" fill="#0284C7" opacity="0.8"/>
      <!-- Teks Kutipan Latar -->
      <g transform="translate(160, 20)">
        <rect width="240" height="90" rx="8" fill="#FFFFFF" opacity="0.95" stroke="#F97316"/>
        <text x="12" y="22" fill="#9A3412" font-size="10" font-weight="bold">Kutipan Latar Cerita:</text>
        <text x="12" y="42" fill="#1E293B" font-size="9.5">"Mentari tembaga perlahan tenggelam</text>
        <text x="12" y="56" fill="#1E293B" font-size="9.5">di ufuk barat. Air Danau Beratan</text>
        <text x="12" y="70" fill="#1E293B" font-size="9.5">begitu hening tanpa riak gelombang,</text>
        <text x="12" y="84" fill="#1E293B" font-size="9.5">menghadirkan kedamaian mendalam."</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Di tengah hutan belantara, suasana tegang dan mencekam' },
      { id: 'B', text: 'Di tepi Danau Beratan, suasana tenang, damai, dan hening pada sore hari' },
      { id: 'C', text: 'Di dalam ruang kelas sekolah, suasana riuh dan berisik pada pagi hari' },
      { id: 'D', text: 'Di pasar tradisional, suasana ramai dan penuh tawar-menawar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Latar tempat dinyatakan secara langsung ("Danau Beratan"), latar waktu ditunjukkan oleh "mentari tembaga perlahan tenggelam" (sore/senja), dan suasana dideskripsikan sebagai "hening tanpa riak gelombang, menghadirkan kedamaian mendalam" (tenang dan damai).',
  },

  // --- SOAL 10 ---
  {
    id: 10,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Mudah',
    text: 'Perhatikan kutipan kalimat pada gambar di atas!\n"Pucuk-pucuk pohon cemara menari-nari gembira menyambut kedatangan angin pagi."\n\nMajas yang digunakan dalam kalimat tersebut adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(25, 20)">
        <!-- Gambar cemara kartun -->
        <polygon points="45,15 25,50 65,50" fill="#15803D"/>
        <polygon points="45,40 20,75 70,75" fill="#16A34A"/>
        <rect x="40" y="75" width="10" height="20" fill="#854D0E"/>
        <!-- Kalimat kutipan -->
        <rect x="90" y="8" width="285" height="75" rx="10" fill="#FFFFFF" stroke="#22C55E" stroke-width="1.2"/>
        <text x="105" y="32" fill="#14532D" font-size="11" font-weight="bold">"Pucuk-pucuk pohon cemara</text>
        <text x="105" y="50" fill="#15803D" font-size="12" font-weight="extrabold"><tspan fill="#DC2626">menari-nari gembira</tspan> menyambut</text>
        <text x="105" y="68" fill="#14532D" font-size="11">kedatangan angin pagi."</text>
      </g>
      <text x="210" y="120" fill="#166534" font-size="10" text-anchor="middle">Benda mati (pohon cemara) digambarkan memiliki sifat / perilaku manusia (menari &amp; bergembira)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Majas Hiperbola' },
      { id: 'B', text: 'Majas Metafora' },
      { id: 'C', text: 'Majas Personifikasi' },
      { id: 'D', text: 'Majas Asosiasi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Majas Personifikasi adalah gaya bahasa yang melekatkan sifat-sifat manusia (insani) pada benda mati. Pohon cemara diumpamakan dapat "menari-nari gembira" seolah-olah bernyawa dan bersikap seperti manusia.',
  },

  // --- SOAL 11 ---
  {
    id: 11,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Mudah',
    text: 'Perhatikan kartu ilustrasi kiasan pada gambar di atas!\n"Karena kegemarannya membaca buku di mana saja, Made dijuluki sebagai kutu buku oleh kawan-kawannya."\n\nUngkapan "kutu buku" pada kalimat tersebut merupakan contoh pemakaian majas...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#EFF6FF" stroke="#93C5FD" stroke-width="1.5"/>
      <g transform="translate(25, 18)">
        <!-- Ikon Buku Tumpuk -->
        <rect x="10" y="55" width="65" height="14" rx="3" fill="#3B82F6"/>
        <rect x="15" y="38" width="55" height="14" rx="3" fill="#10B981"/>
        <rect x="20" y="21" width="45" height="14" rx="3" fill="#F59E0B"/>
        <!-- Kotak Teks -->
        <rect x="95" y="6" width="280" height="78" rx="10" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
        <text x="110" y="30" fill="#1E3A8A" font-size="11">"Karena kegemarannya membaca buku,</text>
        <text x="110" y="50" fill="#1E40AF" font-size="13" font-weight="bold">Made dijuluki <tspan fill="#DC2626">kutu buku</tspan>"</text>
        <text x="110" y="70" fill="#64748B" font-size="10">Perbandingan analogi langsung tanpa kata tugas</text>
      </g>
      <text x="210" y="118" fill="#1E40AF" font-size="10" text-anchor="middle">Contoh lain: anak emas, bunga bangsa, tulang punggung keluarga</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Majas Metafora' },
      { id: 'B', text: 'Majas Personifikasi' },
      { id: 'C', text: 'Majas Asosiasi' },
      { id: 'D', text: 'Majas Litotes' },
    ],
    correctAnswer: 'A',
    explanation:
      'Majas Metafora adalah gaya bahasa perbandingan langsung antara dua objek tanpa kata pembanding (seperti anak emas, kutu buku, bunga desa). "Kutu buku" bermakna orang yang sangat suka dan rajin membaca buku.',
  },

  // --- SOAL 12 ---
  {
    id: 12,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat pada gambar papan panggung di atas!\n"Sorak sorai penonton saat tim sekolah mencetak gol menggelegar membelah angkasa."\n\nKalimat tersebut mengandung majas...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <g transform="translate(20, 16)">
        <rect width="380" height="75" rx="10" fill="#FFFFFF" stroke="#EF4444" stroke-width="1.2"/>
        <text x="20" y="28" fill="#991B1B" font-size="11" font-weight="bold">📢 PENGUNGKAPAN GAYA BAHASA</text>
        <line x1="20" y1="36" x2="360" y2="36" stroke="#FEE2E2" stroke-width="1.5"/>
        <text x="20" y="55" fill="#7F1D1D" font-size="11.5">"Sorak sorai penonton saat tim mencetak gol</text>
        <text x="20" y="71" fill="#DC2626" font-size="12" font-weight="extrabold">menggelegar membelah angkasa."</text>
      </g>
      <text x="210" y="118" fill="#B91C1C" font-size="10" font-weight="bold" text-anchor="middle">Ciri: Ungkapan yang sengaja melebih-lebihkan kenyataan sesungguhnya</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Majas Metafora' },
      { id: 'B', text: 'Majas Personifikasi' },
      { id: 'C', text: 'Majas Ironi' },
      { id: 'D', text: 'Majas Hiperbola' },
    ],
    correctAnswer: 'D',
    explanation:
      'Majas Hiperbola adalah majas yang menyatakan sesuatu secara berlebih-lebihan melampaui kenyataan sebenarnya untuk memberikan kesan dramatis. Suara sorak sorai penonton tidak mungkin benar-benar "membelah angkasa".',
  },

  // --- SOAL 13 ---
  {
    id: 13,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat perumpamaan pada gambar di atas!\n"Kedua saudara kembar itu memiliki wajah dan senyuman yang sangat mirip, bagai pinang dibelah dua."\n\nMajas yang digunakan pada kalimat tersebut adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>
      <g transform="translate(25, 18)">
        <!-- Ilustrasi dua belahan pinang -->
        <circle cx="35" cy="45" r="22" fill="#D97706"/>
        <circle cx="70" cy="45" r="22" fill="#F59E0B"/>
        <!-- Card teks -->
        <rect x="105" y="8" width="275" height="74" rx="10" fill="#FFFFFF" stroke="#D97706" stroke-width="1.2"/>
        <text x="120" y="32" fill="#78350F" font-size="11">"Kedua saudara kembar itu sangat mirip,</text>
        <text x="120" y="52" fill="#B45309" font-size="13" font-weight="bold"><tspan fill="#DC2626">bagai</tspan> pinang dibelah dua."</text>
        <text x="120" y="70" fill="#92400E" font-size="9.5">Kata penghubung: bagai, laksana, seperti, bak</text>
      </g>
      <text x="210" y="118" fill="#B45309" font-size="10" text-anchor="middle">Perbandingan dua hal dengan perantara kata tugas penyerupaan</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Majas Asosiasi (Simile)' },
      { id: 'B', text: 'Majas Hiperbola' },
      { id: 'C', text: 'Majas Personifikasi' },
      { id: 'D', text: 'Majas Sarkasme' },
    ],
    correctAnswer: 'A',
    explanation:
      'Majas Asosiasi (Simile) adalah gaya bahasa yang membandingkan dua hal berbeda yang dianggap memiliki kesamaan dengan memakai kata pembanding/penghubung seperti: bagai, laksana, seperti, ibarat, bak.',
  },

  // --- SOAL 14 ---
  {
    id: 14,
    type: 'pg',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sukar',
    text: 'Bacalah ringkasan cerita rakyat pada gambar di atas!\n"Meskipun hidup sederhana, Pak Karsa selalu membagikan hasil panen sayurnya kepada tetangga yang membutuhkan tanpa pamrih. Suatu ketika saat terjadi paceklik, para tetangga serentak membantunya memperbaiki rumah yang roboh."\n\nAmanat atau pesan moral yang paling tepat dari cerita tersebut adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(18, 12)">
        <rect width="384" height="92" rx="10" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
        <text x="15" y="24" fill="#334155" font-size="11" font-weight="bold">📜 RINGKASAN CERITA: PAK KARSA</text>
        <text x="15" y="44" fill="#1E293B" font-size="9.5">"Pak Karsa selalu membagikan hasil panen sayurnya kepada</text>
        <text x="15" y="58" fill="#1E293B" font-size="9.5">tetangga yang membutuhkan tanpa pamrih. Ketika rumahnya</text>
        <text x="15" y="72" fill="#1E293B" font-size="9.5">roboh akibat badai, seluruh warga desa bergotong-royong</text>
        <text x="15" y="86" fill="#1E293B" font-size="9.5">membantunya membangun kembali rumahnya."</text>
      </g>
      <text x="210" y="126" fill="#475569" font-size="10.5" font-weight="bold" text-anchor="middle">Amanat adalah pesan moral luhur yang disampaikan pengarang kepada pembaca</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kebaikan dan ketulusan hati dalam menolong orang lain akan mendatangkan pertolongan saat kita dalam kesulitan' },
      { id: 'B', text: 'Kita harus menimbun hasil panen sebanyak-banyaknya untuk diri sendiri' },
      { id: 'C', text: 'Bekerja keras tidak ada gunanya jika rumah kita terkena badai' },
      { id: 'D', text: 'Menolong tetangga hanya dilakukan jika tetangga tersebut kaya raya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Amanat adalah ajaran moral atau nilai kebaikan yang ingin disampaikan pengarang kepada pembaca. Cerita Pak Karsa mengajarkan bahwa ketulusan berbagi dan gemar menolong akan membuahkan rasa persaudaraan dan pertolongan kembali di saat kita tertimpa musibah.',
  },

  // --- SOAL 15 ---
  {
    id: 15,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram perbandingan antara buku fiksi dan nonfiksi pada gambar di atas!\nKarakteristik yang menjadi ciri khas UTAMA dari buku fiksi adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Kolom Fiksi -->
      <g transform="translate(18, 15)">
        <rect width="185" height="110" rx="10" fill="#FDF4FF" stroke="#C084FC" stroke-width="1.5"/>
        <rect x="10" y="10" width="165" height="22" rx="5" fill="#9333EA"/>
        <text x="92" y="25" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">BUKU FIKSI</text>
        <text x="12" y="50" fill="#6B21A8" font-size="9.5">• Khayalan / Imajinasi</text>
        <text x="12" y="68" fill="#6B21A8" font-size="9.5">• Tokoh &amp; Alur Rekaan</text>
        <text x="12" y="86" fill="#6B21A8" font-size="9.5">• Bahasa Konotatif (Kiasan)</text>
        <text x="12" y="102" fill="#6B21A8" font-size="8.5">Cth: Cerpen, Dongeng, Novel</text>
      </g>
      <!-- Kolom Nonfiksi -->
      <g transform="translate(217, 15)">
        <rect width="185" height="110" rx="10" fill="#ECFDF5" stroke="#34D399" stroke-width="1.5"/>
        <rect x="10" y="10" width="165" height="22" rx="5" fill="#059669"/>
        <text x="92" y="25" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">BUKU NONFIKSI</text>
        <text x="12" y="50" fill="#065F46" font-size="9.5">• Fakta, Data, &amp; Realitas</text>
        <text x="12" y="68" fill="#065F46" font-size="9.5">• Memberi Wawasan / Ilmu</text>
        <text x="12" y="86" fill="#065F46" font-size="9.5">• Bahasa Denotatif (Lugas)</text>
        <text x="12" y="102" fill="#065F46" font-size="8.5">Cth: Ensiklopedia, Biografi</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Berisi hasil penelitian laboratorium yang menyajikan rumus dan tabel ilmiah' },
      { id: 'B', text: 'Isinya bersumber dari daya imajinasi atau rekaan pengarang dan berfungsi menghibur' },
      { id: 'C', text: 'Ditulis berdasarkan fakta sejarah yang diverifikasi oleh para ilmuwan' },
      { id: 'D', text: 'Memuat peta wilayah dan data sensus penduduk terkini' },
    ],
    correctAnswer: 'B',
    explanation:
      'Buku fiksi adalah karya literatur yang ditulis berdasarkan imajinasi, khayalan, atau ide kreatif rekaan pengarang (bukan kenyataan faktual), yang bertujuan menghibur sekaligus menyampaikan pesan moral kepada pembaca.',
  },

  // --- SOAL 16 ---
  {
    id: 16,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Mudah',
    text: 'Perhatikan 4 buku perpustakaan pada gambar di atas!\nBuku yang tergolong ke dalam jenis buku NONFIKSI adalah buku dengan nomor...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(15, 15)">
        <!-- Buku 1 -->
        <rect x="0" y="0" width="85" height="95" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="42" y="20" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">[Buku 1]</text>
        <text x="42" y="45" fill="#1E3A8A" font-size="9" text-anchor="middle">Petualangan</text>
        <text x="42" y="60" fill="#1E3A8A" font-size="9" font-weight="bold" text-anchor="middle">Peri Hutan</text>
        <text x="42" y="82" fill="#64748B" font-size="8" text-anchor="middle">(Dongeng)</text>
        <!-- Buku 2 -->
        <rect x="100" y="0" width="85" height="95" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
        <text x="142" y="20" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">[Buku 2]</text>
        <text x="142" y="45" fill="#065F46" font-size="9" text-anchor="middle">Ensiklopedia</text>
        <text x="142" y="60" fill="#065F46" font-size="9" font-weight="bold" text-anchor="middle">Tata Surya</text>
        <text x="142" y="82" fill="#047857" font-size="8" text-anchor="middle">(Sains Ilmiah)</text>
        <!-- Buku 3 -->
        <rect x="200" y="0" width="85" height="95" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="242" y="20" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">[Buku 3]</text>
        <text x="242" y="45" fill="#1E3A8A" font-size="9" text-anchor="middle">Kancil dan</text>
        <text x="242" y="60" fill="#1E3A8A" font-size="9" font-weight="bold" text-anchor="middle">Buaya Cerdik</text>
        <text x="242" y="82" fill="#64748B" font-size="8" text-anchor="middle">(Fabel)</text>
        <!-- Buku 4 -->
        <rect x="300" y="0" width="85" height="95" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="342" y="20" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">[Buku 4]</text>
        <text x="342" y="45" fill="#1E3A8A" font-size="9" text-anchor="middle">Legenda</text>
        <text x="342" y="60" fill="#1E3A8A" font-size="9" font-weight="bold" text-anchor="middle">Danau Toba</text>
        <text x="342" y="82" fill="#64748B" font-size="8" text-anchor="middle">(Cerita Rakyat)</text>
      </g>
      <text x="210" y="126" fill="#334155" font-size="10.5" font-weight="bold" text-anchor="middle">Pilih buku yang disusun berdasarkan fakta ilmiah nyata!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Buku 1' },
      { id: 'B', text: 'Buku 2' },
      { id: 'C', text: 'Buku 3' },
      { id: 'D', text: 'Buku 4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Buku 2 (Ensiklopedia Tata Surya) adalah buku nonfiksi karena memuat data, fakta ilmiah, dan penjelasan astronomi nyata tentang planet dan matahari. Sedangkan Buku 1 (Dongeng), Buku 3 (Fabel), dan Buku 4 (Legenda) merupakan karya fiksi rekaan.',
  },

  // --- SOAL 17 ---
  {
    id: 17,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Sedang',
    text: 'Perhatikan bagian belakang buku yang memuat daftar istilah penting beserta artinya pada gambar di atas!\nBagian buku tersebut dinamakan...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 12)">
        <rect width="360" height="92" rx="8" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
        <rect x="0" y="0" width="360" height="24" fill="#0284C7" rx="8 8 0 0"/>
        <text x="180" y="17" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">📖 DAFTAR ISTILAH KATA SULIT BESERTA ARTINYA</text>
        <text x="15" y="42" fill="#0F172A" font-size="10"><tspan font-weight="bold" fill="#0369A1">Atmosfer :</tspan> Lapisan gas yang menyelimuti suatu planet.</text>
        <text x="15" y="60" fill="#0F172A" font-size="10"><tspan font-weight="bold" fill="#0369A1">Ekosistem :</tspan> Hubungan timbal balik antara makhluk hidup dan lingkungannya.</text>
        <text x="15" y="78" fill="#0F172A" font-size="10"><tspan font-weight="bold" fill="#0369A1">Gravitasi :</tspan> Gaya tarik-menarik antara semua partikel bermassa.</text>
      </g>
      <text x="210" y="125" fill="#475569" font-size="10" text-anchor="middle">Bagian buku penunjang pemahaman kosakata pembaca</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Daftar Pustaka' },
      { id: 'B', text: 'Kata Pengantar' },
      { id: 'C', text: 'Glosarium' },
      { id: 'D', text: 'Indeks' },
    ],
    correctAnswer: 'C',
    explanation:
      'Glosarium adalah daftar alfabetis istilah-istilah sulit atau kata khusus dalam buku yang dilengkapi dengan definisi atau penjelasannya untuk memudahkan pembaca memahami isi buku.',
  },

  // --- SOAL 18 ---
  {
    id: 18,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Sedang',
    text: 'Perhatikan bagian buku yang memuat kata-kata kunci berurutan abjad beserta nomor halamannya pada gambar di atas!\nBagian pelengkap buku nonfiksi ini dinamakan...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(35, 12)">
        <rect width="350" height="88" rx="8" fill="#FFFFFF" stroke="#059669" stroke-width="1.2"/>
        <rect x="0" y="0" width="350" height="24" fill="#059669" rx="8 8 0 0"/>
        <text x="175" y="17" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">📑 DAFTAR KATA &amp; NOMOR HALAMAN</text>
        <text x="20" y="42" fill="#065F46" font-size="10" font-weight="bold">A</text>
        <text x="35" y="42" fill="#1E293B" font-size="9.5">Adaptasi, 12, 14, 25</text>
        <text x="180" y="42" fill="#065F46" font-size="10" font-weight="bold">H</text>
        <text x="195" y="42" fill="#1E293B" font-size="9.5">Habitat, 18, 30</text>
        <text x="20" y="62" fill="#065F46" font-size="10" font-weight="bold">F</text>
        <text x="35" y="62" fill="#1E293B" font-size="9.5">Fotosintesis, 45, 52</text>
        <text x="180" y="62" fill="#065F46" font-size="10" font-weight="bold">R</text>
        <text x="195" y="62" fill="#1E293B" font-size="9.5">Rantai makanan, 8, 22</text>
      </g>
      <text x="210" y="122" fill="#047857" font-size="10" text-anchor="middle">Mempermudah pelacakan kata atau topik tertentu di dalam buku</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Indeks' },
      { id: 'B', text: 'Sinopsis' },
      { id: 'C', text: 'Daftar Isi' },
      { id: 'D', text: 'Prakata' },
    ],
    correctAnswer: 'A',
    explanation:
      'Indeks adalah daftar kata, istilah, atau nama tokoh penting yang disusun menurut abjad (alfabetis) disertai nomor halaman tempat istilah tersebut disebutkan di dalam buku.',
  },

  // --- SOAL 19 ---
  {
    id: 19,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Sukar',
    text: 'Perhatikan kutipan teks dari buku pelajaran sains pada gambar di atas!\n"Jantung manusia berfungsi memompa darah yang kaya oksigen ke seluruh bagian tubuh melalui pembuluh arteri."\n\nKutipan tersebut menggunakan ragam bahasa...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F0F9FF" stroke="#7DD3FC" stroke-width="1.5"/>
      <g transform="translate(25, 15)">
        <rect width="370" height="75" rx="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>
        <text x="18" y="26" fill="#0369A1" font-size="11" font-weight="bold">🧬 BUKU SAINS BIOLOGI KELAS V</text>
        <line x1="18" y1="34" x2="350" y2="34" stroke="#E0F2FE" stroke-width="1.5"/>
        <text x="18" y="52" fill="#0C4A6E" font-size="10.5">"Jantung manusia berfungsi memompa darah yang</text>
        <text x="18" y="68" fill="#0C4A6E" font-size="10.5">kaya oksigen ke seluruh tubuh melalui pembuluh arteri."</text>
      </g>
      <text x="210" y="116" fill="#0284C7" font-size="10" font-weight="bold" text-anchor="middle">Bahasa denotatif bermakna lugas, harfiah, objektif, dan tanpa kiasan</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Bahasa konotatif yang sarat perumpamaan dan majas' },
      { id: 'B', text: 'Bahasa santai kedaerahan yang tidak baku' },
      { id: 'C', text: 'Bahasa dongeng yang mengandalkan keajaiban dan mitos' },
      { id: 'D', text: 'Bahasa denotatif (makna sebenarnya/lugas) yang merupakan ciri khas buku nonfiksi' },
    ],
    correctAnswer: 'D',
    explanation:
      'Buku nonfiksi menggunakan ragam bahasa denotatif, yaitu bahasa yang memiliki makna harfiah, sebenarnya, objektif, dan lugas sesuai fakta sains, tanpa ungkapan kiasan atau perumpamaan.',
  },

  // --- SOAL 20 ---
  {
    id: 20,
    type: 'pg',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Sukar',
    text: 'Perhatikan empat pernyataan tentang Danau Beratan Bali pada papan informasi di atas!\nPernyataan yang merupakan FAKTA objektif dalam penulisan buku nonfiksi adalah pernyataan nomor...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(15, 12)">
        <!-- Box 1 -->
        <rect x="0" y="0" width="190" height="42" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="10" y="16" fill="#065F46" font-size="9" font-weight="bold">(1)</text>
        <text x="25" y="16" fill="#1E293B" font-size="8.5">Danau Beratan terletak pada</text>
        <text x="25" y="30" fill="#1E293B" font-size="8.5">ketinggian sekitar 1.239 mdpl.</text>
        <!-- Box 2 -->
        <rect x="200" y="0" width="190" height="42" rx="6" fill="#FEF2F2" stroke="#EF4444"/>
        <text x="10" y="16" fill="#991B1B" font-size="9" font-weight="bold">(2)</text>
        <text x="25" y="16" fill="#1E293B" font-size="8.5">Danau Beratan adalah danau</text>
        <text x="25" y="30" fill="#1E293B" font-size="8.5">paling indah di seluruh dunia.</text>
        <!-- Box 3 -->
        <rect x="0" y="50" width="190" height="42" rx="6" fill="#FEF2F2" stroke="#EF4444"/>
        <text x="10" y="16" fill="#991B1B" font-size="9" font-weight="bold">(3)</text>
        <text x="25" y="16" fill="#1E293B" font-size="8.5">Semua orang pasti betah tinggal</text>
        <text x="25" y="30" fill="#1E293B" font-size="8.5">lama di dekat Danau Beratan.</text>
        <!-- Box 4 -->
        <rect x="200" y="50" width="190" height="42" rx="6" fill="#FEF2F2" stroke="#EF4444"/>
        <text x="10" y="16" fill="#991B1B" font-size="9" font-weight="bold">(4)</text>
        <text x="25" y="16" fill="#1E293B" font-size="8.5">Udara di Danau Beratan terasa</text>
        <text x="25" y="30" fill="#1E293B" font-size="8.5">sangat dingin dan tidak nyaman.</text>
      </g>
      <text x="210" y="125" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Fakta dapat diuji kebenarannya dengan data dan pengukuran yang pasti</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pernyataan (1)' },
      { id: 'B', text: 'Pernyataan (2)' },
      { id: 'C', text: 'Pernyataan (3)' },
      { id: 'D', text: 'Pernyataan (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pernyataan (1) adalah FAKTA karena memuat data geografis terukur dan dapat dibuktikan kebenarannya secara ilmiah (ketinggian 1.239 mdpl). Pernyataan (2), (3), dan (4) merupakan OPINI atau pendapat pribadi yang bersifat subjektif.',
  },

  // =========================================================================
  // BAGIAN II: SOAL BENAR / SALAH BERGAMBAR (10 BUTIR: SOAL 21 - 30)
  // =========================================================================

  // --- SOAL 21 ---
  {
    id: 21,
    type: 'benar_salah',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Mudah',
    text: 'Perhatikan kaidah tanda baca pada gambar di atas!\n\nPernyataan:\n"Kalimat langsung dalam bahasa Indonesia selalu ditandai dengan sepasang tanda petik dua ("...") yang mengapit kalimat ujaran lisan."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(40, 18)">
        <rect width="340" height="65" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.2"/>
        <text x="30" y="42" fill="#1D4ED8" font-size="36" font-weight="extrabold">“</text>
        <text x="60" y="38" fill="#1E3A8A" font-size="12" font-weight="bold">Kalimat Ujaran Lisan Tokoh</text>
        <text x="310" y="42" fill="#1D4ED8" font-size="36" font-weight="extrabold">”</text>
      </g>
      <text x="210" y="114" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Kaidah baku: Diapit tanda petik dua ("...")</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nCiri paling khas dari penulisan kalimat langsung adalah penggunaan tanda petik dua ("...") untuk mengapit ujaran atau percakapan lisan yang diucapkan tokoh secara langsung tanpa perubahan.',
  },

  // --- SOAL 22 ---
  {
    id: 22,
    type: 'benar_salah',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sedang',
    text: 'Perhatikan konversi kalimat pada gambar di atas!\nKalimat Langsung: Siti berkata, "Saya akan meminjam kamus ini."\nKalimat Tak Langsung: Siti berkata bahwa dia akan meminjam kamus itu.\n\nPernyataan:\n"Kata tunjuk \'ini\' pada kalimat langsung akan berubah menjadi kata tunjuk \'itu\' ketika diubah menjadi kalimat tak langsung."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(30, 18)">
        <rect width="160" height="60" rx="8" fill="#FFFFFF" stroke="#22C55E"/>
        <text x="80" y="24" fill="#15803D" font-size="10" font-weight="bold" text-anchor="middle">Kalimat Langsung</text>
        <text x="80" y="46" fill="#B91C1C" font-size="14" font-weight="extrabold" text-anchor="middle">" ... ini "</text>
        <!-- Tanda Panah -->
        <text x="180" y="52" fill="#047857" font-size="20" font-weight="bold">→</text>
        <rect x="200" y="0" width="160" height="60" rx="8" fill="#FFFFFF" stroke="#22C55E"/>
        <text x="280" y="24" fill="#15803D" font-size="10" font-weight="bold" text-anchor="middle">Kalimat Tak Langsung</text>
        <text x="280" y="46" fill="#047857" font-size="14" font-weight="extrabold" text-anchor="middle">... itu</text>
      </g>
      <text x="210" y="114" fill="#166534" font-size="10.5" font-weight="bold" text-anchor="middle">Perubahan kata tunjuk ruang/jarak: 'ini' -> 'itu', 'di sini' -> 'di sana'</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nKarena dalam kalimat tak langsung pengucap menceritakan kembali peristiwa dari sudut pandang pencerita, kata tunjuk dekat ("ini", "di sini") berubah menjadi kata tunjuk jauh ("itu", "di sana").',
  },

  // --- SOAL 23 ---
  {
    id: 23,
    type: 'benar_salah',
    topic: 'Kalimat Langsung dan Tak Langsung',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat tak langsung pada gambar di atas!\n"Ayah menanyakan kepadaku apakah aku sudah mengembalikan buku ke perpustakaan."\n\nPernyataan:\n"Kalimat tak langsung tersebut wajib diakhiri dengan tanda tanya (?) karena memuat kata tanya \'apakah\'."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <g transform="translate(25, 18)">
        <rect width="370" height="65" rx="10" fill="#FFFFFF" stroke="#EF4444" stroke-width="1.2"/>
        <text x="20" y="30" fill="#7F1D1D" font-size="10.5">"Ayah menanyakan kepadaku apakah aku sudah</text>
        <text x="20" y="48" fill="#7F1D1D" font-size="10.5">mengembalikan buku ke perpustakaan<tspan fill="#DC2626" font-size="16" font-weight="extrabold">.</tspan>"</text>
      </g>
      <text x="210" y="114" fill="#991B1B" font-size="10.5" font-weight="bold" text-anchor="middle">Ingat: Kalimat tak langsung bersifat berita (deklaratif), diakhiri tanda titik (.)</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nKalimat tak langsung hakikatnya merupakan kalimat berita (deklaratif) yang melaporkan ucapan seseorang, sehingga selalu diakhiri tanda titik (.), bukan tanda tanya (?), meskipun di dalamnya memuat kata "apakah" atau "siapa".',
  },

  // --- SOAL 24 ---
  {
    id: 24,
    type: 'benar_salah',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan jenis penokohan dalam cerita pada gambar di atas!\n\nPernyataan:\n"Tokoh protagonis dalam sebuah cerita adalah tokoh penentang yang memiliki watak jahat dan selalu memusuhi tokoh utama."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(25, 16)">
        <!-- Box 1 -->
        <rect x="0" y="0" width="175" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="87" y="24" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">PROTAGONIS</text>
        <text x="87" y="46" fill="#1E3A8A" font-size="10" text-anchor="middle">Tokoh Utama (Watak Baik)</text>
        <!-- Box 2 -->
        <rect x="195" y="0" width="175" height="65" rx="8" fill="#FEF2F2" stroke="#EF4444"/>
        <text x="282" y="24" fill="#DC2626" font-size="11" font-weight="bold" text-anchor="middle">ANTAGONIS</text>
        <text x="282" y="46" fill="#991B1B" font-size="10" text-anchor="middle">Tokoh Penentang (Jahat)</text>
      </g>
      <text x="210" y="114" fill="#475569" font-size="10.5" font-weight="bold" text-anchor="middle">Bedakan antara peran Protagonis, Antagonis, dan Tritagonis</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nTokoh yang memiliki watak jahat dan menentang tokoh utama dinamakan tokoh ANTAGONIS. Sedangkan tokoh PROTAGONIS adalah tokoh utama cerita yang umumnya memiliki watak positif/baik dan mendukung alur cerita.',
  },

  // --- SOAL 25 ---
  {
    id: 25,
    type: 'benar_salah',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat bermajas pada gambar di atas!\n"Matahari tersenyum ramah menyinari desa di pagi hari."\n\nPernyataan:\n"Kalimat tersebut menggunakan majas personifikasi karena matahari (benda tidak bernyawa) digambarkan dapat tersenyum ramah layaknya manusia."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FEFCE8" stroke="#FDE047" stroke-width="1.5"/>
      <g transform="translate(30, 16)">
        <!-- Matahari kartun tersenyum -->
        <circle cx="45" cy="40" r="25" fill="#F59E0B"/>
        <circle cx="36" cy="34" r="3" fill="#FFFFFF"/>
        <circle cx="54" cy="34" r="3" fill="#FFFFFF"/>
        <path d="M36 46 Q45 54 54 46" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <!-- Text -->
        <rect x="90" y="5" width="270" height="70" rx="8" fill="#FFFFFF" stroke="#EAB308"/>
        <text x="105" y="32" fill="#854D0E" font-size="11.5">"Matahari <tspan fill="#DC2626" font-weight="bold">tersenyum ramah</tspan></text>
        <text x="105" y="52" fill="#854D0E" font-size="11.5">menyinari desa di pagi hari."</text>
      </g>
      <text x="210" y="116" fill="#A16207" font-size="10.5" font-weight="bold" text-anchor="middle">Personifikasi: Menginsankan benda mati seperti watak manusia</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nMajas Personifikasi menyematkan tindakan/watak manusia ("tersenyum ramah") kepada matahari, yang merupakan benda alam tanpa nyawa manusia.',
  },

  // --- SOAL 26 ---
  {
    id: 26,
    type: 'benar_salah',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat kiasan pada gambar di atas!\n"Para pahlawan yang gugur di medan pertempuran diabadikan sebagai bunga bangsa."\n\nPernyataan:\n"Ungkapan \'bunga bangsa\' bermakna orang yang berharga atau berjasa bagi negaranya dan merupakan bentuk majas metafora."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(30, 16)">
        <rect width="360" height="68" rx="8" fill="#FFFFFF" stroke="#22C55E" stroke-width="1.2"/>
        <text x="20" y="30" fill="#14532D" font-size="11">"Pahlawan yang gugur di medan perang adalah</text>
        <text x="20" y="50" fill="#15803D" font-size="13" font-weight="bold"><tspan fill="#DC2626">bunga bangsa</tspan> yang senantiasa dikenang."</text>
      </g>
      <text x="210" y="114" fill="#15803D" font-size="10.5" font-weight="bold" text-anchor="middle">Metafora: Penggunaan kiasan kata tanpa kata tugas pembanding</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\n"Bunga bangsa" merupakan majas metafora yang mengibaratkan para pahlawan pejuang sebagai hal terindah dan paling berharga (bunga) bagi suatu bangsa.',
  },

  // --- SOAL 27 ---
  {
    id: 27,
    type: 'benar_salah',
    topic: 'Unsur Cerita & Majas',
    difficulty: 'Sukar',
    text: 'Perhatikan kutipan cerita pendek pada gambar di atas!\n"Pagi itu aku melangkahkan kakiku menuju sekolah dengan hati penuh semangat dan harapan baru."\n\nPernyataan:\n"Kutipan cerita pendek tersebut menggunakan sudut pandang orang ketiga (pengamat serba tahu)."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 16)">
        <rect width="360" height="68" rx="8" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
        <text x="20" y="32" fill="#334155" font-size="11">"Pagi itu <tspan fill="#DC2626" font-weight="extrabold">aku</tspan> melangkahkan kakiku menuju</text>
        <text x="20" y="50" fill="#334155" font-size="11">sekolah dengan hati penuh semangat."</text>
      </g>
      <text x="210" y="114" fill="#475569" font-size="10.5" font-weight="bold" text-anchor="middle">Perhatikan kata ganti yang digunakan pencerita dalam narasi!</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nCerita tersebut menggunakan kata ganti "aku" (orang pertama), yang berarti pencerita terlibat langsung sebagai tokoh dalam cerita. Jadi sudut pandang yang digunakan adalah sudut pandang ORANG PERTAMA, bukan orang ketiga.',
  },

  // --- SOAL 28 ---
  {
    id: 28,
    type: 'benar_salah',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Mudah',
    text: 'Perhatikan anatomi sampul buku pada gambar di atas!\n\nPernyataan:\n"Sampul belakang (back cover) buku umumnya memuat sinopsis ringkas isi buku, kode batang (barcode), dan nomor standar ISBN."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5"/>
      <g transform="translate(45, 14)">
        <rect width="330" height="75" rx="8" fill="#FFFFFF" stroke="#475569"/>
        <text x="20" y="24" fill="#0F172A" font-size="10" font-weight="bold">BAGIAN SAMPUL BELAKANG BUKU</text>
        <text x="20" y="42" fill="#475569" font-size="9">• Ringkasan cerita / Sinopsis menarik</text>
        <text x="20" y="58" fill="#475569" font-size="9">• Barcode &amp; Nomor Registrasi ISBN</text>
      </g>
      <text x="210" y="116" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Anatomi buku: Sampul depan, Punggung buku, dan Sampul belakang</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nSampul belakang buku (back cover) dirancang untuk memberikan gambaran ringkas (sinopsis) mengenai isi buku, memuat informasi identitas resmi berupa ISBN (International Standard Book Number), dan kode batang (barcode) untuk inventaris.',
  },

  // --- SOAL 29 ---
  {
    id: 29,
    type: 'benar_salah',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Sedang',
    text: 'Perhatikan perbandingan jenis buku pada gambar di atas!\n\nPernyataan:\n"Buku biografi perjalanan hidup pahlawan nasional tergolong ke dalam jenis buku fiksi karena disajikan dengan gaya penceritaan yang menarik seperti cerpen."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <g transform="translate(30, 16)">
        <rect width="360" height="68" rx="8" fill="#FFFFFF" stroke="#EF4444" stroke-width="1.2"/>
        <text x="20" y="28" fill="#991B1B" font-size="11" font-weight="bold">Buku Biografi Tokoh / Pahlawan Nasional</text>
        <text x="20" y="48" fill="#7F1D1D" font-size="10">Apakah tergolong Buku FIKSI ataukah Buku NONFIKSI?</text>
      </g>
      <text x="210" y="114" fill="#B91C1C" font-size="10.5" font-weight="bold" text-anchor="middle">Ingat: Biografi memuat fakta riwayat hidup tokoh nyata dalam sejarah</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nBuku biografi pahlawan nasional adalah jenis buku NONFIKSI, karena isi ceritanya didasarkan pada peristiwa nyata, riwayat hidup asli, dan fakta sejarah tokoh yang benar-benar ada, bukan khayalan/rekaan fiksi.',
  },

  // --- SOAL 30 ---
  {
    id: 30,
    type: 'benar_salah',
    topic: 'Buku Fiksi & Nonfiksi',
    difficulty: 'Mudah',
    text: 'Perhatikan mockup halaman daftar isi pada gambar di atas!\n\nPernyataan:\n"Bagian daftar isi pada sebuah buku berfungsi untuk memudahkan pembaca menemukan letak bab atau topik pembahasan beserta nomor halamannya secara cepat."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="14" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(35, 14)">
        <rect width="350" height="74" rx="8" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
        <text x="175" y="20" fill="#15803D" font-size="10.5" font-weight="bold" text-anchor="middle">DAFTAR ISI BUKU</text>
        <text x="15" y="40" fill="#1F2937" font-size="9.5">Bab I   : Kalimat Langsung &amp; Tak Langsung ............. Hal 1</text>
        <text x="15" y="58" fill="#1F2937" font-size="9.5">Bab II  : Mengenal Majas &amp; Unsur Cerita ............... Hal 24</text>
      </g>
      <text x="210" y="116" fill="#166534" font-size="10.5" font-weight="bold" text-anchor="middle">Fungsi: Navigasi cepat menuju bab atau halaman yang dituju</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nDaftar isi merupakan peta panduan buku yang menyusun urutan bab, subbab, dan topik secara runtut beserta nomor halamannya agar pembaca dapat menemukan informasi yang dicari dengan praktis dan efisien.',
  },
];
