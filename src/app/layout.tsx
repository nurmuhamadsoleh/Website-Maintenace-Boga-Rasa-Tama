import type { Metadata } from "next";
import { isMaintenanceMode } from "@/lib/maintenance";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bogarasatama.com"),
  title: "Website Maintenance | Boga Rasa Tama",
  description: "Website resmi Boga Rasa Tama sedang dalam proses peningkatan performa dan pengembangan fitur. Hubungi Tim Marketing kami di 0821-1000-2003 untuk kebutuhan catering perusahaan dan event.",
  alternates: { canonical: "https://bogarasatama.com" },
  robots: isMaintenanceMode() ? { index: false, follow: false } : { index: true, follow: true },
  icons: { icon: "/images/boga-rasa-tama-logo.png" },
  openGraph: {
    title: "Website Maintenance | Boga Rasa Tama",
    description: "Pengalaman digital yang lebih baik sedang dipersiapkan. Tim Marketing tetap siap melayani kebutuhan catering Anda.",
    url: "https://bogarasatama.com",
    siteName: "Boga Rasa Tama",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/boga-rasa-tama-building.jpeg", width: 745, height: 637, alt: "Gedung Boga Rasa Tama" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
