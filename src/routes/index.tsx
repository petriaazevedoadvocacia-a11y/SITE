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
  Quote,
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
      { name: "theme-color", content: "#10182a" },
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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap",
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
      <TrustStrip />
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

/* ----------------------------- TOPBAR ----------------------------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-baseline gap-2" aria-label="Barp.Hoff Advogadas">
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--color-navy-deep)]">
            Barp<span className="text-[var(--color-gold-deep)]">.</span>Hoff
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-navy)]/60 sm:inline">
            Advogadas
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#atuacao" className="text-sm text-[var(--color-navy-deep)]/80 transition hover:text-[var(--color-navy-deep)]">Atuação</a>
          <a href="#como-funciona" className="text-sm text-[var(--color-navy-deep)]/80 transition hover:text-[var(--color-navy-deep)]">Como funciona</a>
          <a href="#escritorio" className="text-sm text-[var(--color-navy-deep)]/80 transition hover:text-[var(--color-navy-deep)]">Escritório</a>
          <a href="#faq" className="text-sm text-[var(--color-navy-deep)]/80 transition hover:text-[var(--color-navy-deep)]">Perguntas</a>
        </div>
        <button
          type="button"
          data-wa-cta
          onClick={() => clickWhatsapp("topbar")}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-deep)] bg-[var(--color-navy-deep)] px-4 py-2 text-xs font-semibold text-[var(--color-ivory)] transition hover:bg-[var(--color-navy-ink)] sm:text-sm"
        >
          Falar com advogada
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */

function Hero() {
  const badges = [
    "Demissão sem justa causa",
    "Estabilidade da gestante",
    "Pediu demissão",
    "Contrato de experiência",
    "Sem registro",
    "Indenização",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-ink)] text-[var(--color-ivory)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_20%_15%,var(--color-gold),transparent_50%),radial-gradient(circle_at_85%_80%,var(--color-navy),transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ivory) 1px, transparent 1px), linear-gradient(90deg, var(--color-ivory) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-gold)]" />
            <span className="eyebrow text-[var(--color-gold)]">
              Advocacia Trabalhista · Direitos da Gestante
            </span>
          </div>

          <h1 className="text-balance text-[2.5rem] leading-[1.04] font-medium sm:text-[3.25rem] lg:text-[4rem]">
            Fui demitida grávida.
            <br />
            <span className="font-serif-italic text-[var(--color-gold)]">
              E agora, quais os meus direitos?
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-[var(--color-ivory)]/75 sm:text-lg">
            A lei brasileira protege a gestante mesmo quando a gravidez foi
            descoberta depois da demissão, quando houve pedido de demissão sem
            assistência sindical, ou quando o contrato era de experiência.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-sm border border-[var(--color-ivory)]/15 bg-[var(--color-ivory)]/[0.04] px-3 py-1.5 text-xs font-medium tracking-tight text-[var(--color-ivory)]/85"
              >
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WhatsappButton origin="hero" size="xl" />
            <p className="flex items-center gap-2 text-xs text-[var(--color-ivory)]/65 sm:text-sm">
              <Lock className="size-4 text-[var(--color-gold)]" aria-hidden="true" />
              Sigiloso · Online · Todo o Brasil
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-[var(--color-gold)]/60 lg:block" />
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b-2 border-r-2 border-[var(--color-gold)]/60 lg:block" />

          <div className="relative overflow-hidden rounded-sm shadow-warm ring-1 ring-[var(--color-gold)]/20">
            <img
              src={heroImg}
              alt="Mãos sobre documento jurídico em mesa de escritório, atmosfera acolhedora"
              width={1280}
              height={1280}
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-navy-ink)]/55 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST STRIP ----------------------------- */

