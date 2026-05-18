import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsappButton, WhatsappIcon, StickyMobileCTA } from "@/components/whatsapp-button";
import { clickWhatsapp } from "@/lib/whatsapp";
import storyImg from "@/assets/story-gestante.jpg";
import {
  Lock,
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
  Phone,
  Sparkles,
  MessageCircle,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   DADOS
   ═══════════════════════════════════════════════════════════════════ */

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Tenho direito mesmo se descobri a gravidez depois da demissão?",
    a: "Sim. A Súmula 244 do TST e o Tema 497 do STF afirmam que a estabilidade da gestante começa na concepção e independe do conhecimento prévio da empresa ou da própria trabalhadora. Se a concepção ocorreu durante o vínculo, a proteção existe. Para entender o seu caso, fale comigo pelo WhatsApp.",
  },
  {
    q: "Posso anular o meu pedido de demissão se foi feito sem o sindicato?",
    a: "Em muitos casos, sim. O Art. 500 da CLT e os Temas 55 e 134 do TST exigem assistência sindical para validar o pedido de demissão da gestante. Sem essa formalidade, o ato pode ser considerado nulo. Para uma análise do seu caso, fale comigo pelo WhatsApp.",
  },
  {
    q: "A empresa precisava saber da gravidez para eu ter direito?",
    a: "Não. A responsabilidade do empregador é objetiva (Tema 497 do STF). O que importa é se a concepção ocorreu durante o contrato de trabalho. Para entender o seu caso, fale comigo pelo WhatsApp.",
  },
  {
    q: "Quanto tempo demora um processo trabalhista de gestante?",
    a: "Segundo o relatório Justiça em Números 2025 do CNJ, a Justiça do Trabalho leva, em média, 6 meses e 17 dias para julgar processos. Cada caso tem suas particularidades. Para conversar sobre o seu, fale comigo pelo WhatsApp.",
  },
  {
    q: "Funciona online mesmo? Preciso ir até o escritório?",
    a: "Sim, todo o atendimento é online, em todo o Brasil. Você não precisa se deslocar. Documentos, conversas e acompanhamento acontecem pelo WhatsApp e por canais digitais. Para começar, fale comigo pelo WhatsApp.",
  },
  {
    q: "Estava em contrato de experiência. Tenho proteção?",
    a: "Sim. A Súmula 244, item III, do TST garante a estabilidade da gestante mesmo nos contratos por prazo determinado, incluindo os de experiência. O encerramento nessas condições pode ser considerado dispensa obstativa. Para verificar o seu caso, fale comigo pelo WhatsApp.",
  },
  {
    q: "Trabalhava sem carteira assinada. Tem como reconhecer meus direitos?",
    a: "Sim. Mesmo sem registro formal, é possível pedir o reconhecimento do vínculo de emprego e, a partir disso, garantir a estabilidade da gestante e os demais direitos trabalhistas. Para uma avaliação, fale comigo pelo WhatsApp.",
  },
  {
    q: "Já se passaram alguns meses desde a demissão. Ainda dá tempo?",
    a: "O prazo prescricional para ação trabalhista é de até 2 anos após a saída da empresa (Art. 7º, XXIX da Constituição). A viabilidade depende do tempo decorrido e das circunstâncias. Para entender se ainda há tempo no seu caso, fale comigo pelo WhatsApp.",
  },
  {
    q: "A análise da minha situação gera obrigação de contratar?",
    a: "Não. A análise inicial não gera compromisso de prosseguir. Você decide se quer dar continuidade depois de entender as suas opções. Para conversar, fale comigo pelo WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://www.petriaazevedo.com.br/gestante-demitida#service",
      name: "Dra. Pétria Azevedo, Direitos da Gestante Demitida",
      description:
        "Atuação especializada em demissão de gestante, estabilidade provisória, pedido de demissão nulo, contrato de experiência e dispensa discriminatória.",
      url: "https://www.petriaazevedo.com.br/gestante-demitida",
      telephone: "+55-27-3208-2264",
      areaServed: "BR",
      provider: { "@type": "LegalService", name: "Dra. Pétria Azevedo" },
    },
    {
      "@type": "Attorney",
      name: "Dra. Pétria de Azevedo Silva Schaeffer",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        recognizedBy: { "@type": "Organization", name: "OAB/ES" },
        identifier: "23.648",
      },
      knowsAbout: [
        "Direito Trabalhista",
        "Estabilidade Gestante",
        "Direitos da Mulher Trabalhadora",
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

/* ═══════════════════════════════════════════════════════════════════
   ROUTE
   ═══════════════════════════════════════════════════════════════════ */

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fui Demitida Grávida: Quais São os Meus Direitos? | Dra. Pétria Azevedo" },
      {
        name: "description",
        content:
          "A lei protege a gestante mesmo se descobriu a gravidez depois ou pediu demissão sem sindicato. Análise jurídica direta com a Dra. Pétria Azevedo pelo WhatsApp.",
      },
      { name: "theme-color", content: "#5C111A" },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Fui Demitida Grávida: Saiba os Seus Direitos | Dra. Pétria Azevedo" },
      { property: "og:description", content: "A lei está do seu lado. Análise jurídica do seu caso pelo WhatsApp." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.petriaazevedo.com.br/gestante-demitida" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: PetriaPage,
});

function PetriaPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <Header />
      <Hero />
      <TrustBand />
      <Cases />
      <Process />
      <WhatYouReceive />
      <Bridge />
      <About />
      <Story />
      <Reviews />
      <Faq />
      <Prescricao />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════ */

function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SerifI({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        fontStyle: "italic",
        fontWeight: 500,
        letterSpacing: "-0.025em",
        fontOpticalSizing: "auto",
        fontVariationSettings: '"SOFT" 80, "WONK" 1',
      }}
    >
      {children}
    </span>
  );
}

function Display({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: '"Fraunces", ui-serif, Georgia, serif',
        fontWeight: 600,
        letterSpacing: "-0.035em",
        lineHeight: 0.98,
        fontOpticalSizing: "auto",
        fontVariationSettings: '"SOFT" 30, "WONK" 0',
      }}
    >
      {children}
    </span>
  );
}

function Filete({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 14" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="7" x2="50" y2="7" stroke="currentColor" strokeWidth="0.7" />
      <line x1="70" y1="7" x2="120" y2="7" stroke="currentColor" strokeWidth="0.7" />
      <path d="M60 2 L65 7 L60 12 L55 7 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

function Eyebrow({ children, color = "wine", className }: { children: ReactNode; color?: "wine" | "gold" | "cream"; className?: string }) {
  const c =
    color === "gold"
      ? "text-[var(--color-champagne)]"
      : color === "cream"
        ? "text-[var(--color-cream)]/85"
        : "text-[var(--color-bordeaux)]";
  return (
    <span className={`inline-block text-[10.5px] font-semibold uppercase tracking-[0.26em] ${c} ${className ?? ""}`}>
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════════════ */

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-bordeaux)]/10 bg-[var(--color-cream)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/v3" className="flex items-center gap-3" aria-label="Dra. Pétria Azevedo · Azevedo Advocacia">
          <span
            className="grid size-8 place-items-center rounded-full text-[14px] font-semibold ring-1 ring-[var(--color-champagne)]/50"
            style={{
              background: "var(--color-bordeaux)",
              color: "var(--color-champagne)",
              fontFamily: '"Fraunces", ui-serif, Georgia, serif',
            }}
          >
            AV
          </span>
          <span className="flex items-baseline gap-2">
            <span
              className="text-[15px] font-semibold tracking-tight text-[var(--color-bordeaux-deep)] sm:text-base"
              style={{ fontFamily: '"Fraunces", ui-serif, Georgia, serif' }}
            >
              Pétria<span className="mx-1 text-[var(--color-champagne)]">·</span>Azevedo
            </span>
            <span className="hidden text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bordeaux-deep)]/55 sm:inline">
              Advocacia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["#casos", "Casos"],
            ["#processo", "Como funciona"],
            ["#advogada", "Sobre"],
            ["#faq", "Perguntas"],
          ].map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="text-[13px] font-medium text-[var(--color-bordeaux-deep)]/75 transition hover:text-[var(--color-bordeaux)]"
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          type="button"
          data-wa-cta
          onClick={() => clickWhatsapp("v3-header")}
          aria-label="Falar com a Dra. Pétria no WhatsApp"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-bordeaux)] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--color-cream)] transition hover:bg-[var(--color-bordeaux-deep)]"
        >
          <WhatsappIcon className="size-3.5 text-[var(--color-champagne)] sm:hidden" />
          <span className="hidden sm:inline">Falar com a Dra. Pétria</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO — editorial centered, single statement
   ═══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-cream)]">
      {/* Camadas atmosféricas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--color-nude) 80%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 size-[32rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--color-champagne) 35%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-champagne) 50%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 text-center sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <Reveal>
          <Eyebrow>Advocacia para a gestante demitida</Eyebrow>
          <Filete className="mx-auto mt-5 h-3 w-32 text-[var(--color-champagne)]" />

          <h1 className="mx-auto mt-8 max-w-4xl text-balance">
            <Display className="text-[2.6rem] leading-[1.02] text-[var(--color-bordeaux-deep)] sm:text-[3.8rem] lg:text-[5rem]">
              Você foi demitida grávida?
            </Display>
            <span className="mt-2 block">
              <SerifI className="text-[2.6rem] leading-[1.04] text-[var(--color-bordeaux)] sm:text-[3.8rem] lg:text-[5rem]">
                A lei está do seu lado.
              </SerifI>
            </span>
          </h1>

          <div className="mx-auto mt-9 max-w-2xl space-y-3 text-[15.5px] leading-[1.7] text-[var(--color-bordeaux-deep)]/78 sm:text-[1.08rem] sm:leading-[1.72]">
            <p>
              A lei protege você <strong className="text-[var(--color-bordeaux-deep)]">mesmo se a gravidez foi descoberta depois da demissão</strong>.
            </p>
            <p>
              Também em contrato de experiência, sem registro em carteira ou após pedido de demissão sem o sindicato.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsappButton origin="v3-hero" size="xl" label="Falar com a Dra. Pétria agora" />

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11.5px] text-[var(--color-bordeaux-deep)]/65 sm:gap-x-6 sm:text-[12.5px]">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-bordeaux)]/55" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-bordeaux)]" />
                </span>
                <span className="font-semibold uppercase tracking-[0.16em] text-[var(--color-bordeaux-deep)]">
                  Resposta em até 24h
                </span>
              </span>
              <span className="text-[var(--color-bordeaux-deep)]/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3.5" aria-hidden="true" />
                Sigilo profissional
              </span>
              <span className="text-[var(--color-bordeaux-deep)]/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="size-3.5" aria-hidden="true" />
                100% online · Brasil
              </span>
            </div>
          </div>

          {/* Selo Google verificável */}
          <a
            href="https://www.google.com/search?q=Petria+Azevedo+Advocacia"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--color-bordeaux)]/15 bg-white px-5 py-2.5 shadow-soft transition hover:shadow-warm"
          >
            <span className="font-display text-[13px] font-semibold text-[var(--color-bordeaux-deep)]">Google</span>
            <span className="h-3.5 w-px bg-[var(--color-bordeaux)]/15" />
            <span className="flex items-center gap-0.5 text-[var(--color-champagne)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-[var(--color-bordeaux-deep)]">5,0</span>
            <span className="text-[11px] text-[var(--color-bordeaux-deep)]/60">
              · <strong className="font-semibold text-[var(--color-bordeaux-deep)]/80">1.389</strong> avaliações verificadas
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TRUST BAND — pílulas jurídicas + estatísticas
   ═══════════════════════════════════════════════════════════════════ */

