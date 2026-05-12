// Centralized WhatsApp click handler with GA4 + dataLayer tracking
const WA_NUMBER = "554530273100";
const WA_TEXT = encodeURIComponent(
  "Olá, vim pelo site sobre direitos da gestante. Gostaria de entender o meu caso."
);
export const WA_URL = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${WA_TEXT}`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function clickWhatsapp(origin: string = "unknown") {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "lead_whatsapp_trabalhista", {
      method: "whatsapp",
      origin,
      page_path: window.location.pathname,
    });
    window.dataLayer?.push({ event: "whatsapp_click", lead_origin: origin });
  } catch {
    /* GA não carregou */
  }
  window.open(WA_URL, "_blank", "noopener,noreferrer");
}
