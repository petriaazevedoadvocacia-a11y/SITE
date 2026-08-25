// Centralized WhatsApp click handler with GA4 + dataLayer tracking
const WA_NUMBER = "552732082264";

/**
 * Saudação pré-escrita por grupo de anúncio do Google Ads.
 * A LP recebe ?origem=info | ?origem=solucao na URL final do anúncio;
 * a mensagem se identifica sozinha pro comercial, sem código estranho pra cliente.
 * Sem parâmetro (tráfego direto/orgânico) cai em "direto" — texto atual, nada muda.
 */
const WA_MENSAGENS: Record<string, string> = {
  info: "Olá, fui demitida grávida e quero entender quais são os meus direitos.",
  solucao: "Olá, quero falar com uma advogada especialista em direitos da gestante.",
  direto:
    "Olá, vim pelo site sobre direitos da gestante. Gostaria de entender melhor o meu caso.",
};

const WA_ORIGEM_KEY = "origem_ads";

function waUrl(mensagem: string) {
  return `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(mensagem)}`;
}

export const WA_URL = waUrl(WA_MENSAGENS.direto);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Lê ?origem= da URL e guarda na sessão — o rodapé leva pras páginas legais
 * com reload completo, então sem persistir a origem se perderia na volta.
 * Nunca lança: sessionStorage bloqueado (Safari privado) cai em "direto".
 */
function lerOrigemAds(): string {
  try {
    const param = new URLSearchParams(window.location.search).get("origem");
    if (param && param in WA_MENSAGENS) {
      sessionStorage.setItem(WA_ORIGEM_KEY, param);
      return param;
    }
    const salvo = sessionStorage.getItem(WA_ORIGEM_KEY);
    return salvo && salvo in WA_MENSAGENS ? salvo : "direto";
  } catch {
    return "direto";
  }
}

export function clickWhatsapp(origin: string = "unknown") {
  if (typeof window === "undefined") return;
  // `origin` = posição do CTA na página. `origemAds` = grupo de anúncio. Eixos distintos.
  const origemAds = lerOrigemAds();
  try {
    window.gtag?.("event", "lead_whatsapp_trabalhista", {
      method: "whatsapp",
      origin,
      origem_ads: origemAds,
      page_path: window.location.pathname,
    });
    window.dataLayer?.push({
      event: "whatsapp_click",
      lead_origin: origin,
      lead_origem_ads: origemAds,
    });
  } catch {
    /* GA não carregou */
  }
  window.open(waUrl(WA_MENSAGENS[origemAds]), "_blank", "noopener,noreferrer");
}