function TrustBand() {
  const pills = [
    "Súmula 244 · TST",
    "Tema 497 · STF",
    "Art. 10, II, b · ADCT",
    "Art. 500 · CLT",
    "Temas 55 e 134 · TST",
  ];

  return (
    <section className="relative border-y border-[var(--color-bordeaux)]/10 bg-[color-mix(in_oklab,var(--color-nude)_25%,var(--color-cream))]">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-8">
        <Reveal className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-serif-italic text-[2rem] leading-none text-[var(--color-bordeaux)] sm:text-[2.4rem]">11</span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]/70">
              Anos em Direito<br className="hidden sm:inline" /> Trabalhista
            </span>
            <span className="hidden h-8 w-px bg-[var(--color-bordeaux)]/20 sm:inline-block" />
            <span className="font-serif-italic text-[2rem] leading-none text-[var(--color-bordeaux)] sm:text-[2.4rem]">+2k</span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]/70">
              Mães<br className="hidden sm:inline" /> amparadas
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            <Eyebrow className="w-full sm:w-auto sm:self-center">Fundamentação</Eyebrow>
            {pills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[var(--color-bordeaux)]/12 bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-bordeaux-deep)]"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CASES — 6 cenários + 1 catch-all
   ═══════════════════════════════════════════════════════════════════ */

