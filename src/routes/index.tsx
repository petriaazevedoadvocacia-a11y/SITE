import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsappButton, WhatsappIcon, StickyMobileCTA } from "@/components/whatsapp-button";
import { clickWhatsapp } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-gestante.jpg";
import storyImg from "@/assets/story-gestante.jpg";
import {
  Lock,
  ShieldCheck,
  Clock,
  Globe2,
  Check,
  ChevronRight,
  Scale,
  FileSignature,
  HeartHandshake,
  Briefcase,
  ClipboardList,
  Coins,
  Star,
  AlertTriangle,
} from "lucide-react";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Tenho direito mesmo se descobri a gravidez DEPOIS da demissão?",
    a: "Sim. A Súmula 244 do TST e o Tema 497 do STF afirmam que a estabilidade da gestante começa na concepção, e independe do conhecimento prévio da empresa ou da própria trabalhadora. Se a concepção ocorreu durante o vínculo, a proteção existe. Para entender o seu caso específico, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Posso anular o meu pedido de demissão se foi feito sem o sindicato?",
    a: "Em muitos casos, sim. O Art. 500 da CLT e os Temas 55 e 134 do TST exigem assistência sindical para validar o pedido de demissão da gestante. Sem essa formalidade, o ato pode ser considerado nulo. Para uma análise jurídica do seu caso, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "A empresa precisava saber da gravidez para eu ter direito?",
    a: "Não. A responsabilidade do empregador é objetiva (Tema 497 do STF). O que importa é se a concepção ocorreu durante o contrato de trabalho. Para entender o seu caso, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Quanto tempo demora um processo trabalhista de gestante?",
    a: "Segundo o relatório Justiça em Números 2025 do CNJ, a Justiça do Trabalho leva, em média, 6 meses e 17 dias para julgar processos. Cada caso tem suas particularidades. Para conversar sobre o seu, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Funciona online mesmo? Preciso ir até o escritório?",
    a: "Sim, todo o atendimento é online, em todo o Brasil. Você não precisa se deslocar. Documentos, conversas e acompanhamento acontecem pelo WhatsApp e por canais digitais. Para começar, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Estava em contrato de experiência. Tenho proteção?",
    a: "Sim. A Súmula 244, item III, do TST garante a estabilidade da gestante mesmo nos contratos por prazo determinado, incluindo os de experiência. O encerramento nessas condições pode ser considerado dispensa obstativa. Para verificar o seu caso, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Trabalhava sem carteira assinada. Tem como reconhecer meus direitos?",
    a: "Sim. Mesmo sem registro formal, é possível pedir o reconhecimento do vínculo de emprego e, a partir disso, garantir a estabilidade da gestante e os demais direitos trabalhistas. Para uma avaliação, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "Já se passaram alguns meses desde a demissão. Ainda dá tempo?",
    a: "Existem prazos prescricionais aplicáveis ao Direito do Trabalho, e a viabilidade depende do tempo decorrido e das circunstâncias do caso. Por isso, agir cedo é importante. Para entender se ainda há tempo no seu caso, fale com uma advogada pelo WhatsApp.",
  },
  {
    q: "A análise da minha situação gera obrigação de contratar o escritório?",
    a: "Não. A análise jurídica inicial não gera compromisso de prosseguir. Você decide se quer dar continuidade depois de entender as suas opções. Para conversar, fale com uma advogada pelo WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://www.barphoff.com/gestante-demitida#service",
      name: "Barp.Hoff Advogadas, Direitos da Gestante Demitida",
      description:
        "Atuação especializada em demissão de gestante, estabilidade provisória, pedido de demissão nulo, contrato de experiência e dispensa discriminatória.",
      url: "https://www.barphoff.com/gestante-demitida",
      telephone: "+55-45-3027-3100",
      areaServed: "BR",
      provider: { "@type": "LegalService", name: "Barp.Hoff Advogadas" },
    },
    {
      "@type": "Attorney",
      name: "Dra. Alexandra Barp Salgado",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        recognizedBy: { "@type": "Organization", name: "OAB/PR" },
        identifier: "56.903-N",
      },
      knowsAbout: [
        "Direito Trabalhista",
        "Estabilidade Gestante",
        "Direitos da Mulher Trabalhadora",
      ],
    },
    {
      "@type": "Attorney",
      name: "Dra. Jessica Cristina Hoff Bueno Garcia",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        recognizedBy: { "@type": "Organization", name: "OAB/PR" },
        identifier: "99.905",
      },
      knowsAbout: [
        "Direito Trabalhista",
        "Estabilidade Gestante",
        "Direitos da Mulher Trabalhadora",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.barphoff.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Direitos da Gestante Demitida",
          item: "https://www.barphoff.com/gestante-demitida",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Demitida Grávida? Direitos da Gestante | Barp.Hoff Advogadas" },
      {
        name: "description",
        content:
          "A demissão de gestante geralmente é ilegal, mesmo se a gravidez foi descoberta depois ou houve pedido de demissão. Análise jurídica pelo WhatsApp.",
      },
      { name: "theme-color", content: "#2C0F18" },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Demitida Grávida? Saiba os Seus Direitos | Barp.Hoff Advogadas" },
      { property: "og:description", content: "A lei protege a gestante demitida. Análise jurídica do seu caso pelo WhatsApp." },
      { property: "og:url", content: "https://www.barphoff.com/gestante-demitida" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.barphoff.com/gestante-demitida" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: [
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-V1HCE19K22" },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-V1HCE19K22');`,
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: GestantePage,
});

function GestantePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <LegalMarquee />
      <Bridge />
      <IdentifyCards />
      <HowItWorks />
      <Storytelling />
      <Authority />
      <Faq />
      <Reviews />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

/* ═══════════════════════════════ ORNAMENTOS ═══════════════════════════════ */

function Fleuron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={className} fill="none" aria-hidden="true">
      <path d="M0 12 H26" stroke="currentColor" strokeWidth="0.75" />
      <path d="M54 12 H80" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M40 4 C44 8 46 10 46 12 C46 14 44 16 40 20 C36 16 34 14 34 12 C34 10 36 8 40 4 Z"
        stroke="currentColor"
        strokeWidth="0.85"
        fill="none"
      />
      <circle cx="40" cy="12" r="1.2" fill="currentColor" />
      <circle cx="28.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="51.5" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

function Asterism({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 28" className={className} fill="currentColor" aria-hidden="true">
      <g>
        <path d="M30 2 L31.2 7.5 L36.8 8 L32.2 11 L33.8 16.5 L30 13.2 L26.2 16.5 L27.8 11 L23.2 8 L28.8 7.5 Z" />
        <path
          transform="translate(-18 10) scale(0.78)"
          d="M30 2 L31.2 7.5 L36.8 8 L32.2 11 L33.8 16.5 L30 13.2 L26.2 16.5 L27.8 11 L23.2 8 L28.8 7.5 Z"
        />
        <path
          transform="translate(18 10) scale(0.78)"
          d="M30 2 L31.2 7.5 L36.8 8 L32.2 11 L33.8 16.5 L30 13.2 L26.2 16.5 L27.8 11 L23.2 8 L28.8 7.5 Z"
        />
      </g>
    </svg>
  );
}

function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <defs>
        <path id="sealcurve" d="M 80 80 m -64 0 a 64 64 0 1 1 128 0 a 64 64 0 1 1 -128 0" />
      </defs>
      <circle cx="80" cy="80" r="76" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="80" cy="80" r="64" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="80" cy="80" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.55" />
      <text fill="currentColor" style={{ fontFamily: "Fraunces, serif", fontSize: 9, letterSpacing: 4 }}>
        <textPath href="#sealcurve" startOffset="0">
          · BARP · HOFF · ADVOGADAS · DIREITO TRABALHISTA ·
        </textPath>
      </text>
      <text
        x="80"
        y="78"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "Fraunces, serif", fontSize: 13, letterSpacing: 3, fontWeight: 500 }}
      >
        EST.
      </text>
      <text
        x="80"
        y="100"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 26, fontWeight: 400 }}
      >
        2008
      </text>
      <line x1="55" y1="86" x2="105" y2="86" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  );
}

function Wordmark({ className, tone = "wine" }: { className?: string; tone?: "wine" | "cream" }) {
  const main = tone === "wine" ? "text-[var(--color-wine-deep)]" : "text-[var(--color-cream)]";
  const sub = tone === "wine" ? "text-[var(--color-champagne-deep)]" : "text-[var(--color-champagne)]";
  return (
    <a href="/" className={`inline-flex items-baseline gap-2 ${className ?? ""}`} aria-label="Barp.Hoff Advogadas">
      <span className={`font-display text-xl font-medium tracking-tight sm:text-2xl ${main}`}>
        Barp<span className={sub}>.</span>Hoff
      </span>
      <span className={`hidden text-[10px] font-medium uppercase tracking-[0.32em] sm:inline ${main} opacity-65`}>
        Advogadas
      </span>
    </a>
  );
}

function ChapterHeader({
  numeral,
  eyebrow,
  className = "",
}: {
  numeral: string;
  eyebrow: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="chapter-numeral text-3xl text-[var(--color-champagne-deep)]">{numeral}</span>
      <span className="h-px flex-1 max-w-[3rem] bg-[var(--color-champagne)]/60" />
      <span className="eyebrow text-[var(--color-wine-deep)]/70">{eyebrow}</span>
    </div>
  );
}

/* ═══════════════════════════════ TOPBAR ═══════════════════════════════ */

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-wine)]/10 bg-[var(--color-cream)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-9 md:flex">
          {[
            ["#atuacao", "Atuação"],
            ["#como-funciona", "Processo"],
            ["#escritorio", "Escritório"],
            ["#faq", "Perguntas"],
          ].map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="text-[13px] font-medium tracking-tight text-[var(--color-wine-deep)]/80 transition hover:text-[var(--color-wine)]"
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          type="button"
          data-wa-cta
          onClick={() => clickWhatsapp("topbar")}
          aria-label="Conversar com Advogada no WhatsApp"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-wine-deep)] bg-[var(--color-wine-deep)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-cream)] transition hover:bg-[var(--color-wine-ink)] sm:px-5"
        >
          <WhatsappIcon className="size-4 text-[var(--color-whatsapp)] sm:hidden" />
          <span className="hidden sm:inline">Falar com advogada</span>
          <span className="sm:hidden">WhatsApp</span>
          <ChevronRight className="hidden size-3.5 sm:inline" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

