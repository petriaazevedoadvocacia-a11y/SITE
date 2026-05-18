import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsappButton, StickyMobileCTA } from "@/components/whatsapp-button";
import { clickWhatsapp } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-gestante.jpg";
import petriaPortrait from "@/assets/petria-portrait.jpg";
import logoSymbol from "@/assets/azevedo-symbol.png";
import logoFull from "@/assets/azevedo-logo.png";

/* Fade-up suave on-scroll. Respeita prefers-reduced-motion. */
function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
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
  BadgeCheck,
  Phone,
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
      "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service",
      name: "Dra. Pétria Azevedo · Direitos da Gestante Demitida",
      description:
        "Atuação especializada em demissão de gestante, estabilidade provisória, pedido de demissão nulo, contrato de experiência e dispensa discriminatória.",
      url: "https://www.petriaazevedoadvocacia.com.br/gestante-demitida",
      telephone: "+55-27-3208-2264",
      email: "contato@petriaazevedo.com.br",
      areaServed: { "@type": "Country", name: "Brasil" },
      provider: { "@id": "https://www.petriaazevedoadvocacia.com.br/#attorney" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "1389",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Attorney",
      "@id": "https://www.petriaazevedoadvocacia.com.br/#attorney",
      name: "Dra. Pétria de Azevedo Silva Schaeffer",
      alternateName: "Dra. Pétria Azevedo",
      url: "https://www.petriaazevedoadvocacia.com.br",
      telephone: "+55-27-3208-2264",
      email: "contato@petriaazevedo.com.br",
      sameAs: ["https://instagram.com/petriaazevedo"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil — Espírito Santo" },
        identifier: "OAB/ES 23.648",
      },
      knowsAbout: [
        "Direito Trabalhista da Mulher",
        "Estabilidade da Gestante",
        "Súmula 244 do TST",
        "Tema 497 do STF",
        "Art. 10, II, b do ADCT",
        "Art. 500 da CLT",
        "Pedido de Demissão Nulo",
        "Contrato de Experiência da Gestante",
        "Dispensa Discriminatória",
        "Reconhecimento de Vínculo Empregatício",
      ],
      knowsLanguage: ["pt-BR"],
      worksFor: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
    },
    {
      "@type": "AggregateRating",
      "@id": "https://www.petriaazevedoadvocacia.com.br/#rating",
      itemReviewed: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
      ratingValue: "5.0",
      reviewCount: "1389",
      bestRating: "5",
      worstRating: "1",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "M. S." },
      itemReviewed: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Honestamente não imaginava ser tão rápido e ter toda a rede de apoio que tive. Obrigada demais à Pétria e às outras funcionárias.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "C. R." },
      itemReviewed: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Obrigada por todo carinho, por toda paciência, por sempre me explicar tudo com calma. Vocês são maravilhosas, super recomendo.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "J. A." },
      itemReviewed: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Foi um ótimo atendimento, ela é bem caprichosa em cada detalhe. Muito obrigada por fazer parte desse momento comigo.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "L. F." },
      itemReviewed: { "@id": "https://www.petriaazevedoadvocacia.com.br/gestante-demitida#service" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Maravilhoso! Iniciei meu processo em dezembro e em março já consegui um acordo. Passei por muita coisa e finalmente sinto que houve justiça.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://www.petriaazevedoadvocacia.com.br/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Direitos da Gestante Demitida",
          item: "https://www.petriaazevedoadvocacia.com.br/gestante-demitida",
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
      {
        title:
          "Fui Demitida Grávida: Quais São os Meus Direitos? | Dra. Pétria Azevedo",
      },
      {
        name: "description",
        content:
          "A demissão de gestante geralmente é ilegal, mesmo se a gravidez foi descoberta depois ou houve pedido de demissão. Análise jurídica pelo WhatsApp.",
      },
      { name: "theme-color", content: "#1F3329" },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Fui Demitida Grávida: Saiba os Seus Direitos | Dra. Pétria Azevedo",
      },
      {
        property: "og:description",
        content:
          "A lei protege a gestante demitida. Análise jurídica do seu caso pelo WhatsApp.",
      },
      {
        property: "og:url",
        content: "https://www.petriaazevedoadvocacia.com.br/gestante-demitida",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.petriaazevedoadvocacia.com.br/gestante-demitida",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap",
      },
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-V1HCE19K22",
      },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-V1HCE19K22');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: GestantePage,
});

export function GestantePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <Bridge />
      <IdentifyCards />
      <HowItWorks />
      <Storytelling />
      <Authority />
      <Faq />
      <Reviews />
      <Prescricao />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

