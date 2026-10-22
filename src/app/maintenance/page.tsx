import type { Metadata } from "next";
import MaintenancePage from "@/components/maintenance/MaintenancePage";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function MaintenanceRoute() {
  return <MaintenancePage />;
}