/* ═══════════════════════════════ HERO ═══════════════════════════════ */

function Hero() {
  const badges = [
    "Demissão sem justa causa",
    "Estabilidade da gestante",
    "Pedido de demissão",
    "Contrato de experiência",
    "Sem registro",
    "Indenização integral",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-wine-ink)] text-[var(--color-cream)]">
      {/* Camadas atmosféricas */}
      <div className="pointer-events-none absolute inset-0 opacity-90 [background-image:radial-gradient(ellipse_at_18%_10%,color-mix(in_oklab,var(--color-wine)_80%,transparent),transparent_55%),radial-gradient(ellipse_at_90%_90%,color-mix(in_oklab,var(--color-champagne)_18%,transparent),transparent_60%)]" />
      <div className="grain pointer-events-none absolute inset-0" />
      {/* Filete duplo de moldura */}
      <div className="pointer-events-none absolute inset-x-5 top-3 hidden border-t border-[var(--color-champagne)]/25 lg:block" />
      <div className="pointer-events-none absolute inset-x-5 top-[19px] hidden border-t border-[var(--color-champagne)]/15 lg:block" />
      <div className="pointer-events-none absolute inset-x-5 bottom-3 hidden border-t border-[var(--color-champagne)]/25 lg:block" />
      <div className="pointer-events-none absolute inset-x-5 bottom-[19px] hidden border-t border-[var(--color-champagne)]/15 lg:block" />

      {/* Texto vertical à esquerda */}
      <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 lg:block">
        <span
          className="eyebrow block text-[var(--color-champagne)]/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Estabelecida · 2008 · Curitiba · Brasil
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.18fr_0.95fr] lg:gap-16 lg:px-16 lg:pb-28 lg:pt-24">
        {/* Coluna esquerda */}
        <div className="relative flex flex-col justify-center">
          {/* Capítulo I */}
          <div className="mb-6 flex items-center gap-3 sm:gap-4">
            <span className="chapter-numeral text-3xl text-[var(--color-champagne)] sm:text-4xl">I.</span>
            <span className="h-px w-10 bg-[var(--color-champagne)]/55 sm:w-16" />
            <span className="eyebrow text-[10px] text-[var(--color-champagne)] sm:text-[10.5px]">
              Advocacia Trabalhista · Gestante
            </span>
          </div>

          <h1 className="text-balance text-[2.35rem] leading-[1.02] font-medium sm:text-[3.4rem] lg:text-[4.4rem]">
            Fui demitida grávida.
            <span className="block font-serif-italic font-light text-[var(--color-champagne)]">
              E agora, quais os meus direitos?
            </span>
          </h1>

          {/* Ornamento abaixo do H1 */}
          <Fleuron className="mt-7 h-4 w-28 text-[var(--color-champagne)]/70 sm:mt-8 sm:h-5 sm:w-32" />

          <p className="mt-6 max-w-xl text-pretty text-[15px] leading-[1.65] text-[var(--color-cream)]/82 sm:mt-7 sm:text-[1.075rem] sm:leading-[1.7]">
            A lei brasileira protege a gestante mesmo quando a gravidez foi
            descoberta depois da demissão, quando houve pedido de demissão sem
            assistência sindical, ou quando o contrato era de experiência.
          </p>

          {/* Badges editorial — itens com numeral serif */}
          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 xs:grid-cols-2 sm:grid-cols-2 sm:max-w-lg">
            {badges.map((b, i) => (
              <li
                key={b}
                className="flex items-baseline gap-2.5 text-[13.5px] text-[var(--color-cream)]/85"
              >
                <span className="chapter-numeral text-[13px] text-[var(--color-champagne)]/85">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-11 sm:flex-row sm:items-center sm:gap-5">
            <WhatsappButton origin="hero" size="xl" />
            <p className="flex items-center justify-center gap-2.5 text-xs text-[var(--color-cream)]/68 sm:justify-start sm:text-sm">
              <Lock className="size-4 text-[var(--color-champagne)]" aria-hidden="true" />
              Sigiloso · Online · Todo o Brasil
            </p>
          </div>
        </div>

        {/* Coluna direita — moldura editorial com selo */}
        <div className="relative">
          {/* Selo flutuante */}
          <div className="absolute -left-6 -top-6 z-20 hidden h-28 w-28 rounded-full bg-[var(--color-cream)] text-[var(--color-wine-deep)] shadow-warm md:block lg:-left-10 lg:-top-10 lg:h-36 lg:w-36">
            <Seal className="h-full w-full" />
          </div>

          {/* Cantos decorativos */}
          <span className="pointer-events-none absolute -left-3 -top-3 hidden h-16 w-16 border-l border-t border-[var(--color-champagne)]/60 lg:block" />
          <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-16 w-16 border-b border-r border-[var(--color-champagne)]/60 lg:block" />

          <figure className="relative overflow-hidden rounded-[2px] shadow-warm aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-full">
            <img
              src={heroImg}
              alt="Mãos sobre documento jurídico em mesa de escritório, atmosfera acolhedora"
              width={1280}
              height={1280}
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
              style={{ filter: "saturate(0.85) contrast(1.02)" }}
            />
            {/* Duotone bordô sutil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-wine-ink)]/60 via-[var(--color-wine)]/15 to-transparent mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-wine-deep)]/30 via-transparent to-[var(--color-champagne)]/10" />

            {/* Card flutuante de autoridade */}
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-[2px] border border-[var(--color-champagne)]/30 bg-[var(--color-wine-ink)]/85 px-5 py-4 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:w-[19rem]">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center border-r border-[var(--color-champagne)]/30 pr-4">
                  <span className="font-display text-3xl font-medium leading-none text-[var(--color-champagne)]">
                    17
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-cream)]/70">
                    anos
                  </span>
                </div>
                <div className="text-xs leading-tight text-[var(--color-cream)]/85">
                  <p className="font-medium">Atuação especializada em</p>
                  <p className="font-serif-italic text-sm text-[var(--color-champagne)]">
                    Direito Trabalhista da Mulher
                  </p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Trust strip embutida na base do hero */}
      <div className="relative border-t border-[var(--color-champagne)]/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-6 sm:px-8 md:grid-cols-4 md:py-5 lg:px-16">
          {[
            { Icon: Clock, k: "17+", v: "anos de advocacia" },
            { Icon: ShieldCheck, k: "5.000+", v: "casos analisados" },
            { Icon: Globe2, k: "100%", v: "online no Brasil" },
            { Icon: Scale, k: "OAB/PR", v: "registro profissional" },
          ].map(({ Icon, k, v }) => (
            <div key={v} className="flex items-center gap-3">
              <Icon className="size-4 text-[var(--color-champagne)]" aria-hidden="true" />
              <div className="leading-tight">
                <div className="font-display text-base font-medium text-[var(--color-cream)]">{k}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-cream)]/55">
                  {v}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ MARQUEE ═══════════════════════════════ */

function LegalMarquee() {
  const items = [
    "Súmula 244 do TST",
    "Tema 497 do STF",
    "Art. 10, II, b do ADCT",
    "Art. 500 da CLT",
    "Temas 55 e 134 do TST",
    "Justiça em Números 2025 · CNJ",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-b border-[var(--color-wine)]/12 bg-[var(--color-bone)]">
      <div className="anim-marquee flex w-max items-center gap-12 py-4">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-[12px]">
            <span className="chapter-numeral text-base text-[var(--color-champagne-deep)]">§</span>
            <span className="font-medium uppercase tracking-[0.22em] text-[var(--color-wine-deep)]/80">
              {t}
            </span>
            <span className="chapter-numeral text-xl text-[var(--color-champagne)]/55">⁂</span>
          </span>
        ))}
      </div>
      <span className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-bone)] to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-bone)] to-transparent" />
    </div>
  );
}

