import { Gauge, MonitorSmartphone, Megaphone } from "lucide-react";

const features = [
  { icon: Gauge, title: "Optimized Performance", text: "Pengalaman website yang lebih cepat, ringan, dan responsif." },
  { icon: MonitorSmartphone, title: "Enhanced Digital Experience", text: "Tampilan modern untuk memudahkan akses informasi dan layanan." },
  { icon: Megaphone, title: "Upcoming Marketing Features", text: "Informasi layanan, promosi, serta fitur digital marketing terbaru yang sedang dipersiapkan." },
];

export default function FeatureCards() {
  return (
    <section className="features-section" aria-labelledby="features-title">
      <h2 id="features-title" className="section-eyebrow"><span /> YANG SEDANG KAMI SIAPKAN <span /></h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {features.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="feature-card animate-in" style={{ animationDelay: `${180 + index * 100}ms` }}>
            <div className="feature-top"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><span>0{index + 1}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