function TrustStrip() {
  const items = [
    { icon: Clock, k: "17+", v: "anos de advocacia" },
    { icon: ShieldCheck, k: "5.000+", v: "casos analisados" },
    { icon: Globe2, k: "100%", v: "online no Brasil" },
    { icon: Scale, k: "OAB/PR", v: "registro profissional" },
  ];
  return (
    <section className="border-y border-[var(--color-navy)]/10 bg-[var(--color-bone)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 sm:px-8 md:grid-cols-4 md:py-6">
        {items.map(({ icon: Icon, k, v }) => (
          <div key={v} className="flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-sm bg-[var(--color-navy-deep)]/5 text-[var(--color-navy-deep)]">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-[var(--color-navy-deep)]">
                {k}
              </div>
              <div className="text-xs text-[var(--color-navy-deep)]/65">{v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- BRIDGE ----------------------------- */

function Bridge() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[var(--color-gold-deep)]" />
          <span className="eyebrow text-[var(--color-gold-deep)]">A lei está do seu lado</span>
          <span className="h-px w-12 bg-[var(--color-gold-deep)]" />
        </div>
        <p className="text-pretty text-center text-lg leading-[1.7] text-foreground/80 sm:text-xl">
          Quando uma gestante é demitida sem justa causa, mesmo que a gravidez
          tenha sido descoberta depois, a lei brasileira protege. O escritório{" "}
          <strong className="text-foreground">Barp.Hoff Advogadas</strong> atua há
          mais de 17 anos em <strong>Direito Trabalhista da Gestante</strong>,
          com base na <strong>Súmula 244 do TST</strong>, no{" "}
          <strong>Tema 497 do STF</strong> e no{" "}
          <strong>Art. 10, II, b do ADCT</strong>.
        </p>
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
      sub: "A Súmula 244 do TST e o Tema 497 do STF garantem proteção independente do conhecimento prévio.",
      origin: "card-descobriu-depois",
    },
    {
      icon: FileSignature,
      title: "Pedi demissão sem saber que estava grávida",
      sub: "Sem assistência sindical, o pedido de demissão de gestante é nulo (Art. 500 CLT, Tema 55 TST).",
      origin: "card-pedi-demissao",
    },
    {
      icon: Briefcase,
      title: "Fui demitida em contrato de experiência grávida",
      sub: "A Súmula 244, III, do TST garante estabilidade mesmo em contratos de experiência.",
      origin: "card-contrato-experiencia",
    },
    {
      icon: ClipboardList,
      title: "Trabalhava sem carteira assinada quando engravidei",
      sub: "Mesmo sem registro, é possível reconhecer o vínculo e garantir os direitos da gestante.",
      origin: "card-sem-registro",
    },
    {
      icon: Coins,
      title: "Recebi salários sem o adicional da estabilidade",
      sub: "A indenização inclui salários do período de proteção, FGTS, multa de 40%, férias e 13º.",
      origin: "card-indenizacao",
    },
  ];

  return (
    <section id="atuacao" className="bg-[var(--color-bone)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-[var(--color-gold-deep)]">Áreas de atuação</span>
          <h2 className="mt-4 text-balance text-4xl font-medium sm:text-5xl">
            Você se identifica com{" "}
            <span className="font-serif-italic text-[var(--color-navy-deep)]">
              alguma dessas situações?
            </span>
          </h2>
          <p className="mt-5 text-foreground/65">
            Cada cenário tem amparo jurídico específico. Toque no que mais se
            aproxima da sua situação para conversar com uma advogada.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-[var(--color-navy)]/12 bg-[var(--color-navy)]/12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, sub, origin }) => (
            <button
              key={origin}
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp(origin)}
              aria-label={`${title}. Conversar com advogada no WhatsApp.`}
              className="group relative flex h-full flex-col bg-card p-8 text-left transition-all duration-200 hover:bg-[var(--color-ivory)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-navy)]"
            >
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
              <span className="mb-5 inline-flex size-11 items-center justify-center rounded-sm border border-[var(--color-navy-deep)]/15 bg-[var(--color-navy-deep)]/[0.04] text-[var(--color-navy-deep)] transition-colors group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-navy-deep)] group-hover:text-[var(--color-gold)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-medium text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {sub}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-navy-deep)]">
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
    <section id="como-funciona" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-[var(--color-gold-deep)]">Processo</span>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
            Como funciona a{" "}
            <span className="font-serif-italic text-[var(--color-navy-deep)]">
              análise do seu caso
            </span>
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative border-t border-[var(--color-navy)]/20 pt-7"
            >
              <span className="absolute -top-px left-0 h-px w-12 bg-[var(--color-gold)]" />
              <span className="font-display text-sm font-semibold tracking-[0.18em] text-[var(--color-gold-deep)]">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <WhatsappButton origin="how-it-works" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STORYTELLING ----------------------------- */

function Storytelling() {
  return (
    <section className="bg-[var(--color-bone)] py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="eyebrow text-[var(--color-gold-deep)]">Contexto</span>
          <h2 className="mt-4 text-balance text-4xl font-medium sm:text-5xl">
            Por que muitas gestantes{" "}
            <span className="font-serif-italic text-[var(--color-navy-deep)]">
              não buscam justiça
            </span>
          </h2>
          <div className="mt-7 space-y-5 text-pretty text-foreground/75 leading-relaxed">
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

          <div className="mt-9 rounded-sm border-l-2 border-[var(--color-gold)] bg-card p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 size-5 shrink-0 text-[var(--color-gold-deep)]" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-medium">
                  Erros mais comuns após a demissão
                </h3>
                <ul className="mt-4 space-y-2.5 text-foreground/80">
                  {[
                    "Aceitar a situação sem questionar.",
                    "Assinar pedido de demissão sob pressão sem assistência sindical.",
                    "Esperar muito tempo (existe prazo prescricional).",
                    "Pagar advogado errado por desespero.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm sm:text-base">
                      <span className="mt-2.5 inline-block size-1 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first overflow-hidden rounded-sm shadow-warm ring-1 ring-[var(--color-navy-deep)]/10 lg:order-last">
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
    <section id="escritorio" className="relative overflow-hidden bg-[var(--color-navy-ink)] py-24 text-[var(--color-ivory)] sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_70%_30%,var(--color-gold),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow text-[var(--color-gold)]">O escritório</span>
            <h2 className="mt-4 text-balance text-4xl font-medium sm:text-5xl">
              Sobre{" "}
              <span className="font-serif-italic text-[var(--color-gold)]">
                Barp.Hoff Advogadas
              </span>
            </h2>
            <p className="mt-6 text-[var(--color-ivory)]/75 leading-relaxed sm:text-lg">
              Um escritório formado por advogadas, dedicado a representar
              mulheres trabalhadoras e gestantes em todo o Brasil. Atendimento
              individualizado, com base em jurisprudência consolidada.
            </p>
            <div className="mt-8 flex flex-col gap-1 border-l-2 border-[var(--color-gold)]/50 pl-5 text-sm text-[var(--color-ivory)]/70">
              <span><strong className="text-[var(--color-ivory)]">Dra. Alexandra Barp Salgado</strong> — OAB/PR 56.903-N</span>
              <span><strong className="text-[var(--color-ivory)]">Dra. Jessica Cristina Hoff Bueno Garcia</strong> — OAB/PR 99.905</span>
            </div>
          </div>

          <ul className="grid gap-4 self-center">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 border-t border-[var(--color-ivory)]/10 pt-4 first:border-t-0 first:pt-0">
                <Check className="mt-1 size-4 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                <span className="text-[var(--color-ivory)]/90">{b}</span>
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
    <section id="faq" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="eyebrow text-[var(--color-gold-deep)]">FAQ</span>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
            Perguntas{" "}
            <span className="font-serif-italic text-[var(--color-navy-deep)]">
              frequentes
            </span>
          </h2>
          <p className="mt-4 text-foreground/65">
            Respostas baseadas em jurisprudência atualizada do TST e do STF.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 divide-y divide-[var(--color-navy)]/12 border-y border-[var(--color-navy)]/12">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-0"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-medium hover:no-underline sm:text-lg [&>svg]:text-[var(--color-gold-deep)]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-foreground/75 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex justify-center">
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
    <section className="bg-[var(--color-bone)] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-deep)]/15 bg-card px-5 py-2.5 shadow-soft">
            <span className="font-semibold text-foreground">Google</span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-0.5 text-[var(--color-gold-deep)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="font-display text-sm font-semibold text-foreground">4,9</span>
            <span className="text-xs text-foreground/60">Avaliações verificadas</span>
          </div>

          <h2 className="text-4xl font-medium sm:text-5xl">
            O que clientes{" "}
            <span className="font-serif-italic text-[var(--color-navy-deep)]">
              dizem do atendimento
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative rounded-sm border border-[var(--color-navy)]/10 bg-card p-7 shadow-soft"
            >
              <Quote className="absolute right-5 top-5 size-7 text-[var(--color-gold)]/40" aria-hidden="true" />
              <div className="flex gap-0.5 text-[var(--color-gold-deep)]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg italic leading-snug text-foreground/85">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-foreground/55">
                — {r.author}
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
    <section className="relative overflow-hidden bg-[var(--color-navy-ink)] py-28 text-[var(--color-ivory)] sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_50%_50%,var(--color-gold),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[var(--color-gold)]" />
          <span className="eyebrow text-[var(--color-gold)]">Próximo passo</span>
          <span className="h-px w-12 bg-[var(--color-gold)]" />
        </div>
        <h2 className="text-balance text-5xl font-medium leading-[1.05] sm:text-6xl">
          Você não precisa{" "}
          <span className="font-serif-italic text-[var(--color-gold)]">
            passar por isso sozinha.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-[var(--color-ivory)]/80 sm:text-lg">
          Mande sua situação para uma análise jurídica. Você decide se quer
          prosseguir depois.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsappButton origin="final" size="xl" />
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-ivory)]/70">
          {[
            "Atendimento direto com advogada",
            "Sigilo profissional",
            "Online em todo o Brasil",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Check className="size-4 text-[var(--color-gold)]" aria-hidden="true" />
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
    <footer className="bg-[oklch(0.10_0.03_260)] text-[var(--color-ivory)]/75">
      <div className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-8 md:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-[var(--color-ivory)]">
                Barp<span className="text-[var(--color-gold)]">.</span>Hoff
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-ivory)]/55">
                Advogadas
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-ivory)]/65">
              Direito Trabalhista e Direitos da Mulher. Atendimento online em todo o Brasil.
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-[var(--color-gold)]">Atuação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-[var(--color-gold)]">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/politica-de-privacidade" className="transition hover:text-[var(--color-gold)]">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="transition hover:text-[var(--color-gold)]">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-ivory)]/10 pt-8">
          <p className="text-xs text-[var(--color-ivory)]/55">
            Dra. Alexandra Barp Salgado, OAB/PR 56.903-N · Dra. Jessica Cristina
            Hoff Bueno Garcia, OAB/PR 99.905 · CNPJ 48.808.073/0001-30
          </p>
          <p className="mt-5 max-w-3xl font-serif-italic text-xs leading-relaxed text-[var(--color-ivory)]/50">
            Este conteúdo tem caráter exclusivamente informativo e não constitui
            aconselhamento jurídico. A análise de casos específicos requer
            consulta profissional individualizada. Nenhum resultado jurídico
            pode ser garantido previamente; cada caso é avaliado conforme
            contrato, documentos e jurisprudência aplicável.
          </p>
          <p className="mt-6 text-xs text-[var(--color-ivory)]/40">
            © 2026 Barp.Hoff Advogadas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
