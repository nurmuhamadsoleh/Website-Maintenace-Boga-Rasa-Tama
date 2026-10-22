import { Wrench } from "lucide-react";

export default function MaintenanceHero() {
  return (
    <section className="hero text-center" aria-labelledby="maintenance-title">
      <div className="status-badge animate-in"><span className="status-dot" /><Wrench size={12} aria-hidden="true" /> WEBSITE UNDER MAINTENANCE</div>
      <h1 id="maintenance-title" className="animate-in headline">WEBSITE SEDANG DALAM<br className="desktop-break" /> PROSES <span>PENINGKATAN</span></h1>
      <div className="gold-rule" aria-hidden="true"><span />◆<span /></div>
      <p className="hero-subtitle animate-in">Kami Sedang Menyiapkan<br className="desktop-break" /> Pengalaman Digital yang <em>Lebih Baik</em> untuk Anda.</p>
      <div className="description animate-in">
        <p>Website resmi Boga Rasa Tama saat ini sedang dalam proses pemeliharaan dan peningkatan performa untuk menghadirkan layanan yang lebih cepat, stabil, dan nyaman.</p>
        <p>Kami juga sedang mempersiapkan berbagai fitur terbaru serta pembaruan informasi layanan catering untuk memudahkan kebutuhan perusahaan dan pelanggan kami.</p>
        <p className="thank-you">Terima kasih atas kepercayaan dan pengertian Anda.</p>
      </div>
    </section>
  );
}