function Cases() {
  const cards = [
    {
      Icon: Scale,
      t: "Fui demitida sem justa causa durante a gestação",
      d: "A estabilidade é prevista no Art. 10, II, b do ADCT. A demissão pode ser anulada.",
      origin: "v3-card-sem-justa-causa",
    },
    {
      Icon: HeartHandshake,
      t: "Descobri que estava grávida depois da demissão",
      d: "A Súmula 244 do TST e o Tema 497 do STF garantem proteção independente do conhecimento prévio.",
      origin: "v3-card-descobriu-depois",
    },
    {
      Icon: FileSignature,
      t: "Pedi demissão sem saber que estava grávida",
      d: "Sem assistência sindical, o pedido pode ser nulo (Art. 500 CLT, Tema 55 TST).",
      origin: "v3-card-pedi-demissao",
    },
    {
      Icon: Briefcase,
      t: "Fui demitida em contrato de experiência",
      d: "A Súmula 244, III, do TST garante estabilidade também nos contratos por prazo determinado.",
      origin: "v3-card-experiencia",
    },
    {
      Icon: ClipboardList,
      t: "Trabalhava sem carteira assinada",
      d: "Mesmo sem registro, é possível reconhecer o vínculo e garantir os direitos da gestante.",
      origin: "v3-card-sem-registro",
    },
    {
      Icon: Coins,
      t: "Não recebi a indenização da estabilidade gestante",
      d: "A indenização inclui salários do período de proteção, FGTS, multa de 40%, férias e 13º.",
      origin: "v3-card-indenizacao",
    },
  ];

  return (
    <section id="casos" className="scroll-mt-20 bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>I · Áreas de atuação</Eyebrow>
          <h2 className="mt-5">
            <Display className="text-[2.2rem] text-[var(--color-bordeaux-deep)] sm:text-[3rem] lg:text-[3.4rem]">
              Você se identifica com{" "}
            </Display>
            <SerifI className="text-[2.2rem] text-[var(--color-bordeaux)] sm:text-[3rem] lg:text-[3.4rem]">
              alguma dessas situações?
            </SerifI>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-bordeaux-deep)]/70 sm:text-base">
            Cada cenário tem amparo jurídico específico. Toque no que mais se aproxima da sua situação para conversar diretamente comigo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {cards.map(({ Icon, t, d, origin }, i) => (
            <Reveal key={origin} delay={i * 0.05}>
              <button
                type="button"
                data-wa-cta
                onClick={() => clickWhatsapp(origin)}
                aria-label={`${t}. Falar com a Dra. Pétria no WhatsApp.`}
                className="group relative flex h-full w-full flex-col rounded-2xl border border-[var(--color-bordeaux)]/10 bg-white p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-bordeaux)]/35 hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bordeaux)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-bordeaux)]/8 text-[var(--color-bordeaux)] transition-colors group-hover:bg-[var(--color-bordeaux)] group-hover:text-[var(--color-champagne)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif-italic text-2xl text-[var(--color-champagne)]/85">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.1rem] font-semibold leading-snug text-[var(--color-bordeaux-deep)] sm:text-[1.2rem]">
                  {t}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-[var(--color-bordeaux-deep)]/68 sm:text-[14.5px]">{d}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-bordeaux)]">
                  Falar sobre isso
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}

          {/* 7º card: catch-all */}
          <Reveal delay={6 * 0.05}>
            <button
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp("v3-card-outro")}
              aria-label="Minha situação é diferente. Falar com a Dra. Pétria no WhatsApp."
              className="group relative flex h-full w-full flex-col rounded-2xl border-2 border-dashed border-[var(--color-bordeaux)]/30 bg-transparent p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-bordeaux)]/60 hover:bg-white hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bordeaux)] sm:p-7 lg:col-span-3"
            >
              <div className="flex items-center gap-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-champagne)]/15 text-[var(--color-bordeaux)] ring-1 ring-[var(--color-champagne)]/40">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-[1.05rem] font-semibold leading-snug text-[var(--color-bordeaux-deep)] sm:text-[1.15rem]">
                    Meu caso é diferente desses
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-[1.5] text-[var(--color-bordeaux-deep)]/68 sm:text-sm">
                    Cada situação tem nuances. Converse para uma análise direta do seu caso.
                  </p>
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-bordeaux)] sm:inline-flex">
                  Conversar
                  <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROCESS — 3 passos
   ═══════════════════════════════════════════════════════════════════ */

function Process() {
  const steps = [
    {
      n: "01",
      title: "Você envia a sua situação",
      desc: "Pelo WhatsApp, você manda o que tem: carteira de trabalho, comprovante de gravidez, aviso de demissão. Se faltar algo, envia o que tiver.",
    },
    {
      n: "02",
      title: "Eu analiso o seu caso",
      desc: "Avalio sua situação à luz da Súmula 244 do TST, do Art. 500 da CLT e do Tema 497 do STF.",
    },
    {
      n: "03",
      title: "Você recebe a orientação completa",
      desc: "Explico o cenário, os direitos aplicáveis e os próximos passos possíveis. Você decide depois se quer prosseguir.",
    },
  ];

  return (
    <section id="processo" className="relative scroll-mt-20 overflow-hidden bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>II · Como funciona</Eyebrow>
          <h2 className="mt-5">
            <Display className="text-[2.2rem] text-[var(--color-bordeaux-deep)] sm:text-[3rem] lg:text-[3.4rem]">
              Três passos.{" "}
            </Display>
            <SerifI className="text-[2.2rem] text-[var(--color-bordeaux)] sm:text-[3rem] lg:text-[3.4rem]">
              Sem juridiquês.
            </SerifI>
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-bordeaux)]/10 bg-white p-7 shadow-soft transition-shadow hover:shadow-warm">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-serif-italic text-[7rem] leading-none text-[var(--color-bordeaux)]/[0.06]"
                >
                  {s.n}
                </span>
                <div className="relative flex items-center gap-3">
                  <span className="inline-grid size-10 place-items-center rounded-full bg-[var(--color-bordeaux)] font-serif-italic text-lg text-[var(--color-champagne)]">
                    {s.n}
                  </span>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]/65">
                    Passo {i + 1}
                  </span>
                </div>
                <h3 className="relative mt-5 text-[1.2rem] font-semibold leading-snug text-[var(--color-bordeaux-deep)] sm:text-[1.3rem]">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-[14.5px] leading-[1.65] text-[var(--color-bordeaux-deep)]/72 sm:text-[15px]">
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WHAT YOU RECEIVE — expectativa clara da primeira conversa
   ═══════════════════════════════════════════════════════════════════ */