/* ═══════════════════════════════ BRIDGE ═══════════════════════════════ */

function Bridge() {
  return (
    <section className="relative bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex justify-center">
          <Fleuron className="h-5 w-20 text-[var(--color-champagne-deep)]" />
        </div>

        <p className="dropcap mt-8 text-pretty text-left text-[1.075rem] leading-[1.7] text-foreground/82 sm:mt-10 sm:text-center sm:text-[1.4rem]">
          Quando uma gestante é demitida sem justa causa, mesmo que a gravidez
          tenha sido descoberta depois, a lei brasileira protege. O escritório{" "}
          <span className="font-serif-italic text-[var(--color-wine-deep)]">
            Barp.Hoff Advogadas
          </span>{" "}
          atua há mais de 17 anos em Direito Trabalhista da Gestante, com base
          na <span className="ink-underline">Súmula 244 do TST</span>, no{" "}
          <span className="ink-underline">Tema 497 do STF</span> e no{" "}
          <span className="ink-underline">Art. 10, II, b do ADCT</span>.
        </p>

        <div className="mt-12 flex justify-center">
          <Asterism className="h-5 w-12 text-[var(--color-champagne-deep)]" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ IDENTIFY ═══════════════════════════════ */

function IdentifyCards() {
  const cards = [
    {
      Icon: Scale,
      title: "Fui demitida sem justa causa durante a gestação",
      sub: "A estabilidade da gestante é prevista no Art. 10, II, b do ADCT. A demissão pode ser revertida.",
      origin: "card-sem-justa-causa",
    },
    {
      Icon: HeartHandshake,
      title: "Descobri que estava grávida depois da demissão",
      sub: "A Súmula 244 do TST e o Tema 497 do STF garantem proteção independente do conhecimento prévio.",
      origin: "card-descobriu-depois",
    },
    {
      Icon: FileSignature,
      title: "Pedi demissão sem saber que estava grávida",
      sub: "Sem assistência sindical, o pedido de demissão de gestante é nulo (Art. 500 CLT, Tema 55 TST).",
      origin: "card-pedi-demissao",
    },
    {
      Icon: Briefcase,
      title: "Fui demitida em contrato de experiência",
      sub: "A Súmula 244, III, do TST garante estabilidade mesmo em contratos por prazo determinado.",
      origin: "card-contrato-experiencia",
    },
    {
      Icon: ClipboardList,
      title: "Trabalhava sem carteira assinada",
      sub: "Mesmo sem registro, é possível reconhecer o vínculo e garantir os direitos da gestante.",
      origin: "card-sem-registro",
    },
    {
      Icon: Coins,
      title: "Recebi salários sem o adicional da estabilidade",
      sub: "A indenização inclui salários do período de proteção, FGTS, multa de 40%, férias e 13º.",
      origin: "card-indenizacao",
    },
  ];

  return (
    <section id="atuacao" className="relative scroll-mt-20 bg-gradient-blush py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <ChapterHeader numeral="II." eyebrow="Áreas de atuação" className="justify-center" />
          <h2 className="mt-6 text-balance text-center text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
            Você se identifica com{" "}
            <span className="font-serif-italic font-light text-[var(--color-wine)]">
              alguma dessas situações?
            </span>
          </h2>
          <p className="mt-5 text-center text-[15px] leading-relaxed text-foreground/65 sm:text-base">
            Cada cenário tem amparo jurídico específico. Toque no que mais se
            aproxima da sua situação para conversar com uma advogada.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, sub, origin }, i) => (
            <button
              key={origin}
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp(origin)}
              aria-label={`${title}. Conversar com advogada no WhatsApp.`}
              className="group relative flex h-full flex-col rounded-[3px] border border-[var(--color-wine)]/12 bg-[var(--color-cream)]/85 p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-wine)] active:scale-[0.99] sm:p-8"
            >
              {/* Filete superior animado */}
              <span className="absolute inset-x-6 top-0 h-px bg-[var(--color-champagne)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-x-8" />

              <div className="flex items-baseline justify-between">
                <span className="chapter-numeral text-2xl text-[var(--color-champagne-deep)]/75">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon
                  className="size-5 text-[var(--color-wine)]/55 transition-colors group-hover:text-[var(--color-wine)]"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-4 h-px w-10 bg-[var(--color-wine)]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--color-champagne)] sm:mt-5" />

              <h3 className="mt-5 font-display text-[1.2rem] font-medium leading-[1.2] text-foreground sm:mt-6 sm:text-[1.35rem] sm:leading-[1.18]">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-foreground/70 sm:text-sm">{sub}</p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--color-wine-deep)] sm:mt-7 sm:text-[13px]">
                Falar sobre isso
                <ChevronRight
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ HOW IT WORKS ═══════════════════════════════ */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Você envia a sua situação",
      desc: "Pelo WhatsApp, você manda o que tem (carteira de trabalho, comprovante de gravidez, aviso de demissão). Se não tiver tudo, manda o que tem.",
    },
    {
      n: "02",
      title: "Avaliação jurídica individual",
      desc: "Nossas advogadas verificam a sua situação à luz da Súmula 244 do TST, do Art. 500 da CLT e do Tema 497 do STF.",
    },
    {
      n: "03",
      title: "Você recebe a orientação completa",
      desc: "Explicamos o cenário do seu caso, os direitos aplicáveis e os próximos passos possíveis. Sem compromisso de prosseguir.",
    },
  ];

  return (
    <section id="como-funciona" className="relative scroll-mt-20 bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <ChapterHeader numeral="III." eyebrow="Processo" className="justify-center" />
          <h2 className="mt-6 text-center text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
            Como funciona a{" "}
            <span className="font-serif-italic font-light text-[var(--color-wine)]">
              análise do seu caso
            </span>
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:mt-20 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          {steps.map((s, i) => (
            <li key={s.n} className="group relative">
              {/* Numeral gigante de fundo */}
              <span
                aria-hidden="true"
                className="chapter-numeral pointer-events-none absolute -top-8 -left-2 select-none text-[6.5rem] text-[var(--color-wine)]/[0.07] sm:-top-10 sm:text-[8rem] lg:text-[10rem]"
              >
                {s.n}
              </span>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[13px] font-medium tracking-[0.2em] text-[var(--color-champagne-deep)] sm:text-base">
                    PASSO {s.n}
                  </span>
                  <span className="h-px w-12 bg-[var(--color-champagne)]" />
                </div>
                <h3 className="mt-4 font-display text-[1.5rem] font-medium leading-[1.15] sm:mt-5 sm:text-[1.75rem] sm:leading-[1.12]">
                  {s.title}
                </h3>
                <p className="mt-3 text-pretty text-[15px] leading-[1.65] text-foreground/72 sm:mt-4 sm:text-base sm:leading-[1.7]">
                  {s.desc}
                </p>
              </div>

              {/* Conector entre steps */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-1/2 bg-[var(--color-wine)]/15 lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center gap-3 sm:mt-16">
          <WhatsappButton origin="how-it-works" label="Falar com Advogada agora" />
          <p className="text-xs text-foreground/55">
            Resposta direta de uma advogada · Sem robôs
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ STORYTELLING ═══════════════════════════════ */

function Storytelling() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bone)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <ChapterHeader numeral="IV." eyebrow="Contexto" />
          <h2 className="mt-6 text-balance text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
            Por que muitas gestantes{" "}
            <span className="font-serif-italic font-light text-[var(--color-wine)]">
              não buscam justiça
            </span>
          </h2>

          <p className="dropcap mt-7 text-pretty text-[15.5px] leading-[1.72] text-foreground/82 sm:mt-8 sm:text-[1.05rem] sm:leading-[1.78]">
            Muitas gestantes deixam de buscar os seus direitos por medo, vergonha
            ou desinformação. Acreditam que processar a empresa é demorado, que
            precisam de muitas provas, ou que perderam o direito porque pediram
            demissão ou porque descobriram a gravidez depois.
          </p>

          {/* Pullquote */}
          <blockquote className="relative my-9 pl-6 sm:my-10 sm:pl-7">
            <span className="absolute left-0 top-1 font-serif-italic text-6xl leading-none text-[var(--color-champagne)]/70 sm:text-7xl">
              “
            </span>
            <p className="font-serif-italic text-[1.2rem] leading-[1.3] text-[var(--color-wine-deep)] sm:text-[1.45rem] sm:leading-[1.25]">
              A Justiça do Trabalho hoje resolve casos de gestante em média em{" "}
              <span className="not-italic font-medium">6 meses e 17 dias.</span>
            </p>
            <cite className="mt-3 block text-[11px] uppercase not-italic tracking-[0.22em] text-foreground/55 sm:mt-4">
              — Justiça em Números 2025, CNJ
            </cite>
          </blockquote>

          <p className="text-pretty text-[15.5px] leading-[1.72] text-foreground/82 sm:text-[1.05rem] sm:leading-[1.78]">
            A maioria está enganada. A jurisprudência brasileira protege a
            gestante mesmo nas situações mais difíceis.
          </p>

          <div className="mt-9 rounded-[3px] border border-[var(--color-wine)]/15 bg-[var(--color-cream)] p-6 shadow-soft sm:mt-10 sm:p-7">
            <div className="flex items-start gap-3.5">
              <AlertTriangle
                className="mt-0.5 size-5 shrink-0 text-[var(--color-champagne-deep)]"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-display text-[1.05rem] font-medium tracking-tight sm:text-[1.1rem]">
                  Erros mais comuns após a demissão
                </h3>
                <ul className="mt-4 space-y-3 text-[14.5px] sm:mt-5 sm:text-[15px]">
                  {[
                    "Aceitar a situação sem questionar.",
                    "Assinar pedido de demissão sob pressão sem assistência sindical.",
                    "Esperar muito tempo (existe prazo prescricional).",
                    "Pagar advogado errado por desespero.",
                  ].map((t, i) => (
                    <li key={t} className="flex items-baseline gap-3 text-foreground/82">
                      <span className="chapter-numeral text-sm text-[var(--color-champagne-deep)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 lg:sticky lg:top-24">
          <span className="pointer-events-none absolute -left-3 -top-3 hidden h-14 w-14 border-l border-t border-[var(--color-champagne)]/70 lg:block" />
          <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-14 w-14 border-b border-r border-[var(--color-champagne)]/70 lg:block" />
          <figure className="overflow-hidden rounded-[3px] shadow-warm aspect-[5/4] sm:aspect-[4/3] lg:aspect-square">
            <img
              src={storyImg}
              alt="Mulher serena em poltrona aveludada segurando caderno"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ filter: "saturate(0.86) contrast(1.02)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-wine-deep)]/35 via-transparent to-[var(--color-champagne)]/8 mix-blend-multiply" />
          </figure>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-foreground/55 sm:mt-5">
            Atendimento online · Brasil
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ AUTHORITY ═══════════════════════════════ */

function Authority() {
  const bullets = [
    "Mais de 17 anos de atuação especializada em Direito Trabalhista",
    "Atendimento exclusivamente online, com clientes em todo o Brasil",
    "Foco em ações de gestante, mulher trabalhadora e dispensa discriminatória",
    "Mais de 5.000 casos analisados",
  ];

  return (
    <section
      id="escritorio"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[var(--color-wine-ink)] py-20 text-[var(--color-cream)] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_75%_30%,color-mix(in_oklab,var(--color-wine)_90%,transparent),transparent_55%),radial-gradient(ellipse_at_10%_90%,color-mix(in_oklab,var(--color-champagne)_15%,transparent),transparent_55%)]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="chapter-numeral text-3xl text-[var(--color-champagne)]">V.</span>
              <span className="h-px w-10 bg-[var(--color-champagne)]/55 sm:w-12" />
              <span className="eyebrow text-[10px] text-[var(--color-champagne)] sm:text-[10.5px]">O escritório</span>
            </div>

            <h2 className="mt-6 text-balance text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
              Sobre{" "}
              <span className="font-serif-italic font-light text-[var(--color-champagne)]">
                Barp.Hoff Advogadas
              </span>
            </h2>

            <p className="mt-6 text-pretty text-[15.5px] text-[var(--color-cream)]/78 leading-[1.7] sm:mt-7 sm:text-[1.075rem] sm:leading-[1.75]">
              Um escritório formado por advogadas, dedicado a representar
              mulheres trabalhadoras e gestantes em todo o Brasil. Atendimento
              individualizado, com base em jurisprudência consolidada.
            </p>

            <div className="mt-9 space-y-5 border-l border-[var(--color-champagne)]/45 pl-5 sm:mt-10 sm:pl-6">
              <div>
                <div className="font-display text-[17px] font-medium text-[var(--color-cream)] sm:text-lg">
                  Dra. Alexandra Barp Salgado
                </div>
                <div className="mt-1 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-champagne)]/85 sm:text-[11px]">
                  OAB/PR 56.903-N
                </div>
              </div>
              <div>
                <div className="font-display text-[17px] font-medium text-[var(--color-cream)] sm:text-lg">
                  Dra. Jessica Cristina Hoff Bueno Garcia
                </div>
                <div className="mt-1 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-champagne)]/85 sm:text-[11px]">
                  OAB/PR 99.905
                </div>
              </div>
            </div>

            <div className="mt-9 sm:mt-10">
              <WhatsappButton origin="authority" label="Falar com Advogada agora" />
            </div>
          </div>

          <ul className="grid content-start gap-4 sm:gap-5 lg:pt-2">
            {bullets.map((b, i) => (
              <li
                key={b}
                className="group flex items-start gap-4 border-t border-[var(--color-cream)]/12 pt-4 first:border-t-0 first:pt-0 sm:gap-5 sm:pt-5"
              >
                <span className="chapter-numeral pt-1 text-xl text-[var(--color-champagne)]/70 sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-[var(--color-cream)]/90 leading-[1.55] sm:text-base sm:leading-[1.6]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Linha inferior decorativa */}
      <div className="relative mx-auto mt-16 flex max-w-6xl items-center gap-5 px-5 sm:mt-20 sm:px-8">
        <span className="h-px flex-1 bg-[var(--color-champagne)]/25" />
        <Asterism className="h-4 w-12 text-[var(--color-champagne)]/70" />
        <span className="h-px flex-1 bg-[var(--color-champagne)]/25" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FAQ ═══════════════════════════════ */

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <ChapterHeader numeral="VI." eyebrow="Perguntas frequentes" className="justify-center" />
          <h2 className="mt-6 text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
            Dúvidas mais{" "}
            <span className="font-serif-italic font-light text-[var(--color-wine)]">
              comuns
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-foreground/65 sm:mt-5 sm:text-base">
            Respostas baseadas em jurisprudência atualizada do TST e do STF.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 divide-y divide-[var(--color-wine)]/12 border-y border-[var(--color-wine)]/15 sm:mt-14"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="group gap-4 py-5 text-left hover:no-underline [&>svg]:text-[var(--color-champagne-deep)] [&>svg]:transition-transform sm:gap-5 sm:py-6">
                <span className="flex items-baseline gap-3 sm:gap-4">
                  <span className="chapter-numeral shrink-0 text-base text-[var(--color-champagne-deep)] sm:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1rem] font-medium leading-[1.32] sm:text-[1.15rem] sm:leading-[1.35]">
                    {item.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-8 text-[14.5px] text-foreground/78 leading-[1.7] sm:pb-6 sm:pl-10 sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex flex-col items-center gap-4 sm:mt-14">
          <Fleuron className="h-4 w-20 text-[var(--color-champagne-deep)]" />
          <WhatsappButton origin="faq" label="Falar com Advogada agora" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ REVIEWS ═══════════════════════════════ */

function Reviews() {
  const reviews = [
    {
      text: "Atendimento muito profissional e atencioso. As advogadas explicaram tudo com clareza e me deixaram muito mais tranquila.",
      author: "Cliente verificada",
    },
    {
      text: "Equipe maravilhosa. Conheci o escritório em um momento difícil e me senti acolhida do começo ao fim.",
      author: "Cliente verificada",
    },
    {
      text: "Recomendo a Barp.Hoff. Atendimento online prático e sério, trataram meu caso com muito respeito.",
      author: "Cliente verificada",
    },
    {
      text: "Profissionais sérias, comunicação rápida e clara. Me senti segura em cada etapa.",
      author: "Cliente verificada",
    },
  ];

  return (
    <section className="relative bg-gradient-blush py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
          <ChapterHeader numeral="VII." eyebrow="Avaliações" className="justify-center" />

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-wine)]/15 bg-card px-4 py-2 shadow-soft sm:gap-3 sm:px-5 sm:py-2.5">
            <span className="font-display text-[13px] font-medium text-foreground sm:text-sm">Google</span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-0.5 text-[var(--color-champagne-deep)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current sm:size-4" aria-hidden="true" />
              ))}
            </span>
            <span className="font-display text-[13px] font-semibold text-foreground sm:text-sm">4,9</span>
            <span className="hidden text-xs text-foreground/60 sm:inline">Avaliações verificadas</span>
          </div>

          <h2 className="text-balance text-[2.1rem] font-medium leading-[1.05] sm:text-[2.85rem] lg:text-5xl">
            O que clientes{" "}
            <span className="font-serif-italic font-light text-[var(--color-wine)]">
              dizem do atendimento
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-[3px] border border-[var(--color-wine)]/12 bg-[var(--color-cream)] p-6 shadow-soft transition-shadow hover:shadow-warm sm:p-8"
            >
              <span
                aria-hidden="true"
                className="chapter-numeral pointer-events-none absolute -bottom-4 right-2 select-none text-[6rem] text-[var(--color-champagne)]/15 sm:text-[7rem]"
              >
                “
              </span>

              <div className="flex items-center gap-1 text-[var(--color-champagne-deep)]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="relative mt-4 font-display text-[1.05rem] leading-[1.45] text-foreground/88 sm:mt-5 sm:text-[1.15rem]">
                {r.text}
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-foreground/55 sm:mt-6 sm:text-[11px]">
                <span className="h-px w-8 bg-[var(--color-champagne)]" />
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FINAL CTA ═══════════════════════════════ */

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-wine-ink)] py-24 text-[var(--color-cream)] sm:py-32">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_50%_40%,color-mix(in_oklab,var(--color-wine)_85%,transparent),transparent_60%),radial-gradient(ellipse_at_50%_120%,color-mix(in_oklab,var(--color-champagne)_18%,transparent),transparent_55%)]" />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Filete duplo de moldura */}
      <div className="pointer-events-none absolute inset-x-4 top-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:top-4" />
      <div className="pointer-events-none absolute inset-x-4 top-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:top-[22px]" />
      <div className="pointer-events-none absolute inset-x-4 bottom-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:bottom-4" />
      <div className="pointer-events-none absolute inset-x-4 bottom-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:bottom-[22px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Fleuron className="mx-auto h-5 w-28 text-[var(--color-champagne)]/80 sm:h-6 sm:w-36" />

        <p className="mt-7 eyebrow text-[10px] text-[var(--color-champagne)] sm:mt-8 sm:text-[10.5px]">Próximo passo</p>

        <h2 className="mt-6 text-balance text-[2.5rem] font-medium leading-[1.04] sm:mt-7 sm:text-6xl lg:text-[4.2rem]">
          Você não precisa
          <span className="block font-serif-italic font-light text-[var(--color-champagne)]">
            passar por isso sozinha.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15.5px] text-[var(--color-cream)]/82 sm:mt-7 sm:text-lg">
          Mande sua situação para uma análise jurídica. Você decide se quer
          prosseguir depois.
        </p>

        <div className="mt-10 flex justify-center sm:mt-11">
          <WhatsappButton origin="final" size="xl" />
        </div>

        <ul className="mt-8 flex flex-col items-center gap-2.5 text-[13.5px] text-[var(--color-cream)]/72 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2.5 sm:text-sm">
          {[
            "Atendimento direto com advogada",
            "Sigilo profissional",
            "Online em todo o Brasil",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Check className="size-4 text-[var(--color-champagne)]" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Asterism className="h-4 w-12 text-[var(--color-champagne)]/65" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.045_18)] text-[var(--color-cream)]/72">
      <div className="mx-auto max-w-6xl px-5 py-16 pb-28 sm:px-8 md:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark tone="cream" />
            <p className="mt-5 max-w-sm text-sm leading-[1.7] text-[var(--color-cream)]/62">
              Direito Trabalhista e Direitos da Mulher. Atendimento online em
              todo o Brasil, com base em jurisprudência consolidada do TST e do
              STF.
            </p>
            <Fleuron className="mt-7 h-4 w-20 text-[var(--color-champagne)]/60" />
          </div>

          <div>
            <h3 className="eyebrow text-[var(--color-champagne)]">Atuação</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-[var(--color-champagne)]">Legal</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="transition hover:text-[var(--color-champagne)]"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos-de-uso"
                  className="transition hover:text-[var(--color-champagne)]"
                >
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-cream)]/10 pt-8">
          <p className="text-xs text-[var(--color-cream)]/55">
            Dra. Alexandra Barp Salgado, OAB/PR 56.903-N · Dra. Jessica Cristina
            Hoff Bueno Garcia, OAB/PR 99.905 · CNPJ 48.808.073/0001-30
          </p>
          <p className="mt-5 max-w-3xl font-serif-italic text-xs leading-[1.7] text-[var(--color-cream)]/50">
            Este conteúdo tem caráter exclusivamente informativo e não constitui
            aconselhamento jurídico. A análise de casos específicos requer
            consulta profissional individualizada. Nenhum resultado jurídico
            pode ser garantido previamente; cada caso é avaliado conforme
            contrato, documentos e jurisprudência aplicável.
          </p>
          <p className="mt-6 text-xs text-[var(--color-cream)]/40">
            © 2026 Barp.Hoff Advogadas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
