import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsappButton, StickyMobileCTA } from "@/components/whatsapp-button";
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://www.barphoff.com/",
        },
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
      {
        title:
          "Demitida Grávida? Direitos da Gestante | Barp.Hoff Advogadas",
      },
      {
        name: "description",
        content:
          "A demissão de gestante geralmente é ilegal, mesmo se a gravidez foi descoberta depois ou houve pedido de demissão. Análise jurídica pelo WhatsApp.",
      },
      { name: "theme-color", content: "#3b1018" },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Demitida Grávida? Saiba os Seus Direitos | Barp.Hoff Advogadas",
      },
      {
        property: "og:description",
        content:
          "A lei protege a gestante demitida. Análise jurídica do seu caso pelo WhatsApp.",
      },
      {
        property: "og:url",
        content: "https://www.barphoff.com/gestante-demitida",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.barphoff.com/gestante-demitida",
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

function GestantePage() {
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
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

/* ----------------------------- TOP BAR ----------------------------- */

function TopBar() {
  return (
    <div className="hidden md:block border-b border-[var(--color-bordeaux)]/10 bg-[var(--color-cream)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-xs">
        <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--color-bordeaux)] text-[var(--color-cream)] font-serif-italic text-sm">B</span>
          Barp<span className="text-[var(--color-champagne)]">.</span>Hoff
          <span className="ml-1 hidden font-normal normal-case tracking-normal text-[var(--color-bordeaux-deep)]/60 lg:inline">Advogadas · OAB/PR</span>
        </div>
        <div className="flex items-center gap-6 text-[var(--color-bordeaux-deep)]/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-[var(--color-bordeaux)]" /> Sigilo absoluto</span>
          <span className="inline-flex items-center gap-1.5"><Globe2 className="size-3.5 text-[var(--color-bordeaux)]" /> Atendimento nacional</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-bordeaux-deep)]"><Phone className="size-3.5 text-[var(--color-bordeaux)]" /> +55 45 3027-3100</span>
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

        <div className="relative px-5 pb-10 pt-8">
          {/* mini brand */}
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)]/85">
            <span className="inline-flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-full bg-[var(--color-champagne)] font-serif-italic text-[11px] text-[var(--color-bordeaux-deep)]">B</span>
              Barp<span className="text-[var(--color-champagne)]">.</span>Hoff
            </span>
            <a href="tel:+554530273100" className="inline-flex items-center gap-1.5 text-[var(--color-cream)]/80">
              <Phone className="size-3" /> 45 3027-3100
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
            Demitida grávida?
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
            Você tem estabilidade <strong className="text-[var(--color-cream)]">mesmo se descobriu a gravidez depois</strong>, em contrato de experiência, sem registro ou após pedido de demissão sem sindicato.
          </p>

          {/* CTA */}
          <div className="mt-7">
            <WhatsappButton origin="hero-mobile" size="lg" fullWidth label="Falar com advogada agora" />
            <p className="mt-3 inline-flex items-center gap-2 text-[12px] text-[var(--color-cream)]/65">
              <Lock className="size-3.5" />
              Atendimento sigiloso · 100% online · Brasil todo
            </p>
          </div>

          {/* social proof inline */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--color-champagne)]/15 bg-[var(--color-cream)]/[0.06] p-3">
            <div className="flex -space-x-2">
              <span className="size-8 rounded-full border-2 border-[var(--color-bordeaux-deep)] bg-[var(--color-nude)] grid place-items-center text-[10px] font-semibold text-[var(--color-bordeaux-deep)]">M</span>
              <span className="size-8 rounded-full border-2 border-[var(--color-bordeaux-deep)] bg-[var(--color-champagne)] grid place-items-center text-[10px] font-semibold text-[var(--color-bordeaux-deep)]">A</span>
              <span className="size-8 rounded-full border-2 border-[var(--color-bordeaux-deep)] bg-[var(--color-bordeaux)] grid place-items-center text-[10px] font-semibold text-[var(--color-cream)]">L</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 text-[var(--color-champagne)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>
              <p className="text-[11px] font-medium leading-tight text-[var(--color-cream)]/85">
                Centenas de mães amparadas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: pilares de autoridade em creme */}
      <div className="bg-[var(--color-cream)] px-5 py-7">
        <ul className="grid grid-cols-3 gap-3 text-center">
          <li className="rounded-xl border border-[var(--color-bordeaux)]/10 bg-white p-3 shadow-soft">
            <p className="font-serif-italic text-2xl text-[var(--color-bordeaux)]">17</p>
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
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3 text-[var(--color-bordeaux)]" /> OAB/PR Ativa</span>
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-champagne)] bg-white/70 px-4 py-1.5 shadow-soft backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-bordeaux)]/50" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--color-bordeaux)]" />
            </span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bordeaux-deep)]">
              Especialistas em Direitos da Gestante
            </span>
          </div>

          <h1 className="mt-7 text-balance text-[3.4rem] leading-[1.02] lg:text-[4rem]">
            Demitida grávida?{" "}
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
            Você tem estabilidade <strong className="text-[var(--color-bordeaux-deep)]">mesmo se descobriu a gravidez depois</strong>, se foi contrato de experiência, sem registro, ou se houve pedido de demissão sem assistência sindical. Receba uma análise jurídica do seu caso pelo WhatsApp.
          </p>

          <div className="mt-9 flex flex-row items-center gap-5">
            <WhatsappButton origin="hero" size="xl" label="Falar com advogada agora" />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="size-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-nude)] grid place-items-center text-[11px] font-semibold text-[var(--color-bordeaux-deep)]">M</span>
                <span className="size-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-champagne)] grid place-items-center text-[11px] font-semibold text-[var(--color-bordeaux-deep)]">A</span>
                <span className="size-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-bordeaux)] grid place-items-center text-[11px] font-semibold text-[var(--color-cream)]">L</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux-deep)]/70">
                Centenas de mães<br />amparadas
              </p>
            </div>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--color-bordeaux-deep)]/60">
            <Lock className="size-4" aria-hidden="true" />
            Atendimento sigiloso, online e em todo o Brasil.
          </p>

          <ul className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-bordeaux)]/15 pt-7">
            <li>
              <p className="font-serif-italic text-4xl text-[var(--color-bordeaux)]">17</p>
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
                  <p className="font-serif-italic text-base leading-none text-[var(--color-champagne)]">+17</p>
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
          <span className="inline-flex items-center gap-2"><ShieldCheck className="size-3.5 text-[var(--color-bordeaux)]" /> OAB/PR Ativa</span>
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
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[820px] px-5 text-pretty text-center text-base leading-[1.75] text-foreground/80 sm:px-8 sm:text-lg">
        Quando uma gestante é demitida sem justa causa, mesmo que a gravidez
        tenha sido descoberta depois, a lei brasileira protege. O escritório{" "}
        <strong className="text-foreground">Barp.Hoff Advogadas</strong> atua há
        mais de 17 anos em <strong>Direito Trabalhista da Gestante</strong>, com
        base na <strong>Súmula 244 do TST</strong>, no{" "}
        <strong>Tema 497 do STF</strong> e no{" "}
        <strong>Art. 10, II, b do ADCT</strong>, ingressando com ações para
        reverter demissões nulas, pedidos de demissão feitos sem assistência
        sindical e contratos de experiência encerrados de forma obstativa.
      </div>
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
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-[2.6rem]">
            Você se identifica com{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              alguma dessas situações?
            </span>
          </h2>
          <p className="mt-4 text-foreground/70">
            Cada cenário abaixo tem amparo jurídico específico. Toque no que
            mais se aproxima da sua situação para conversar com uma advogada.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, sub, origin }) => (
            <button
              key={origin}
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp(origin)}
              aria-label={`${title}. Conversar com advogada no WhatsApp.`}
              className="group flex h-full flex-col rounded-2xl border border-[var(--color-bordeaux)]/10 bg-card p-6 text-left shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-bordeaux)]/35 hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bordeaux)]"
            >
              <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-bordeaux)]/8 text-[var(--color-bordeaux)] transition-colors group-hover:bg-[var(--color-bordeaux)] group-hover:text-[var(--color-cream)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {sub}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-bordeaux)]">
                Falar sobre isso
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
      desc: "Nossas advogadas verificam a sua situação à luz da Súmula 244 do TST, do Art. 500 da CLT e do Tema 497 do STF.",
    },
    {
      n: "3",
      title: "Você recebe a orientação completa",
      desc: "Explicamos o cenário do seu caso, os direitos aplicáveis e os próximos passos possíveis. Sem compromisso de prosseguir.",
    },
  ];

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl">
            Como funciona a{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              análise do seu caso
            </span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display text-6xl leading-none font-semibold text-[var(--color-champagne)]">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-foreground/75">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <WhatsappButton origin="how-it-works" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STORYTELLING ----------------------------- */

function Storytelling() {
  return (
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="text-balance text-3xl sm:text-4xl">
            Por que muitas gestantes{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              não buscam justiça
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-foreground/80">
            <p>
              Muitas gestantes deixam de buscar os seus direitos por medo,
              vergonha ou desinformação. Acreditam que processar a empresa é
              demorado, que precisam de muitas provas, ou que perderam o direito
              porque pediram demissão ou porque descobriram a gravidez depois.
            </p>
            <p>
              A maioria está enganada. A Justiça do Trabalho hoje resolve casos
              de gestante em média em{" "}
              <strong className="text-foreground">6 meses e 17 dias</strong>{" "}
              (Justiça em Números 2025, CNJ). E a jurisprudência brasileira
              protege a gestante mesmo nas situações mais difíceis.
            </p>
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

        <div className="order-first overflow-hidden rounded-3xl shadow-warm ring-1 ring-[var(--color-bordeaux)]/10 lg:order-last">
          <img
            src={storyImg}
            alt="Mulher serena em poltrona aveludada segurando caderno"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- AUTHORITY ----------------------------- */

function Authority() {
  const bullets = [
    "Mais de 17 anos de atuação especializada em Direito Trabalhista",
    "Atendimento exclusivamente online, com clientes em todo o Brasil",
    "Foco em ações de gestante, mulher trabalhadora e dispensa discriminatória",
    "Mais de 5.000 casos analisados",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-bordeaux-deep)] py-20 text-[var(--color-cream)] sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_70%_30%,var(--color-champagne),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-champagne)]">
              Sobre o escritório
            </span>
            <h2 className="mt-3 text-balance text-3xl sm:text-4xl lg:text-[2.6rem]">
              Sobre{" "}
              <span className="font-serif-italic text-[var(--color-champagne)]">
                Barp.Hoff Advogadas
              </span>
            </h2>
            <p className="mt-5 text-[var(--color-cream)]/75">
              Um escritório formado por advogadas, dedicado a representar
              mulheres trabalhadoras e gestantes em todo o Brasil. Atendimento
              individualizado, com base em jurisprudência consolidada.
            </p>
          </div>

          <ul className="grid gap-4 self-center">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-champagne)]/15 text-[var(--color-champagne)] ring-1 ring-[var(--color-champagne)]/30">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-[var(--color-cream)]/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <WhatsappButton origin="authority" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */

function Faq() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            Perguntas{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              frequentes
            </span>
          </h2>
          <p className="mt-3 text-foreground/70">
            Respostas baseadas em jurisprudência atualizada do TST e do STF.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex justify-center">
          <WhatsappButton origin="faq" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- REVIEWS ----------------------------- */

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
    <section className="bg-[color-mix(in_oklab,var(--color-nude)_22%,var(--color-cream))] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bordeaux)]/15 bg-card px-5 py-2 shadow-soft">
            <span className="font-semibold text-foreground">Google</span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1 text-[var(--color-champagne)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">4,9</span>
            <span className="text-xs text-foreground/60">Avaliações verificadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl">
            O que clientes{" "}
            <span className="font-serif-italic text-[var(--color-bordeaux)]">
              dizem do atendimento
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-1 text-[var(--color-champagne)]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-foreground/85">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-foreground/60">
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bordeaux-deep)] py-24 text-[var(--color-cream)] sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_50%_50%,var(--color-champagne),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-balance text-4xl sm:text-5xl">
          Você não precisa{" "}
          <span className="font-serif-italic text-[var(--color-champagne)]">
            passar por isso sozinha.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-[var(--color-cream)]/80 sm:text-lg">
          Mande sua situação para uma análise jurídica. Você decide se quer
          prosseguir depois.
        </p>

        <div className="mt-9 flex justify-center">
          <WhatsappButton origin="final" size="xl" />
        </div>

        <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-cream)]/70">
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
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.05_18)] text-[var(--color-cream)]/80">
      <div className="mx-auto max-w-6xl px-5 py-14 pb-24 sm:px-8 md:pb-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-champagne)]">
              Atuação
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-champagne)]">
              Legal
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a href="/politica-de-privacidade" className="hover:text-[var(--color-champagne)]">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:text-[var(--color-champagne)]">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-cream)]/10 pt-8 text-center">
          <p className="font-display text-lg font-semibold text-[var(--color-cream)]">
            Barp.Hoff Advogadas, Direito Trabalhista e Direitos da Mulher
          </p>
          <p className="mt-2 text-sm text-[var(--color-cream)]/65">
            Dra. Alexandra Barp Salgado, OAB/PR 56.903-N · Dra. Jessica Cristina
            Hoff Bueno Garcia, OAB/PR 99.905 · CNPJ 48.808.073/0001-30
          </p>
          <p className="mx-auto mt-5 max-w-3xl font-serif-italic text-xs leading-relaxed text-[var(--color-cream)]/55">
            Este conteúdo tem caráter exclusivamente informativo e não constitui
            aconselhamento jurídico. A análise de casos específicos requer
            consulta profissional individualizada. Nenhum resultado jurídico
            pode ser garantido previamente; cada caso é avaliado conforme
            contrato, documentos e jurisprudência aplicável.
          </p>
          <p className="mt-6 text-xs text-[var(--color-cream)]/45">
            © 2026 Barp.Hoff Advogadas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