function WhatYouReceive() {
  const items = [
    "Identificação dos direitos aplicáveis ao seu caso específico",
    "Explicação clara dos próximos passos possíveis",
    "Estimativa de prazos e dos documentos necessários",
  ];

  return (
    <section className="bg-[var(--color-cream)] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="grid items-start gap-8 rounded-3xl border border-[var(--color-bordeaux)]/12 bg-white p-7 shadow-soft sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10">
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-[var(--color-bordeaux)]/8 text-[var(--color-bordeaux)]">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <Eyebrow>O que você recebe</Eyebrow>
            </div>
            <div>
              <h3 className="font-display">
                <Display className="text-[1.6rem] text-[var(--color-bordeaux-deep)] sm:text-[2rem]">
                  Na primeira conversa, sem custo de orientação,
                </Display>{" "}
                <SerifI className="text-[1.6rem] text-[var(--color-bordeaux)] sm:text-[2rem]">
                  você sai sabendo:
                </SerifI>
              </h3>
              <ul className="mt-6 space-y-3">
                {items.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-[var(--color-bordeaux-deep)]/85 sm:text-[15.5px]">
                    <Check className="mt-1 size-4 shrink-0 text-[var(--color-champagne-deep,var(--color-bordeaux))]" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] italic leading-[1.55] text-[var(--color-bordeaux-deep)]/55">
                A conversa não gera compromisso de contratação. Você decide depois.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BRIDGE — manifesto + timeline
   ═══════════════════════════════════════════════════════════════════ */

function Bridge() {
  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>III · A lei está do seu lado</Eyebrow>
          <Filete className="mx-auto mt-5 h-3 w-28 text-[var(--color-champagne)]" />
          <p className="mt-7 text-pretty text-[1.05rem] leading-[1.72] text-[var(--color-bordeaux-deep)]/82 sm:text-[1.2rem] sm:leading-[1.7]">
            Quando uma gestante é demitida sem justa causa,{" "}
            <SerifI className="text-[var(--color-bordeaux)]">mesmo que a gravidez tenha sido descoberta depois</SerifI>, a lei brasileira protege. Atuo há mais de{" "}
            <strong className="text-[var(--color-bordeaux-deep)]">11 anos</strong> com base na{" "}
            <strong className="text-[var(--color-bordeaux-deep)]">Súmula 244 do TST</strong>, no{" "}
            <strong className="text-[var(--color-bordeaux-deep)]">Tema 497 do STF</strong> e no{" "}
            <strong className="text-[var(--color-bordeaux-deep)]">Art. 10, II, b do ADCT</strong>.
          </p>
        </Reveal>

        <Reveal className="mt-14 sm:mt-16">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
            {[
              {
                step: "01",
                title: "Concepção",
                desc: "A estabilidade começa aqui, mesmo sem você ou a empresa saberem ainda.",
              },
              {
                step: "02",
                title: "Demissão",
                desc: "Ainda que ocorra antes da descoberta, a demissão pode ser considerada nula.",
              },
              {
                step: "03",
                title: "Estabilidade",
                desc: "Reintegração ou indenização do período: salários, FGTS, 13º, férias.",
              },
            ].map((s, i, arr) => (
              <div key={s.step} className="relative">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-[var(--color-bordeaux)]/12 bg-white p-6 shadow-soft sm:flex-col sm:gap-0 sm:p-7">
                  <span className="font-serif-italic text-4xl leading-none text-[var(--color-champagne)] sm:text-5xl">
                    {s.step}
                  </span>
                  <div className="flex-1 sm:mt-5">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux)]">
                      {s.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-bordeaux-deep)]/72 sm:text-[14.5px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-3 -translate-y-1/2 translate-x-1/2 bg-[var(--color-champagne)] sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT — foto + bio + diferenciais
   ═══════════════════════════════════════════════════════════════════ */

function About() {
  const bullets = [
    "Mais de 11 anos especializada em Direito Trabalhista da Mulher",
    "Atendimento exclusivamente online, com clientes em todo o Brasil",
    "Foco em gestante, mulher trabalhadora e dispensa discriminatória",
    "Acompanhamento direto e pessoal, sem intermediários",
  ];

  return (
    <section
      id="advogada"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--color-bordeaux-deep)] py-20 text-[var(--color-cream)] sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, var(--color-champagne), transparent 55%), radial-gradient(ellipse at 10% 90%, var(--color-bordeaux), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Foto */}
          <Reveal>
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-3 -top-3 hidden h-16 w-16 border-l border-t border-[var(--color-champagne)]/60 lg:block"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-3 -right-3 hidden h-16 w-16 border-b border-r border-[var(--color-champagne)]/60 lg:block"
              />
              <figure className="relative overflow-hidden rounded-[3px] shadow-warm aspect-[4/5]">
                <img
                  src={storyImg}
                  alt="Dra. Pétria Azevedo"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ filter: "saturate(0.85) contrast(1.04)" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(155deg, color-mix(in oklab, var(--color-bordeaux-deep) 32%, transparent), transparent 45%)",
                  }}
                />
              </figure>
              <p className="mt-4 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-champagne)]/80">
                Atendimento online · Brasil
              </p>
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={0.1}>
            <Eyebrow color="gold">IV · A advogada</Eyebrow>
            <h2 className="mt-5">
              <Display className="text-[2.2rem] text-[var(--color-cream)] sm:text-[3rem] lg:text-[3.4rem]">
                Conheça{" "}
              </Display>
              <SerifI className="text-[2.2rem] text-[var(--color-champagne)] sm:text-[3rem] lg:text-[3.4rem]">
                Dra. Pétria Azevedo
              </SerifI>
            </h2>

            <p className="mt-6 max-w-xl text-[15.5px] leading-[1.75] text-[var(--color-cream)]/82 sm:text-[1.05rem]">
              Meu trabalho é voltado à defesa de mulheres que enfrentam situações relacionadas à gestação no ambiente de trabalho. Atuo em casos de demissão durante a gravidez, descoberta da gestação após o desligamento, ausência de registro em carteira e outras situações que envolvem a proteção dos direitos da trabalhadora.
            </p>

            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.75] text-[var(--color-cream)]/82 sm:text-[1.05rem]">
              <SerifI className="text-[var(--color-champagne)]">Sei que esses momentos geram insegurança e dúvidas.</SerifI>{" "}
              Por isso ofereço uma orientação clara, acessível e direcionada a cada caso.
            </p>

            {/* Credenciais */}
            <div className="mt-8 border-l border-[var(--color-champagne)]/45 pl-5">
              <p className="font-display text-[18px] font-semibold leading-tight text-[var(--color-cream)] sm:text-xl">
                Dra. Pétria de Azevedo Silva Schaeffer
              </p>
              <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
                OAB/ES 23.648
              </p>
            </div>

            {/* Bullets */}
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/[0.04] p-4 backdrop-blur"
                >
                  <span className="font-serif-italic text-xl leading-none text-[var(--color-champagne)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.55] text-[var(--color-cream)]/90 sm:text-[14.5px]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <WhatsappButton origin="v3-about" label="Falar com a Dra. Pétria agora" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STORY — por que muitas desistem
   ═══════════════════════════════════════════════════════════════════ */

