import Tools1 from "/assets/tools/html.png";
import Tools2 from "/assets/tools/css.png";
import Tools3 from "/assets/tools/js.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/reactjs.png";
import Tools6 from "/assets/tools/nextjs.png";
import Tools7 from "/assets/tools/php.png";
import Tools8 from "/assets/tools/mysql.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/vscode.png";
import Tools12 from "/assets/tools/vite.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "HTML",
    ket: "Markup Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "CSS",
    ket: "Styling Language",
    dad: "150",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Utility-first Framework",
    dad: "250",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "React",
    ket: "UI Framework",
    dad: "300",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Next.js",
    ket: "Full-stack Framework",
    dad: "350",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "PHP",
    ket: "Backend Language",
    dad: "400",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "MySQL",
    ket: "Relational Database",
    dad: "450",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "500",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "GitHub",
    ket: "Version Control",
    dad: "550",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "600",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Vite",
    ket: "Build Tool",
    dad: "650",
  },
  {
    id: 13,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    nama: "Laravel",
    ket: "Backend Framework",
    dad: "700",
  },
  {
    id: 14,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    nama: "Supabase",
    ket: "Database / BaaS",
    dad: "750",
  },
  {
    id: 15,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    nama: "Flutter",
    ket: "Mobile Framework",
    dad: "800",
  },
  {
    id: 16,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    nama: "Postman",
    ket: "API Client",
    dad: "850",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Bloomerie",
    subtitle: "E-commerce platform for a flower & gift shop business.",
    fullDescription:
      "Bloomerie adalah platform e-commerce untuk toko bunga yang menyediakan informasi tentang bisnis, katalog produk, dan artikel. Proyek ini masih dalam tahap pengembangan, saya berfokus pada pengembangan frontend menggunakan Next.js 16, Tailwind CSS v4, dan Framer Motion.",
    borderColor: "#7c3aed",
    gradient: "linear-gradient(145deg, #7c3aed, #0c0c0f)",
    githubUrl: "https://github.com/zelviarani16",
    liveUrl: "https://bloomerie.vercel.app",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Personal Web Portfolio",
    subtitle: "Personal portfolio website showcasing projects and skills.",
    fullDescription:
      "Website portofolio pribadi yang dirancang untuk menampilkan profil, perjalanan akademik, keterampilan teknis, serta berbagai proyek yang telah dikerjakan. Dibangun menggunakan React.js 19, Vite, Tailwind CSS v4, Framer Motion, GSAP, OGL (WebGL), AOS, dan Animate.css untuk menghadirkan pengalaman pengguna yang responsif dan interaktif.",
    borderColor: "#6d28d9",
    gradient: "linear-gradient(145deg, #6d28d9, #0c0c0f)",
    url: "https://github.com/zelviarani16",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "RSHP Web System",
    subtitle: "Web-based hospital management and patient record system.",
    fullDescription:
      "Aplikasi manajemen Rumah Sakit Hewan Pendidikan (RSHP) berbasis web yang dikembangkan menggunakan PHP, Laravel Blade, CSS, dan MySQL. Sistem ini mendukung pengelolaan data pasien dan administrasi rumah sakit melalui fitur autentikasi pengguna serta operasi CRUD yang terintegrasi dengan database.",
    borderColor: "#5b21b6",
    gradient: "linear-gradient(145deg, #5b21b6, #0c0c0f)",
    url: "https://github.com/zelviarani16",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Inventory Management System",
    subtitle: "Inventory system powered by MySQL Triggers, Functions, and Views.",
    fullDescription:
      "Sistem inventaris berbasis web yang dibangun menggunakan PHP, Laravel Blade, dan MySQL. Dilengkapi fitur autentikasi pengguna serta optimasi database melalui Trigger, Function, dan View untuk mendukung pengelolaan stok dan transaksi secara terintegrasi.",
    borderColor: "#7c3aed",
    gradient: "linear-gradient(145deg, #7c3aed, #0c0c0f)",
    url: "https://github.com/zelviarani16",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "E-Ticketing Mobile",
    subtitle: "Mobile E-Ticketing application powered by Laravel and Supabase",
    fullDescription:
      "Aplikasi pemesanan tiket berbasis mobile yang dikembangkan menggunakan Laravel sebagai backend framework, Supabase untuk pengelolaan database, dan Postman untuk pengujian serta dokumentasi API. Proyek ini berfokus pada integrasi layanan backend dan saat ini masih dalam tahap pengembangan.",
    borderColor: "#6d28d9",
    gradient: "linear-gradient(180deg, #6d28d9, #0c0c0f)",
    url: "https://github.com/zelviarani16",
    dad: "500",
  },
];