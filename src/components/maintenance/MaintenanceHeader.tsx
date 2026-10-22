import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MaintenanceHeader() {
  return (
    <header className="maintenance-header animate-in">
      <p className="header-note">CRAFTED WITH CARE.<br /><span>SERVED WITH EXCELLENCE.</span></p>
      <Image src="/images/boga-rasa-tama-logo.png" alt="Boga Rasa Tama" width={152} height={109} priority sizes="(max-width: 640px) 125px, 152px" className="brand-logo" />
      <a className="header-contact" href="tel:082110002003">Tetap terhubung <ArrowUpRight size={15} aria-hidden="true" /></a>
    </header>
  );
}