function Story() {
  return (
    <section className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>V · Contexto</Eyebrow>
          <h2 className="mt-5">
            <Display className="text-[2.2rem] text-[var(--color-bordeaux-deep)] sm:text-[3rem]">
              Por que muitas gestantes{" "}
            </Display>
            <SerifI className="text-[2.2rem] text-[var(--color-bordeaux)] sm:text-[3rem]">
              não buscam justiça
            </SerifI>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-[15.5px] leading-[1.75] text-[var(--color-bordeaux-deep)]/80 sm:text-[1.05rem]">
              <p>
                Muitas gestantes deixam de buscar os seus direitos por medo, vergonha ou desinformação. Acreditam que processar a empresa é demorado, que precisam de muitas provas, ou que perderam o direito porque pediram demissão ou porque descobriram a gravidez depois.
              </p>
              <p>
                Mas a realidade é diferente do que parece. A Justiça do Trabalho hoje resolve casos de gestante em média em{" "}
                <strong className="text-[var(--color-bordeaux)]">6 meses e 17 dias</strong>{" "}
                <span className="text-[var(--color-bordeaux-deep)]/55">(Justiça em Números 2025, CNJ)</span>. E a jurisprudência brasileira protege a gestante mesmo nas situações mais difíceis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--color-bordeaux)]/15 bg-white p-6 shadow-soft sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-bordeaux)]/10 text-[var(--color-bordeaux)]">
                  <AlertTriangle className="size-4" aria-hidden="true" />
                </span>
                <h3 className="text-[1.05rem] font-semibold text-[var(--color-bordeaux-deep)] sm:text-[1.1rem]">
                  Erros mais comuns após a demissão
                </h3>
              </div>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Aceitar a situação sem questionar.",
                  "Assinar pedido de demissão sob pressão, sem assistência sindical.",
                  "Esperar muito tempo — existe prazo prescricional.",
                  "Procurar orientação sem clareza, por desespero.",
                ].map((t, i) => (
                  <li key={t} className="flex items-baseline gap-3 text-[14px] leading-[1.55] text-[var(--color-bordeaux-deep)]/82 sm:text-[14.5px]">
                    <span className="font-serif-italic text-sm text-[var(--color-bordeaux)]">{String(i + 1).padStart(2, "0")}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   REVIEWS — depoimentos reais
   ═══════════════════════════════════════════════════════════════════ */

function Reviews() {
  const reviews = [
    {
      t: "Honestamente não imaginava ser tão rápido e ter toda a rede de apoio que tive. Obrigada demais à Pétria e às outras funcionárias.",
      a: "M. S.",
      c: "Cliente verificada · ES",
    },
    {
      t: "Obrigada por todo carinho, por toda paciência, por sempre me explicar tudo com calma. Vocês são maravilhosas, super recomendo.",
      a: "C. R.",
      c: "Cliente verificada · ES",
    },
    {
      t: "Foi um ótimo atendimento, ela é bem caprichosa em cada detalhe. Muito obrigada por fazer parte desse momento comigo.",
      a: "J. A.",
      c: "Cliente verificada · ES",
    },
    {
      t: "Maravilhoso! Iniciei meu processo em dezembro e em março já consegui um acordo com a empresa! Passei por muita coisa e finalmente sinto que houve justiça.",
      a: "L. F.",
      c: "Cliente verificada · ES",
    },
  ];

  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>VI · Avaliações</Eyebrow>

          <a
            href="https://www.google.com/search?q=Petria+Azevedo+Advocacia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bordeaux)]/15 bg-white px-5 py-2.5 shadow-soft transition hover:shadow-warm"
          >
            <span className="text-[13px] font-semibold text-[var(--color-bordeaux-deep)]">Google</span>
            <span className="h-3.5 w-px bg-[var(--color-bordeaux)]/15" />
            <span className="flex items-center gap-0.5 text-[var(--color-champagne)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-[var(--color-bordeaux-deep)]">5,0</span>
            <span className="text-[11.5px] text-[var(--color-bordeaux-deep)]/65">
              · <strong className="font-semibold text-[var(--color-bordeaux-deep)]/85">1.389</strong> avaliações
            </span>
          </a>

          <h2>
            <Display className="text-[2.2rem] text-[var(--color-bordeaux-deep)] sm:text-[3rem]">
              O que clientes{" "}
            </Display>
            <SerifI className="text-[2.2rem] text-[var(--color-bordeaux)] sm:text-[3rem]">
              dizem do atendimento
            </SerifI>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <figure className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-bordeaux)]/12 bg-white p-7 shadow-soft transition-shadow hover:shadow-warm sm:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-serif-italic text-[8rem] leading-none text-[var(--color-champagne)]/22"
                >
                  &ldquo;
                </span>
                <div className="relative flex gap-0.5 text-[var(--color-champagne)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="relative mt-4 text-[15px] leading-[1.55] text-[var(--color-bordeaux-deep)]/88 sm:text-[1.05rem]">
                  {r.t}
                </blockquote>
                <figcaption className="relative mt-5 flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em]">
                  <span className="h-px w-7 bg-[var(--color-champagne)]" />
                  <span className="text-[var(--color-bordeaux-deep)]">{r.a}</span>
                  <span className="text-[var(--color-bordeaux-deep)]/45">{r.c}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════════ */

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow>VII · FAQ</Eyebrow>
          <h2 className="mt-5">
            <Display className="text-[2.2rem] text-[var(--color-bordeaux-deep)] sm:text-[2.8rem]">
              Perguntas{" "}
            </Display>
            <SerifI className="text-[2.2rem] text-[var(--color-bordeaux)] sm:text-[2.8rem]">
              frequentes
            </SerifI>
          </h2>
          <p className="mt-4 text-[14.5px] text-[var(--color-bordeaux-deep)]/65 sm:text-base">
            Respostas baseadas em jurisprudência atualizada do TST e do STF.
          </p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mt-10 space-y-2.5 sm:space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-[var(--color-bordeaux)]/12 bg-white px-5 shadow-soft transition-shadow hover:shadow-warm sm:px-6"
              >
                <AccordionTrigger className="gap-3 py-5 text-left hover:no-underline [&>svg]:text-[var(--color-bordeaux)]">
                  <span className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-serif-italic text-base text-[var(--color-champagne)] sm:text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-[var(--color-bordeaux-deep)] sm:text-[17px]">
                      {item.q}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-[14.5px] leading-[1.7] text-[var(--color-bordeaux-deep)]/75 sm:pl-10 sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <WhatsappButton origin="v3-faq" label="Falar com a Dra. Pétria agora" />
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PRESCRIÇÃO — urgência ética
   ═══════════════════════════════════════════════════════════════════ */

function Prescricao() {
  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-12 sm:py-14">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-bordeaux)]/15 bg-white p-6 shadow-soft sm:items-center sm:p-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-bordeaux)] text-[var(--color-champagne)]">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <Eyebrow>Atenção ao prazo</Eyebrow>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--color-bordeaux-deep)]/85 sm:text-[15.5px]">
                Você tem{" "}
                <strong className="text-[var(--color-bordeaux-deep)]">até 2 anos após a saída da empresa</strong> para ingressar com ação trabalhista (Art. 7º, XXIX da Constituição). Quanto antes a análise, mais fácil reunir provas e documentos relevantes para o seu caso.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FINAL CTA — fechamento emocional
   ═══════════════════════════════════════════════════════════════════ */

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-bordeaux-deep)] py-24 text-[var(--color-cream)] sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--color-champagne) 14%, transparent), transparent 55%), radial-gradient(ellipse at 50% 120%, color-mix(in oklab, var(--color-bordeaux) 80%, transparent), transparent 55%)",
        }}
      />
      {/* Moldura filete duplo */}
      <div className="pointer-events-none absolute inset-x-4 top-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:top-4" />
      <div className="pointer-events-none absolute inset-x-4 top-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:top-[22px]" />
      <div className="pointer-events-none absolute inset-x-4 bottom-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:bottom-4" />
      <div className="pointer-events-none absolute inset-x-4 bottom-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:bottom-[22px]" />

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Filete className="mx-auto h-3 w-32 text-[var(--color-champagne)]/80" />
        <Eyebrow color="gold" className="mt-7">Próximo passo</Eyebrow>

        <h2 className="mt-6">
          <Display className="text-[2.4rem] text-[var(--color-cream)] sm:text-5xl lg:text-[3.8rem]">
            Você não precisa{" "}
          </Display>
          <SerifI className="text-[2.4rem] text-[var(--color-champagne)] sm:text-5xl lg:text-[3.8rem]">
            passar por isso sozinha.
          </SerifI>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15.5px] leading-[1.7] text-[var(--color-cream)]/82 sm:text-lg">
          Mande sua situação para uma análise jurídica direta comigo. Você decide depois se quer prosseguir.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsappButton origin="v3-final" size="xl" />
        </div>

        <ul className="mt-8 flex flex-col items-center gap-2.5 text-[13.5px] text-[var(--color-cream)]/72 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2 sm:text-sm">
          {[
            "Toda mensagem recebe retorno em até 24h úteis",
            "Sigilo profissional",
            "Online em todo o Brasil",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Check className="size-4 text-[var(--color-champagne)]" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.04_18)] text-[var(--color-cream)]/72">
      <div className="mx-auto max-w-6xl px-5 py-14 pb-28 sm:px-8 md:pb-14">
        {/* Wordmark + contato */}
        <div className="mb-12 flex flex-col items-start gap-4 border-b border-[var(--color-cream)]/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="grid size-9 place-items-center rounded-full font-semibold text-[var(--color-champagne)] ring-1 ring-[var(--color-champagne)]/50"
              style={{
                background: "color-mix(in oklab, var(--color-bordeaux) 80%, transparent)",
                fontFamily: '"Fraunces", ui-serif, Georgia, serif',
                fontSize: 15,
              }}
            >
              AV
            </span>
            <span
              className="text-[17px] font-semibold tracking-tight text-[var(--color-cream)]"
              style={{ fontFamily: '"Fraunces", ui-serif, Georgia, serif' }}
            >
              Pétria<span className="mx-1 text-[var(--color-champagne)]">·</span>Azevedo
            </span>
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[var(--color-cream)]/55">
              Advocacia
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            <a href="tel:+552732082264" className="inline-flex items-center gap-2 transition hover:text-[var(--color-champagne)]">
              <Phone className="size-3.5 text-[var(--color-champagne)]" aria-hidden="true" />
              (27) 3208-2264
            </a>
            <a href="mailto:contato@petriaazevedo.com.br" className="transition hover:text-[var(--color-champagne)]">
              contato@petriaazevedo.com.br
            </a>
            <a
              href="https://instagram.com/petriaazevedo"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--color-champagne)]"
            >
              @petriaazevedo
            </a>
          </div>
        </div>

        {/* Colunas */}
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Eyebrow color="gold">O escritório</Eyebrow>
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.7] text-[var(--color-cream)]/65">
              Direito Trabalhista e Direitos da Mulher. Atendimento online em todo o Brasil, com base em jurisprudência consolidada do TST e do STF.
            </p>
          </div>
          <div>
            <Eyebrow color="gold">Atuação</Eyebrow>
            <ul className="mt-4 space-y-2 text-[13.5px]">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>
          <div>
            <Eyebrow color="gold">Legal</Eyebrow>
            <ul className="mt-4 space-y-2 text-[13.5px]">
              <li>
                <a href="/politica-de-privacidade" className="transition hover:text-[var(--color-champagne)]">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="transition hover:text-[var(--color-champagne)]">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha institucional */}
        <div className="mt-12 border-t border-[var(--color-cream)]/10 pt-8">
          <p className="text-[12px] text-[var(--color-cream)]/60">
            Dra. Pétria Azevedo · OAB/ES 23.648 · CNPJ 60.441.824/0001-29
          </p>
          <p
            className="mt-5 max-w-3xl text-[12px] italic leading-[1.7] text-[var(--color-cream)]/50"
            style={{ fontFamily: '"Fraunces", ui-serif, Georgia, serif' }}
          >
            As informações contidas nesta página possuem caráter exclusivamente informativo e não substituem a análise individual de cada caso. A atuação jurídica depende das particularidades de cada situação concreta. Este conteúdo observa as diretrizes do Código de Ética e Disciplina da OAB.
          </p>
          <p className="mt-6 text-[11.5px] text-[var(--color-cream)]/40">
            © 2026 Pétria Azevedo Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