/* ----------------------------- BOTANICAL ----------------------------- */
/* Line-art de ramo de eucalipto, usado como textura de baixíssima opacidade */
function Botanical({ className }: { className?: string }) {
  const leaves = [28, 56, 86, 116, 146];
  return (
    <svg viewBox="0 0 150 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M75 4 C 70 48, 80 110, 74 198"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {leaves.map((y, i) =>
        [-1, 1].map((side) => {
          const r = 21 - i * 1.6;
          const cx = 74 + side * (r * 0.9);
          return (
            <ellipse
              key={`${y}-${side}`}
              cx={cx}
              cy={y}
              rx={r}
              ry={r * 0.42}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${side * 34} ${cx} ${y})`}
            />
          );
        })
      )}
      <circle cx="75" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}

/* ----------------------------- TOP BAR ----------------------------- */

function TopBar() {
  return (
    <div className="hidden md:block border-b border-[var(--color-bordeaux)]/10 bg-[var(--color-cream)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-xs">
        <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]">
          <img src={logoSymbol} alt="Azevedo Advocacia" width={28} height={28} className="size-7 shrink-0" />
          Pétria<span className="text-[var(--color-champagne)]">·</span>Azevedo
          <span className="ml-1 hidden font-normal normal-case tracking-normal text-[var(--color-bordeaux-deep)]/60 lg:inline">Advogada · OAB</span>
        </div>
        <div className="flex items-center gap-6 text-[var(--color-bordeaux-deep)]/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-[var(--color-bordeaux)]" /> Sigilo absoluto</span>
          <span className="inline-flex items-center gap-1.5"><Globe2 className="size-3.5 text-[var(--color-bordeaux)]" /> Atendimento nacional</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-bordeaux-deep)]"><Phone className="size-3.5 text-[var(--color-bordeaux)]" /> +55 (27) 3208-2264</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */

function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}

/* --- MOBILE HERO (independente do desktop) --- */
function MobileHero() {
  return (
    <section className="relative lg:hidden">
      {/* TOP: imagem como fundo dramático com overlay bordô */}
      <div className="relative overflow-hidden bg-[var(--color-bordeaux-deep)] text-[var(--color-cream)]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--color-bordeaux)] via-[var(--color-champagne)] to-[var(--color-bordeaux)] z-10" />
        <img
          src={heroImg}
          alt="Mãos sobre documento jurídico, atmosfera acolhedora"
          width={900}
          height={1200}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[var(--color-bordeaux-deep)]/55 via-[var(--color-bordeaux-deep)]/75 to-[var(--color-bordeaux-deep)]" />
        <div aria-hidden className="texture-paper-layer is-dark pointer-events-none absolute inset-0" />

        <div className="relative px-5 pb-10 pt-8">
          {/* mini brand */}
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)]/85">
            <span className="inline-flex items-center gap-2">
              <img src={logoSymbol} alt="Azevedo Advocacia" width={24} height={24} className="size-6 shrink-0" />
              Pétria<span className="text-[var(--color-champagne)]">·</span>Azevedo
            </span>
            <a href="tel:+552732082264" className="inline-flex items-center gap-1.5 text-[var(--color-cream)]/80">
              <Phone className="size-3" /> (27) 3208-2264
            </a>
          </div>

          {/* badge */}
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-champagne)]/40 bg-[var(--color-champagne)]/10 px-3 py-1 backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-champagne)]/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-champagne)]" />
            </span>
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
              Direitos da gestante
            </span>
          </div>

          {/* H1 */}
          <h1 className="mt-5 text-balance text-[2.15rem] leading-[1.05]">
            Você foi demitida grávida?
            <span className="mt-1 block font-serif-italic text-[var(--color-champagne)]">
              A lei está
            </span>
            <span className="relative inline-block">
              do seu lado.
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1.5 left-0 h-2.5 w-full text-[var(--color-champagne)]" preserveAspectRatio="none">
                <path d="M2 8 C 60 2, 140 12, 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-pretty text-[15px] leading-relaxed text-[var(--color-cream)]/85">
            A lei protege você <strong className="text-[var(--color-cream)]">mesmo se descobriu a gravidez depois da demissão</strong>, estava em contrato de experiência, trabalhava sem registro, ou pediu demissão sem o sindicato.
          </p>

          {/* CTA */}
          <div className="mt-7">
            <WhatsappButton origin="hero-mobile" size="lg" fullWidth label="Falar com a Dra. Pétria agora" />
            <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] text-[var(--color-cream)]/70">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-champagne)]/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-champagne)]" />
                </span>
                <span className="font-semibold uppercase tracking-[0.16em] text-[var(--color-champagne)]">Resposta em até 24h</span>
              </span>
              <span className="text-[var(--color-cream)]/40">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3" /> Sigiloso · 100% online
              </span>
            </div>
          </div>

          {/* social proof refinada */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--color-champagne)]/20 bg-[var(--color-cream)]/[0.07] p-3.5 backdrop-blur">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-champagne)]/15 text-[var(--color-champagne)] ring-1 ring-[var(--color-champagne)]/35">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-[var(--color-champagne)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-champagne)]">5,0 · Google</span>
              </div>
              <p className="mt-0.5 text-[12px] font-medium leading-tight text-[var(--color-cream)]/85">
                <span className="font-serif-italic text-[var(--color-champagne)]">+2.000</span> mães amparadas em 11 anos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: pilares de autoridade em creme */}
      <div className="bg-[var(--color-cream)] px-5 py-7">
        <ul className="grid grid-cols-3 gap-3 text-center">
          <li className="rounded-xl border border-[var(--color-bordeaux)]/10 bg-white p-3 shadow-soft">
            <p className="font-serif-italic text-2xl text-[var(--color-bordeaux)]">11</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bordeaux-deep)]/70 leading-tight">Anos<br/>de causa</p>
          </li>
          <li className="rounded-xl border border-[var(--color-bordeaux)]/10 bg-white p-3 shadow-soft">
            <p className="font-serif-italic text-2xl text-[var(--color-bordeaux)]">100%</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bordeaux-deep)]/70 leading-tight">Direito<br/>da Mulher</p>
          </li>
          <li className="rounded-xl border border-[var(--color-bordeaux)]/10 bg-white p-3 shadow-soft">
            <p className="font-serif-italic text-2xl text-[var(--color-bordeaux)]">24h</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bordeaux-deep)]/70 leading-tight">Resposta<br/>WhatsApp</p>
          </li>
        </ul>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[var(--color-bordeaux)]/10 bg-white p-4 shadow-soft">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-nude)] text-[var(--color-bordeaux-deep)]">
            <BadgeCheck className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">Amparo legal</p>
            <p className="mt-0.5 text-[13px] font-medium leading-snug text-[var(--color-bordeaux-deep)]">
              Súmula 244 TST · Tema 497 STF · Art. 10 do ADCT
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-bordeaux-deep)]/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3 text-[var(--color-bordeaux)]" /> OAB Ativa</span>
          <span className="inline-flex items-center gap-1.5"><Scale className="size-3 text-[var(--color-bordeaux)]" /> TST · STF · TRTs</span>
          <span className="inline-flex items-center gap-1.5"><Globe2 className="size-3 text-[var(--color-bordeaux)]" /> 100% Online</span>
          <span className="inline-flex items-center gap-1.5"><Lock className="size-3 text-[var(--color-bordeaux)]" /> Sigilo absoluto</span>
        </div>
      </div>
    </section>
  );
}

/* --- DESKTOP HERO --- */
function DesktopHero() {
  return (
    <section className="relative hidden overflow-hidden bg-[var(--color-cream)] text-[var(--color-bordeaux-deep)] lg:block">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-[var(--color-nude)] opacity-50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 -left-24 size-[28rem] rounded-full bg-[var(--color-champagne)]/40 opacity-60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--color-bordeaux)] via-[var(--color-champagne)] to-[var(--color-bordeaux)]" />
      <div aria-hidden className="texture-paper-layer pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-champagne)] bg-white/70 px-4 py-1.5 shadow-soft backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-bordeaux)]/50" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--color-bordeaux)]" />
            </span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]">
              Especialista em Direitos da Gestante
            </span>
          </div>

          <h1 className="mt-7 text-balance text-[3.4rem] leading-[1.02] lg:text-[4rem]">
            Você foi demitida grávida?{" "}
            <span className="block font-serif-italic text-[var(--color-bordeaux)]">
              A lei está
            </span>
            <span className="relative inline-block">
              do seu lado.
              <svg aria-hidden viewBox="0 0 300 14" className="absolute -bottom-2 left-0 h-3 w-full text-[var(--color-champagne)]" preserveAspectRatio="none">
                <path d="M2 9 C 80 2, 180 14, 298 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[var(--color-bordeaux-deep)]/75">
            A lei protege você <strong className="text-[var(--color-bordeaux-deep)]">mesmo se descobriu a gravidez depois da demissão</strong>, estava em contrato de experiência, trabalhava sem registro, ou pediu demissão sem o sindicato. Receba uma análise jurídica do seu caso pelo WhatsApp.
          </p>

          <div className="mt-9 flex flex-row items-center gap-5">
            <WhatsappButton origin="hero" size="xl" label="Falar com a Dra. Pétria agora" />
            <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-bordeaux)]/12 bg-white/60 px-4 py-2.5 shadow-soft backdrop-blur">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-champagne)]/20 text-[var(--color-bordeaux)] ring-1 ring-[var(--color-champagne)]/50">
                <HeartHandshake className="size-5" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5 text-[var(--color-champagne)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/80">5,0 · Google</span>
                </div>
                <p className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bordeaux-deep)]/65">
                  +2.000 mães amparadas
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-bordeaux-deep)]/65">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-bordeaux)]/55" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--color-bordeaux)]" />
              </span>
              <span className="font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]">Resposta em até 24h</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock className="size-3.5" aria-hidden="true" />
              Atendimento sigiloso, online e em todo o Brasil
            </span>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-bordeaux)]/15 pt-7">
            <li>
              <p className="font-serif-italic text-4xl text-[var(--color-bordeaux)]">11</p>
              <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/70">Anos em Direito Trabalhista</p>
            </li>
            <li>
              <p className="font-serif-italic text-4xl text-[var(--color-bordeaux)]">100%</p>
              <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/70">Foco no Direito da Mulher</p>
            </li>
            <li>
              <p className="font-serif-italic text-4xl text-[var(--color-bordeaux)]">24h</p>
              <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/70">Resposta no WhatsApp</p>
            </li>
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border-2 border-[var(--color-champagne)]/60" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-bordeaux-deep)] shadow-warm ring-1 ring-[var(--color-bordeaux)]/10">
            <div className="relative aspect-[4/5]">
              <img
                src={heroImg}
                alt="Mãos sobre documento jurídico em mesa de escritório, atmosfera acolhedora"
                width={1200}
                height={1500}
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bordeaux-deep)]/55 via-transparent to-transparent" />

              <div className="absolute right-5 top-5 grid size-20 place-items-center rounded-full border border-[var(--color-champagne)]/70 bg-[var(--color-bordeaux-deep)]/55 text-center backdrop-blur-md">
                <div>
                  <p className="font-serif-italic text-base leading-none text-[var(--color-champagne)]">+11</p>
                  <p className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/85">anos<br/>de causa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-10 z-20 max-w-[260px] rounded-2xl border border-[var(--color-bordeaux)]/10 bg-white p-5 shadow-warm">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-nude)] text-[var(--color-bordeaux-deep)]">
                <BadgeCheck className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">Amparo legal</p>
                <p className="mt-1 text-sm font-medium leading-snug text-[var(--color-bordeaux-deep)]">
                  Súmula 244 TST · Tema 497 STF · Art. 10 do ADCT
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-2 max-w-[220px] rounded-2xl border-l-4 border-[var(--color-bordeaux)] bg-white p-4 shadow-soft">
            <div className="mb-1 flex gap-0.5 text-[var(--color-champagne)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="font-serif-italic text-[13px] leading-snug text-[var(--color-bordeaux-deep)]">
              "Senti segurança desde a primeira conversa."
            </p>
            <p className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/55">Mariana S.</p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-[var(--color-bordeaux)]/10 bg-white/50 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-y-3 px-8 py-4 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/70">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="size-3.5 text-[var(--color-bordeaux)]" /> OAB Ativa</span>
          <span className="inline-flex items-center gap-2"><Scale className="size-3.5 text-[var(--color-bordeaux)]" /> TST · STF · TRTs</span>
          <span className="inline-flex items-center gap-2"><Globe2 className="size-3.5 text-[var(--color-bordeaux)]" /> 100% Online</span>
          <span className="inline-flex items-center gap-2"><Lock className="size-3.5 text-[var(--color-bordeaux)]" /> Sigilo absoluto</span>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BRIDGE ----------------------------- */

function Bridge() {
  return (
    <section className="bg-background py-12 sm:py-20">
      <Reveal className="mx-auto max-w-[820px] px-5 sm:px-8">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <span className="h-px w-8 bg-[var(--color-champagne)] sm:w-12" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)] sm:text-[10.5px]">
            A lei está do seu lado
          </span>
          <span className="h-px w-8 bg-[var(--color-champagne)] sm:w-12" />
        </div>
        <p className="text-pretty text-center text-[15.5px] leading-[1.72] text-foreground/82 sm:text-lg sm:leading-[1.75]">
          Quando uma gestante é demitida sem justa causa, mesmo que a gravidez
          tenha sido descoberta depois, a lei brasileira protege. A{" "}
          <strong className="text-foreground">Dra. Pétria Azevedo</strong> atua
          há mais de 11 anos em <strong>Direito Trabalhista da Gestante</strong>,
          com base na <strong>Súmula 244 do TST</strong>, no{" "}
          <strong>Tema 497 do STF</strong> e no{" "}
          <strong>Art. 10, II, b do ADCT</strong>.
        </p>

        {/* Timeline: como a proteção funciona na prática */}
        <div className="mt-12 sm:mt-14">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
            {[
              {
                step: "01",
                title: "Concepção",
                desc: "A estabilidade começa aqui, mesmo sem você ou a empresa saber ainda.",
              },
              {
                step: "02",
                title: "Demissão",
                desc: "Mesmo que ocorra antes da descoberta da gravidez, ela continua nula.",
              },
              {
                step: "03",
                title: "Estabilidade",
                desc: "Reintegração ou indenização do período: salários, FGTS, 13º, férias.",
              },
            ].map((s, i, arr) => (
              <div key={s.step} className="relative">
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-bordeaux)]/10 bg-card p-5 shadow-soft sm:flex-col sm:gap-0 sm:p-6">
                  <span className="font-serif-italic text-3xl leading-none text-[var(--color-champagne)] sm:text-4xl">
                    {s.step}
                  </span>
                  <div className="flex-1 sm:mt-4">
                    <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.55] text-foreground/72 sm:text-sm">
                      {s.desc}
                    </p>
                  </div>
                </div>
                {/* Conector (desktop) */}
                {i < arr.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-3 -translate-y-1/2 translate-x-1/2 bg-[var(--color-champagne)] sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------- IDENTIFY CARDS ----------------------------- */

function IdentifyCards() {
  const cards = [
    {
      icon: Scale,
      title: "Fui demitida sem justa causa durante a gestação",
      sub: "A estabilidade da gestante é prevista no Art. 10, II, b do ADCT. A demissão pode ser revertida.",
      origin: "card-sem-justa-causa",
    },
    {
      icon: HeartHandshake,
      title: "Descobri que estava grávida depois da demissão",
      sub: "A jurisprudência do TST (Súmula 244) e o Tema 497 do STF garantem a proteção independente do conhecimento prévio. Você ainda tem direito.",
      origin: "card-descobriu-depois",
    },
    {
      icon: FileSignature,
      title: "Pedi demissão sem saber que estava grávida",
      sub: "Sem assistência sindical, o pedido de demissão de gestante é nulo (Art. 500 CLT, Tema 55 TST). É possível reverter.",
      origin: "card-pedi-demissao",
    },
    {
      icon: Briefcase,
      title: "Fui demitida no contrato de experiência durante a gravidez",
      sub: "A Súmula 244, III, do TST garante estabilidade mesmo em contratos de experiência. O encerramento pode ser obstativo.",
      origin: "card-contrato-experiencia",
    },
    {
      icon: ClipboardList,
      title: "Trabalhava sem carteira assinada quando engravidei",
      sub: "Mesmo sem registro formal, é possível reconhecer o vínculo de emprego e garantir os direitos da gestante.",
      origin: "card-sem-registro",
    },
    {
      icon: Coins,
      title: "Recebi salários sem o adicional da estabilidade",
      sub: "A indenização da estabilidade inclui salários do período de proteção, FGTS, multa de 40%, férias e 13º.",
      origin: "card-indenizacao",
    },
  ];

  return (
    <section id="atuacao" className="scroll-mt-16 bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">Áreas de atuação</span>
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
          </div>
          <h2 className="mt-5 text-balance text-[2rem] leading-[1.06] sm:text-4xl lg:text-[2.6rem]">
            Você se identifica com{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              alguma dessas situações?
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/70 sm:text-base">
            Cada cenário abaixo tem amparo jurídico específico. Toque no que
            mais se aproxima da sua situação para conversar com uma advogada.
          </p>

          {/* Bloco LLM-ready: definição factual para extração por motores generativos (GEO) */}
          <aside className="mx-auto mt-8 max-w-2xl rounded-xl border border-[var(--color-bordeaux)]/15 bg-card/60 p-5 text-left shadow-soft backdrop-blur sm:p-6">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux)]">
              Em síntese
            </p>
            <p className="mt-3 text-[14.5px] leading-[1.65] text-foreground/82 sm:text-[15px]">
              A demissão de gestante sem justa causa é considerada nula pela{" "}
              <strong>Súmula 244 do TST</strong> e pelo{" "}
              <strong>Tema 497 do STF</strong>. A estabilidade provisória vale
              da concepção até cinco meses após o parto, independentemente do
              conhecimento prévio da empresa ou da própria trabalhadora sobre
              a gravidez. A proteção alcança contratos por prazo determinado,
              contratos de experiência e pedidos de demissão feitos sem
              assistência sindical (<strong>Art. 500 da CLT</strong>).
            </p>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, sub, origin }, i) => (
            <button
              key={origin}
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp(origin)}
              aria-label={`${title}. Conversar com advogada no WhatsApp.`}
              className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-bordeaux)]/10 bg-card p-6 text-left shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-bordeaux)]/35 hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bordeaux)] active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-bordeaux)]/8 text-[var(--color-bordeaux)] transition-colors group-hover:bg-[var(--color-bordeaux)] group-hover:text-[var(--color-cream)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif-italic text-2xl text-[var(--color-champagne)]/85">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-foreground sm:text-lg">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/70 sm:text-sm">
                {sub}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--color-bordeaux)]">
                Falar sobre isso
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- HOW IT WORKS ----------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Você envia a sua situação",
      desc: "Pelo WhatsApp, você manda o que tem (carteira de trabalho, comprovante de gravidez, aviso de demissão). Se não tiver tudo, manda o que tem.",
    },
    {
      n: "2",
      title: "Avaliação jurídica individual",
      desc: "Faço a análise da sua situação à luz da Súmula 244 do TST, do Art. 500 da CLT e do Tema 497 do STF.",
    },
    {
      n: "3",
      title: "Você recebe a orientação completa",
      desc: "Explico o cenário do seu caso, os direitos aplicáveis e os próximos passos possíveis. Sem compromisso de prosseguir.",
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">Processo</span>
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
          </div>
          <h2 className="mt-5 text-[2rem] leading-[1.06] sm:text-4xl">
            Como funciona a{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              análise do seu caso
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/65 sm:text-base">
            Três passos. Sem juridiquês, sem deslocamento, sem robôs.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-warm"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-2 select-none font-serif-italic text-[7.5rem] leading-none text-[var(--color-bordeaux)]/[0.07]"
              >
                {s.n}
              </span>
              <div className="relative flex items-center gap-3">
                <span className="inline-grid size-10 place-items-center rounded-full bg-[var(--color-bordeaux)] text-[var(--color-cream)] font-serif-italic text-lg">
                  {s.n}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]/65">
                  Passo {i + 1}
                </span>
              </div>
              <h3 className="relative mt-5 text-[1.15rem] font-semibold leading-snug sm:text-xl">{s.title}</h3>
              <p className="relative mt-2.5 text-[14.5px] leading-[1.65] text-foreground/75 sm:text-base">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3">
          <WhatsappButton origin="how-it-works" />
          <p className="text-[11.5px] font-medium text-foreground/55">
            Resposta direta de uma advogada · Sem robôs
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STORYTELLING ----------------------------- */

function Storytelling() {
  return (
    <section className="relative overflow-hidden bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-16 sm:py-24">
      <Botanical className="pointer-events-none absolute -right-10 top-1/2 h-80 w-52 -translate-y-1/2 rotate-[8deg] text-[var(--color-bordeaux)] opacity-[0.05] sm:h-96 sm:w-64" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 sm:gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">Contexto</span>
          </div>
          <h2 className="mt-5 text-balance text-[2rem] leading-[1.06] sm:text-4xl">
            Por que muitas gestantes{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              não buscam justiça
            </span>
          </h2>
          <p className="mt-6 text-pretty leading-[1.72] text-foreground/82">
            Muitas gestantes deixam de buscar os seus direitos por medo,
            vergonha ou desinformação. Acreditam que processar a empresa é
            demorado, que precisam de muitas provas, ou que perderam o direito
            porque pediram demissão ou porque descobriram a gravidez depois.
            <span className="mt-4 block font-serif-italic text-[var(--color-bordeaux)]">
              Mas a realidade é diferente do que parece.
            </span>
          </p>

          {/* Tabela comparativa Mito × Realidade — formato IA-friendly (Pilar 2 GEO) */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-bordeaux)]/15 bg-card shadow-soft">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-bordeaux)]/12">
                  <th className="w-1/2 px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]/55 sm:px-6">
                    Mito
                  </th>
                  <th className="w-1/2 px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux)] sm:px-6">
                    Realidade
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13.5px] leading-[1.55] sm:text-[14.5px]">
                {[
                  {
                    mito: "Preciso comprovar a gravidez antes da demissão",
                    real: "A estabilidade independe do conhecimento prévio (Tema 497 STF)",
                  },
                  {
                    mito: "Pedi demissão, então perdi todos os direitos",
                    real: "Sem assistência sindical, o pedido pode ser nulo (Art. 500 CLT)",
                  },
                  {
                    mito: "Contrato de experiência não tem proteção",
                    real: "A estabilidade vale também em contratos de experiência (Súmula 244, III TST)",
                  },
                  {
                    mito: "Processar empresa demora anos no Brasil",
                    real: "Tempo médio é de 6 meses e 17 dias (Justiça em Números 2025, CNJ)",
                  },
                ].map((row, i, arr) => (
                  <tr
                    key={row.mito}
                    className={i < arr.length - 1 ? "border-b border-[var(--color-bordeaux)]/10" : ""}
                  >
                    <td className="align-top px-5 py-4 text-foreground/68 sm:px-6">
                      <span className="mr-2 select-none text-[var(--color-bordeaux)]/40">×</span>
                      {row.mito}
                    </td>
                    <td className="align-top px-5 py-4 font-medium text-foreground sm:px-6">
                      <span className="mr-2 select-none text-[var(--color-bordeaux)]">✓</span>
                      {row.real}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--color-bordeaux)]/15 bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-bordeaux)]/10 text-[var(--color-bordeaux)]">
                <AlertTriangle className="size-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  Erros mais comuns após a demissão
                </h3>
                <ul className="mt-3 space-y-2 text-foreground/80">
                  {[
                    "Aceitar a situação sem questionar.",
                    "Assinar pedido de demissão sob pressão sem assistência sindical.",
                    "Esperar muito tempo (existe prazo prescricional).",
                    "Pagar advogado errado por desespero.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm sm:text-base">
                      <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-bordeaux)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data card — substitui foto stock (penalty Pilar 2 GEO) com peça factual */}
        <aside className="order-first overflow-hidden rounded-3xl bg-[var(--color-bordeaux-deep)] p-8 text-[var(--color-cream)] shadow-warm lg:order-last lg:p-10">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-[var(--color-champagne)]/15 text-[var(--color-champagne)] ring-1 ring-[var(--color-champagne)]/40">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
              Dado oficial CNJ
            </p>
          </div>

          <p className="mt-7 font-serif-italic text-[3.2rem] leading-[0.95] text-[var(--color-champagne)] sm:text-[4rem] lg:text-[4.8rem]">
            6 meses<br />
            <span className="text-[2rem] not-italic sm:text-[2.5rem] lg:text-[2.8rem]">
              e 17 dias
            </span>
          </p>
          <p className="mt-5 text-[15px] leading-[1.6] text-[var(--color-cream)]/82 sm:text-base">
            é o <strong className="text-[var(--color-cream)]">tempo médio</strong> que a Justiça do Trabalho leva para julgar um processo trabalhista no Brasil em 2025.
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/55">
            Fonte: Justiça em Números 2025 · CNJ
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--color-cream)]/15 pt-7">
            <div>
              <p className="font-serif-italic text-3xl text-[var(--color-champagne)] sm:text-4xl">
                +2.000
              </p>
              <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
                mães amparadas
              </p>
            </div>
            <div>
              <p className="font-serif-italic text-3xl text-[var(--color-champagne)] sm:text-4xl">
                11 anos
              </p>
              <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
                de atuação especializada
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ----------------------------- AUTHORITY ----------------------------- */

function Authority() {
  const bullets = [
    "Atuação especializada em Direito Trabalhista e Direitos da Mulher",
    "Atendimento exclusivamente online, com clientes em todo o Brasil",
    "Foco em ações de gestante, mulher trabalhadora e dispensa discriminatória",
    "Acompanhamento direto e pessoal, sem intermediários",
  ];

  return (
    <section id="escritorio" className="relative scroll-mt-16 overflow-hidden bg-[var(--color-bordeaux-deep)] py-16 text-[var(--color-cream)] sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(ellipse_at_70%_20%,var(--color-champagne),transparent_55%),radial-gradient(ellipse_at_10%_90%,var(--color-bordeaux),transparent_50%)]" />
      <Botanical className="pointer-events-none absolute -right-6 top-2 h-64 w-44 text-[var(--color-champagne)] opacity-[0.07] sm:h-80 sm:w-56" />
      <Botanical className="pointer-events-none absolute -left-8 bottom-0 h-56 w-40 -scale-x-100 rotate-180 text-[var(--color-champagne)] opacity-[0.06] sm:h-72 sm:w-48" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-champagne)]">
              A advogada
            </span>
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
          </div>
          <h2 className="mt-5 text-balance text-[2rem] leading-[1.05] sm:text-4xl lg:text-[2.6rem]">
            Conheça{" "}
            <span className="font-serif-italic text-[var(--color-champagne)]">
              Dra. Pétria Azevedo
            </span>
          </h2>
        </div>

        {/* Foto + conteúdo */}
        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          {/* Foto */}
          <div className="relative">
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 hidden h-14 w-14 border-l border-t border-[var(--color-champagne)]/60 lg:block" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 hidden h-14 w-14 border-b border-r border-[var(--color-champagne)]/60 lg:block" />
            <figure className="relative overflow-hidden rounded-[6px] shadow-warm aspect-[4/5]">
              <img
                src={petriaPortrait}
                alt="Dra. Pétria Azevedo"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.92) contrast(1.03)" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-bordeaux-deep)]/22 via-transparent to-transparent mix-blend-multiply" />
            </figure>
            <p className="mt-4 text-center text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-champagne)]/80 lg:text-left">
              Dra. Pétria Azevedo · OAB/ES 23.648
            </p>
          </div>

          {/* Conteúdo */}
          <div>
            <p className="text-[15.5px] leading-[1.75] text-[var(--color-cream)]/82 sm:text-[1.05rem]">
              Meu trabalho é voltado à defesa de mulheres que enfrentam
              situações relacionadas à gestação no ambiente de trabalho.
              Atuo em casos de demissão durante a gravidez, descoberta da
              gestação após o desligamento, ausência de registro em carteira
              e outras situações que envolvem a proteção dos direitos da
              trabalhadora.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[var(--color-cream)]/82 sm:text-[1.05rem]">
              <span className="font-serif-italic text-[var(--color-champagne)]">Sei que esses momentos geram insegurança e dúvidas.</span>{" "}
              Por isso ofereço uma orientação jurídica clara, acessível e direcionada a cada caso.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/[0.04] p-4 backdrop-blur"
                >
                  <span className="font-serif-italic text-xl leading-none text-[var(--color-champagne)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.55] text-[var(--color-cream)]/92 sm:text-[14.5px]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <WhatsappButton origin="authority" label="Falar com a Dra. Pétria agora" />
            </div>
          </div>
        </div>

        {/* Wordmark final */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <img
            src={logoFull}
            alt="Azevedo Advocacia"
            width={200}
            height={200}
            loading="lazy"
            className="size-32 opacity-90 sm:size-40"
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */

function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">FAQ</span>
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
          </div>
          <h2 className="mt-5 text-[2rem] leading-[1.06] sm:text-4xl">
            Perguntas{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              frequentes
            </span>
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-foreground/65 sm:text-base">
            Respostas baseadas em jurisprudência atualizada do TST e do STF.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-2.5 sm:space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft transition-shadow hover:shadow-warm sm:px-6"
            >
              <AccordionTrigger className="gap-3 py-5 text-left hover:no-underline [&>svg]:text-[var(--color-bordeaux)]">
                <span className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-serif-italic text-base leading-none text-[var(--color-champagne)] sm:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold leading-snug sm:text-[17px]">
                    {item.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-8 text-[14.5px] leading-[1.7] text-foreground/75 sm:pl-9 sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex justify-center">
          <WhatsappButton origin="faq" label="Falar com a Dra. Pétria agora" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- REVIEWS ----------------------------- */

function Reviews() {
  const reviews = [
    {
      text: "Honestamente não imaginava ser tão rápido e ter toda a rede de apoio que tive. Obrigada demais à Pétria e às outras funcionárias.",
      author: "M. S. · Cliente verificada · ES",
    },
    {
      text: "Obrigada por todo carinho, por toda paciência, por sempre me explicar tudo com calma. Vocês são maravilhosas, super recomendo.",
      author: "C. R. · Cliente verificada · ES",
    },
    {
      text: "Foi um ótimo atendimento, ela é bem caprichosa em cada detalhe. Muito obrigada por fazer parte desse momento comigo, eu amei.",
      author: "J. A. · Cliente verificada · ES",
    },
    {
      text: "Maravilhoso! Iniciei meu processo em dezembro e em março já consegui um acordo com a empresa! Passei por muita coisa na empresa que trabalhava e finalmente sinto que houve justiça. Obrigada por tudo!",
      author: "L. F. · Cliente verificada · ES",
    },
  ];

  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">Avaliações</span>
            <span className="h-px w-10 bg-[var(--color-champagne)]" />
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-bordeaux)]/15 bg-card px-4 py-2 shadow-soft sm:gap-3 sm:px-5">
            <span className="text-[13px] font-semibold text-foreground">Google</span>
            <span className="h-3.5 w-px bg-border" />
            <span className="flex items-center gap-0.5 text-[var(--color-champagne)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current sm:size-4" aria-hidden="true" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-foreground">5,0</span>
            <span className="hidden text-xs text-foreground/60 sm:inline">Avaliações verificadas</span>
          </div>

          <h2 className="text-balance text-[2rem] leading-[1.06] sm:text-4xl">
            O que clientes{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              dizem do atendimento
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-warm sm:p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif-italic text-[7rem] leading-none text-[var(--color-champagne)]/20"
              >
                "
              </span>
              <div className="relative flex gap-0.5 text-[var(--color-champagne)]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="relative mt-4 text-[15px] leading-[1.55] text-foreground/88 sm:text-[1.05rem]">
                "{r.text}"
              </blockquote>
              <figcaption className="relative mt-5 flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                <span className="h-px w-7 bg-[var(--color-champagne)]" />
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PRESCRIÇÃO ----------------------------- */

function Prescricao() {
  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-12 sm:py-14">
      <Reveal className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-bordeaux)]/15 bg-card p-6 shadow-soft sm:items-center sm:p-7">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-bordeaux)] text-[var(--color-champagne)]">
            <Clock className="size-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux)]">
              Atenção ao prazo
            </p>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-foreground/85 sm:text-[15.5px]">
              Você tem <strong className="text-foreground">até 2 anos após a saída da empresa</strong> para ingressar com ação trabalhista (Art. 7º, XXIX da Constituição). Agir cedo aumenta as chances de reconstituir provas e reverter a demissão.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bordeaux-deep)] py-20 text-[var(--color-cream)] sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(ellipse_at_50%_30%,var(--color-champagne),transparent_55%),radial-gradient(ellipse_at_50%_120%,var(--color-bordeaux),transparent_55%)]" />
      {/* TODO: quando belly-gestante.jpg estiver em src/assets, descomentar o import e este bloco
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-soft-light"
        style={{ backgroundImage: `url(${bellyImg})`, filter: "blur(38px) saturate(0.8)" }}
      /> */}
      <Botanical className="pointer-events-none absolute -left-10 -top-6 h-72 w-48 rotate-[14deg] text-[var(--color-champagne)] opacity-[0.06] sm:h-96 sm:w-64" />
      <Botanical className="pointer-events-none absolute -right-10 -bottom-8 h-72 w-48 -rotate-[160deg] text-[var(--color-champagne)] opacity-[0.06] sm:h-96 sm:w-64" />
      {/* Filete duplo de moldura */}
      <div className="pointer-events-none absolute inset-x-4 top-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:top-4" />
      <div className="pointer-events-none absolute inset-x-4 top-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:top-[22px]" />
      <div className="pointer-events-none absolute inset-x-4 bottom-3 border-t border-[var(--color-champagne)]/22 sm:inset-x-6 sm:bottom-4" />
      <div className="pointer-events-none absolute inset-x-4 bottom-[17px] border-t border-[var(--color-champagne)]/12 sm:inset-x-6 sm:bottom-[22px]" />

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[var(--color-champagne)]" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-champagne)]">Próximo passo</span>
          <span className="h-px w-10 bg-[var(--color-champagne)]" />
        </div>

        <h2 className="mt-6 text-balance text-[2.4rem] leading-[1.04] sm:mt-7 sm:text-5xl lg:text-[3.6rem]">
          Você não precisa
          <span className="block font-serif-italic text-[var(--color-champagne)]">
            passar por isso sozinha.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15.5px] leading-[1.7] text-[var(--color-cream)]/82 sm:text-lg">
          Mande sua situação para uma análise jurídica. Você decide se quer
          prosseguir depois.
        </p>

        <div className="mt-9 flex justify-center sm:mt-10">
          <WhatsappButton origin="final" size="xl" />
        </div>

        <ul className="mt-8 flex flex-col items-center gap-2.5 text-[13.5px] text-[var(--color-cream)]/72 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2 sm:text-sm">
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
      </Reveal>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.04_18)] text-[var(--color-cream)]/75">
      <div className="mx-auto max-w-6xl px-5 py-14 pb-28 sm:px-8 md:pb-14">
        {/* Wordmark topo */}
        <div className="mb-12 flex flex-col items-start gap-3 border-b border-[var(--color-cream)]/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-2.5">
            <img src={logoSymbol} alt="Azevedo Advocacia" width={36} height={36} className="size-9 shrink-0" />
            <span className="font-display text-xl font-semibold tracking-tight text-[var(--color-cream)]">
              Pétria<span className="text-[var(--color-champagne)]">·</span>Azevedo
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-cream)]/55">
              Advogadas
            </span>
          </div>
          <a
            href="tel:+552732082264"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-cream)]/80 transition hover:text-[var(--color-champagne)]"
          >
            <Phone className="size-3.5 text-[var(--color-champagne)]" aria-hidden="true" />
            +55 (27) 3208-2264
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
              O escritório
            </h3>
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.7] text-[var(--color-cream)]/65">
              Direito Trabalhista e Direitos da Mulher. Atendimento online em
              todo o Brasil, com base em jurisprudência consolidada do TST e
              do STF.
            </p>
          </div>
          <div>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
              Atuação
            </h3>
            <ul className="mt-4 space-y-2 text-[13.5px]">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-champagne)]">
              Legal
            </h3>
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

        <div className="mt-12 border-t border-[var(--color-cream)]/10 pt-8">
          <p className="text-[12px] text-[var(--color-cream)]/60">
            Dra. Pétria Azevedo · OAB/ES 23.648 · CNPJ 60.441.824/0001-29
          </p>
          <p className="mt-5 max-w-3xl font-serif-italic text-[12px] leading-[1.7] text-[var(--color-cream)]/50">
            As informações contidas nesta página possuem caráter exclusivamente
            informativo e não substituem a análise individual de cada caso. A
            atuação jurídica depende das particularidades de cada situação
            concreta. Este conteúdo observa as diretrizes do Código de Ética
            e Disciplina da OAB.
          </p>
          <p className="mt-6 text-[11.5px] text-[var(--color-cream)]/40">
            © 2026 Dra. Pétria Azevedo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
