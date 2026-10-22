import { ArrowUpRight, Phone } from "lucide-react";
import { marketingWhatsApp } from "@/lib/maintenance";

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0 11.96 11.96 0 0 0 1.65 18L0 24l6.14-1.61A12 12 0 0 0 24 12c0-3.2-1.24-6.21-3.5-8.5ZM12 22a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.65.96.97-3.56-.23-.37A9.96 9.96 0 0 1 12 2a10 10 0 0 1 0 20Zm5.49-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.52.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>;
}

export default function MarketingContact() {
  return (
    <section className="contact text-center" aria-labelledby="contact-title">
      <p className="contact-eyebrow">WEBSITE DIPERBARUI. PELAYANAN TETAP SEPENUH HATI.</p>
      <h2 id="contact-title">BUTUH LAYANAN CATERING SEKARANG?</h2>
      <p className="contact-description">Tim Marketing Boga Rasa Tama tetap siap membantu kebutuhan catering industri, perusahaan, event, nasi box, dan snack box Anda.</p>
      <a className="whatsapp-button" href={marketingWhatsApp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>Hubungi Tim Marketing via WhatsApp</span><ArrowUpRight size={18} aria-hidden="true" /></a>
      <a className="phone-link" href="tel:082110002003"><Phone size={13} aria-hidden="true" /> 0821-1000-2003</a>
    </section>
  );
}
