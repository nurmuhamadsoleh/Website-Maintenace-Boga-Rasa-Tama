"use client";

import Image from "next/image";
import MaintenanceHeader from "./MaintenanceHeader";
import MaintenanceHero from "./MaintenanceHero";
import FeatureCards from "./FeatureCards";
import MarketingContact from "./MarketingContact";
import MaintenanceFooter from "./MaintenanceFooter";

export default function MaintenancePage() {
  return (
    <div className="maintenance min-h-dvh relative isolate">
      <div className="building-background" aria-hidden="true">
        <Image src="/images/boga-rasa-tama-building.jpeg" alt="" fill priority sizes="100vw" quality={85} className="object-cover" />
      </div>
      <a href="#main-content" className="skip-link">Langsung ke konten</a>
      <div className="page-shell relative mx-auto w-full max-w-[1000px] px-5 sm:px-9">
        <MaintenanceHeader />
        <main id="main-content" tabIndex={-1}>
          <MaintenanceHero />
          <FeatureCards />
          <MarketingContact />
        </main>
        <MaintenanceFooter />
      </div>
    </div>
  );
}
