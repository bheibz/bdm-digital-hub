export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Jasa Notaris & Pengurusan Tanah",
    description: "Layanan lengkap untuk legalitas dokumen dan pengurusan tanah",
    icon: "FileText",
    features: [
      "Pembuatan akta jual beli",
      "Pengurusan sertifikat tanah",
      "Balik nama sertifikat",
      "Legalisasi dokumen"
    ],
    price: "Mulai dari Rp 500.000"
  },
  {
    id: 2,
    title: "Web Development & Management",
    description: "Pembuatan dan pengelolaan website profesional untuk bisnis",
    icon: "Code",
    features: [
      "Website custom development",
      "CRUD & database management",
      "Maintenance & update rutin",
      "Hosting & domain setup"
    ],
    price: "Mulai dari Rp 2.500.000"
  },
  {
    id: 3,
    title: "Content Creation & Marketing",
    description: "Konten kreatif dan strategi marketing untuk brand Anda",
    icon: "PenTool",
    features: [
      "Content writing & copywriting",
      "Social media content",
      "Video & graphic design",
      "Content strategy planning"
    ],
    price: "Mulai dari Rp 1.000.000"
  },
  {
    id: 4,
    title: "SEO & Digital Marketing",
    description: "Optimasi website dan strategi marketing digital terpadu",
    icon: "TrendingUp",
    features: [
      "SEO optimization",
      "Google Ads & Facebook Ads",
      "Analytics & reporting",
      "Conversion optimization"
    ],
    price: "Mulai dari Rp 1.500.000"
  },
  {
    id: 5,
    title: "Business Analytics",
    description: "Analisa data bisnis untuk pengambilan keputusan strategis",
    icon: "BarChart3",
    features: [
      "Business intelligence",
      "Data visualization",
      "Market research",
      "Competitor analysis"
    ],
    price: "Mulai dari Rp 2.000.000"
  },
  {
    id: 6,
    title: "Virtual Assistant",
    description: "Asisten virtual profesional untuk produktivitas maksimal",
    icon: "Headphones",
    features: [
      "Administrative support",
      "Email & calendar management",
      "Customer service",
      "Research & data entry"
    ],
    price: "Mulai dari Rp 800.000/bulan"
  }
];
