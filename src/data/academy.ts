export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  students: number;
  image: string;
  link: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Masterclass Digital Marketing 2024",
    description: "Pelajari strategi marketing digital dari dasar hingga advanced untuk meningkatkan penjualan bisnis Anda",
    instructor: "Ahmad Ridwan",
    duration: "12 minggu",
    level: "Pemula - Menengah",
    price: "Rp 1.999.000",
    rating: 4.8,
    students: 2341,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Web Development Complete Bootcamp",
    description: "Dari nol sampai bisa membuat website profesional dengan HTML, CSS, JavaScript, dan React",
    instructor: "Sarah Wijaya",
    duration: "16 minggu",
    level: "Pemula",
    price: "Rp 2.499.000",
    rating: 4.9,
    students: 1876,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "SEO Master Course: Ranking #1 di Google",
    description: "Teknik SEO terbaru dan terlengkap untuk mendominasi halaman pertama Google",
    instructor: "Budi Santoso",
    duration: "8 minggu",
    level: "Menengah",
    price: "Rp 1.499.000",
    rating: 4.7,
    students: 3102,
    image: "https://images.unsplash.com/photo-1571721839741-57c3e88d0ca3?w=800&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Marketing Mastery",
    description: "Strategi lengkap mengelola dan mengembangkan bisnis di Instagram, Facebook, TikTok, dan LinkedIn",
    instructor: "Rina Kartika",
    duration: "10 minggu",
    level: "Pemula - Menengah",
    price: "Rp 1.799.000",
    rating: 4.8,
    students: 2654,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Graphic Design Professional Course",
    description: "Menguasai Adobe Photoshop, Illustrator, dan Figma untuk menjadi desainer profesional",
    instructor: "David Kurniawan",
    duration: "14 minggu",
    level: "Pemula - Advanced",
    price: "Rp 2.199.000",
    rating: 4.9,
    students: 1543,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Content Creation & Video Editing",
    description: "Membuat konten viral dan mengedit video profesional untuk YouTube, TikTok, dan Instagram",
    instructor: "Lisa Permata",
    duration: "12 minggu",
    level: "Pemula",
    price: "Rp 1.899.000",
    rating: 4.7,
    students: 2198,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    link: "#"
  },
  {
    id: 7,
    title: "E-Commerce & Dropshipping Blueprint",
    description: "Panduan lengkap membangun toko online yang menghasilkan hingga puluhan juta per bulan",
    instructor: "Tommy Setiawan",
    duration: "10 minggu",
    level: "Pemula - Menengah",
    price: "Rp 2.299.000",
    rating: 4.8,
    students: 3421,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#"
  },
  {
    id: 8,
    title: "Copywriting for Sales & Marketing",
    description: "Teknik menulis yang menjual dan meningkatkan conversion rate hingga 10x lipat",
    instructor: "Indra Gunawan",
    duration: "8 minggu",
    level: "Menengah",
    price: "Rp 1.599.000",
    rating: 4.9,
    students: 1987,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    link: "#"
  }
];
