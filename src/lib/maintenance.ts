/** Shared maintenance configuration for server and client components. */
export function isMaintenanceMode(): boolean {
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE?.trim().toLowerCase() === "true";
}

export const marketingContact = {
  phone: "6282110002003",
  displayPhone: "0821-1000-2003",
  telephoneUrl: "tel:082110002003",
  message: "Halo Tim Marketing Boga Rasa Tama, saya ingin bertanya mengenai layanan catering.",
} as const;

// Keep the existing string export compatible with anchor href props.
export const marketingWhatsApp = `https://wa.me/${marketingContact.phone}?text=${encodeURIComponent(marketingContact.message)}`;
