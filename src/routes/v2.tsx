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
  ArrowRight,
  Check,
  Lock,
  Plus,
  Quote,
  Shield,
  Sparkles,
  Star,
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
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────
   PALETA "SERENO"
   Inline via Tailwind arbitrary values, sem tocar styles.css
   bone:        #F5F1EA  (fundo cremoso natural)
   bone-deep:   #ECE5D4  (alternado)
   forest:      #1F3329  (verde sálvia escuro, autoridade)
   forest-soft: #2C443A  (camadas)
   moss:        #5C6E5C  (acentos texto sobre claro)
   clay:        #C77A5C  (terracota, único quente)
   clay-soft:   #E8C5B0  (acento sutil)
   sage:        #C7CDB8  (separadores)
   ink:         #1B1A17  (texto)
   ───────────────────────────────────────────────────────────────── */

const C = {
  bone: "#F5F1EA",
  boneDeep: "#ECE5D4",
  forest: "#1F3329",
  forestSoft: "#2C443A",
  moss: "#5C6E5C",
  clay: "#C77A5C",
  claySoft: "#E8C5B0",
  sage: "#C7CDB8",
  ink: "#1B1A17",
} as const;

export const Route = createFileRoute("/v2")({
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
      { name: "theme-color", content: C.forest },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: SerenoPage,
});

function SerenoPage() {
  return (
    <main
      className="sereno min-h-screen"
      style={{
        background: C.bone,
        color: C.ink,
        fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
        fontFeatureSettings: '"ss01", "cv11"',
      }}
    >
      <style>{`
        .sereno h1, .sereno h2, .sereno h3, .sereno h4 {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.02;
          font-feature-settings: "ss01";
        }
        .sereno h3 { font-weight: 600; letter-spacing: -0.018em; line-height: 1.15; }
        .sereno h4 { font-weight: 600; letter-spacing: -0.015em; }
      `}</style>
      <Nav />
      <Hero />
      <Manifesto />
      <LegalChips />
      <Cases />
      <Process />
      <Story />
      <Office />
      <Faq />
      <Voices />
      <CtaFinal />
      <Foot />
      <StickyMobileCTA />
    </main>
  );
}

/* ─────────── helpers ─────────── */

const SerifI = ({ children, color }: { children: React.ReactNode; color?: string }) => (
  <span
    style={{
      fontFamily: '"Instrument Serif", ui-serif, Georgia, serif',
      fontStyle: "italic",
      fontWeight: 400,
      letterSpacing: "-0.005em",
      color,
    }}
  >
    {children}
  </span>
);

const Eyebrow = ({ children, color = C.moss }: { children: React.ReactNode; color?: string }) => (
  <span
    className="inline-block text-[10.5px] font-semibold uppercase"
    style={{ color, letterSpacing: "0.24em" }}
  >
    {children}
  </span>
);

const SectionLabel = ({
  index,
  title,
  align = "left",
  light,
}: {
  index: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) => (
  <div
    className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}
    style={{ color: light ? C.bone : C.ink }}
  >
    <span
      className="text-[11px] font-mono font-medium"
      style={{ color: light ? C.claySoft : C.clay, letterSpacing: "0.16em" }}
    >
      / {index}
    </span>
    <span
      className="text-[10.5px] font-semibold uppercase"
      style={{ color: light ? "rgba(245,241,234,0.7)" : C.moss, letterSpacing: "0.24em" }}
    >
      {title}
    </span>
  </div>
);

/* ─────────── NAV ─────────── */

function Nav() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: "rgba(245,241,234,0.82)",
        borderBottom: `1px solid rgba(27,26,23,0.06)`,
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/v2" className="flex items-center gap-2.5" aria-label="Barp.Hoff Advogadas">
          <span
            className="grid h-8 w-8 place-items-center rounded-full text-[14px] font-bold"
            style={{ background: C.forest, color: C.bone, fontFamily: '"Instrument Serif", serif' }}
          >
            B
          </span>
          <span className="font-semibold tracking-tight" style={{ color: C.ink, fontSize: 17 }}>
            Barp<span style={{ color: C.clay }}>·</span>Hoff
          </span>
          <span className="hidden text-[10px] font-semibold uppercase sm:inline" style={{ color: C.moss, letterSpacing: "0.22em" }}>
            Advogadas
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {[
            ["#casos", "Casos"],
            ["#processo", "Como funciona"],
            ["#escritorio", "Escritório"],
            ["#duvidas", "Dúvidas"],
          ].map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="text-[13px] font-medium transition"
              style={{ color: "rgba(27,26,23,0.7)" }}
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          type="button"
          data-wa-cta
          onClick={() => clickWhatsapp("v2-nav")}
          aria-label="Conversar com Advogada no WhatsApp"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition hover:opacity-90"
          style={{ background: C.forest, color: C.bone }}
        >
          <WhatsappIcon className="size-4" />
          <span className="hidden sm:inline">Conversar</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>
    </header>
  );
}

/* ─────────── HERO ─────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden" style={{ background: C.bone }}>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-20">
        {/* Coluna texto */}
        <div className="relative z-10 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-7 items-center gap-2 rounded-full px-3 text-[11px] font-semibold uppercase"
              style={{
                background: "rgba(199,122,92,0.12)",
                color: C.clay,
                letterSpacing: "0.16em",
              }}
            >
              <Sparkles className="size-3" aria-hidden="true" />
              Direito Trabalhista
            </span>
            <span style={{ color: "rgba(27,26,23,0.4)", fontSize: 12 }}>·</span>
            <span className="text-[12px] font-medium" style={{ color: "rgba(27,26,23,0.6)" }}>
              Gestante demitida
            </span>
          </div>

          <h1
            className="mt-6 text-[2.5rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.6rem]"
            style={{ color: C.ink }}
          >
            A lei{" "}
            <SerifI color={C.forest}>protege</SerifI>{" "}
            você,
            <br />
            <span style={{ color: "rgba(27,26,23,0.78)" }}>mesmo se a empresa</span>
            <br />
            <span style={{ color: "rgba(27,26,23,0.78)" }}>
              não <SerifI color={C.clay}>quis ver</SerifI>.
            </span>
          </h1>

          <p
            className="mt-7 max-w-lg text-pretty text-[15.5px] leading-[1.7] sm:text-[1.06rem]"
            style={{ color: "rgba(27,26,23,0.72)" }}
          >
            Demissão durante a gravidez, descoberta depois da demissão, pedido
            de demissão sob pressão, contrato de experiência, sem registro. A
            Justiça do Trabalho protege a gestante em todas essas situações.
          </p>

          {/* Stat row inline */}
          <div className="mt-9 grid grid-cols-3 gap-3 border-y py-5" style={{ borderColor: "rgba(27,26,23,0.10)" }}>
            <Stat n="17" suf="anos" sub="advocacia especializada" />
            <Stat n="5k+" sub="casos analisados" />
            <Stat n="6m" sub="tempo médio TST/CNJ" />
          </div>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp("v2-hero")}
              className="group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "#25D366",
                color: "white",
                boxShadow: "0 14px 32px -10px rgba(37,211,102,0.55)",
              }}
              aria-label="Conversar com Advogada no WhatsApp"
            >
              <WhatsappIcon className="size-5" />
              Conversar pelo WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <p className="flex items-center justify-center gap-2 text-[12.5px] sm:justify-start" style={{ color: "rgba(27,26,23,0.55)" }}>
              <Lock className="size-3.5" aria-hidden="true" />
              Sigilo profissional · Online · Brasil
            </p>
          </div>
        </div>

        {/* Coluna foto */}
        <div className="relative">
          {/* Stack de fotos com offset editorial */}
          <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]">
            <div
              className="absolute inset-0 overflow-hidden rounded-[28px]"
              style={{
                boxShadow: "0 30px 80px -30px rgba(31,51,41,0.45)",
              }}
            >
              <img
                src={heroImg}
                alt="Advogada em consulta jurídica"
                width={1280}
                height={1600}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.78) contrast(1.04)" }}
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(31,51,41,0.30) 0%, rgba(31,51,41,0.05) 45%, transparent 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, transparent 0%, rgba(199,122,92,0.08) 100%)",
                }}
              />
            </div>

            {/* Badge "real talk" sobreposta */}
            <div
              className="absolute -bottom-4 left-4 right-4 rounded-[20px] p-5 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[18rem]"
              style={{
                background: C.bone,
                boxShadow: "0 22px 44px -16px rgba(31,51,41,0.28)",
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full"
                  style={{ background: C.forest, color: C.bone }}
                >
                  <Shield className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase" style={{ color: C.clay, letterSpacing: "0.18em" }}>
                    Súmula 244 · TST
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-[1.5]" style={{ color: C.ink }}>
                    Estabilidade da gestante é automática a partir da
                    concepção. Independe do que a empresa sabia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha decorativa "Established" desktop */}
      <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 lg:block">
        <span
          className="text-[10px] font-semibold uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "rgba(27,26,23,0.4)", letterSpacing: "0.32em" }}
        >
          Est. 2008 · Curitiba · Br
        </span>
      </div>
    </section>
  );
}

function Stat({ n, suf, sub }: { n: string; suf?: string; sub: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[1.85rem] font-bold leading-none tracking-tight" style={{ color: C.forest }}>
          {n}
        </span>
        {suf && (
          <span className="text-[11px] font-medium" style={{ color: "rgba(27,26,23,0.55)" }}>
            {suf}
          </span>
        )}
      </div>
      <p className="mt-1.5 text-[11.5px] leading-tight" style={{ color: "rgba(27,26,23,0.55)" }}>
        {sub}
      </p>
    </div>
  );
}

/* ─────────── MANIFESTO ─────────── */

function Manifesto() {
  return (
    <section className="relative" style={{ background: C.bone }}>
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel index="01" title="Posicionamento" />
        <p
          className="mt-7 text-pretty text-[1.4rem] font-light leading-[1.32] tracking-[-0.01em] sm:text-[1.85rem] sm:leading-[1.28]"
          style={{ color: C.ink }}
        >
          Quando uma gestante é demitida sem justa causa,{" "}
          <SerifI color={C.clay}>mesmo que a gravidez tenha sido descoberta depois</SerifI>,
          a lei brasileira protege. Atuamos há mais de 17 anos com base na{" "}
          <span style={{ color: C.forest, fontWeight: 500 }}>Súmula 244 do TST</span>,
          no <span style={{ color: C.forest, fontWeight: 500 }}>Tema 497 do STF</span> e
          no <span style={{ color: C.forest, fontWeight: 500 }}>Art. 10, II, b do ADCT</span>.
        </p>
      </div>
    </section>
  );
}

/* ─────────── LEGAL CHIPS ─────────── */

function LegalChips() {
  const chips = [
    "Súmula 244 · TST",
    "Tema 497 · STF",
    "Art. 10, II, b · ADCT",
    "Art. 500 · CLT",
    "Temas 55 e 134 · TST",
    "CNJ · Justiça em Números 2025",
  ];
  return (
    <section style={{ background: C.boneDeep, borderTop: `1px solid rgba(27,26,23,0.05)`, borderBottom: `1px solid rgba(27,26,23,0.05)` }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-5 py-5 sm:gap-3 sm:px-8 sm:py-6">
        <Eyebrow color={C.moss}>Fundamentação</Eyebrow>
        <span style={{ color: "rgba(27,26,23,0.3)" }}>·</span>
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full px-3 py-1 text-[11.5px] font-medium"
            style={{ background: C.bone, color: C.forest, border: "1px solid rgba(31,51,41,0.12)" }}
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────── CASES ─────────── */

function Cases() {
  const cases = [
    {
      t: "Fui demitida sem justa causa",
      d: "Estabilidade prevista no Art. 10, II, b do ADCT. A demissão pode ser revertida.",
      n: "01",
      origin: "v2-case-sem-justa-causa",
    },
    {
      t: "Descobri a gravidez depois",
      d: "Súmula 244 e Tema 497 garantem proteção sem precisar do conhecimento prévio.",
      n: "02",
      origin: "v2-case-descobriu-depois",
    },
    {
      t: "Pedi demissão sem saber",
      d: "Sem assistência sindical, o pedido é nulo (Art. 500 CLT, Tema 55 TST).",
      n: "03",
      origin: "v2-case-pedi-demissao",
    },
    {
      t: "Contrato de experiência",
      d: "Súmula 244 III: estabilidade vale também em contratos por prazo determinado.",
      n: "04",
      origin: "v2-case-experiencia",
    },
    {
      t: "Sem carteira assinada",
      d: "É possível reconhecer o vínculo e garantir os direitos da gestante.",
      n: "05",
      origin: "v2-case-sem-registro",
    },
    {
      t: "Faltou indenização",
      d: "Salários do período de estabilidade, FGTS, 40%, férias, 13º e seguro-desemprego.",
      n: "06",
      origin: "v2-case-indenizacao",
    },
  ];

  return (
    <section id="casos" className="scroll-mt-20 py-20 sm:py-28" style={{ background: C.bone }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel index="02" title="Você se identifica" />
            <h2
              className="mt-5 text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.4rem]"
              style={{ color: C.ink }}
            >
              Seis cenários,{" "}
              <SerifI color={C.forest}>um caminho</SerifI>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.7]" style={{ color: "rgba(27,26,23,0.65)" }}>
              Toque no que mais se aproxima da sua situação. Cada um abre uma
              conversa direta com uma advogada no WhatsApp.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cases.map((c) => (
              <button
                key={c.origin}
                type="button"
                data-wa-cta
                onClick={() => clickWhatsapp(c.origin)}
                aria-label={`${c.t}. Conversar com advogada no WhatsApp.`}
                className="group relative flex h-full flex-col rounded-[20px] p-6 text-left transition-all duration-300 hover:-translate-y-1 sm:p-7"
                style={{
                  background: C.boneDeep,
                  border: `1px solid rgba(31,51,41,0.08)`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.bone)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.boneDeep)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono font-semibold"
                    style={{ color: C.clay, letterSpacing: "0.14em" }}
                  >
                    / {c.n}
                  </span>
                  <span
                    className="grid size-7 place-items-center rounded-full transition-transform group-hover:rotate-45"
                    style={{ background: "rgba(31,51,41,0.06)", color: C.forest }}
                  >
                    <Plus className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="mt-7 text-[1.2rem] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[1.3rem]"
                  style={{ color: C.ink }}
                >
                  {c.t}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6]" style={{ color: "rgba(27,26,23,0.62)" }}>
                  {c.d}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── PROCESS ─────────── */

function Process() {
  const steps = [
    {
      n: "01",
      t: "Você envia o que tem",
      d: "Pelo WhatsApp, manda carteira de trabalho, comprovante de gravidez, aviso de demissão. Se faltar algo, manda o que tem.",
    },
    {
      n: "02",
      t: "Avaliação individual",
      d: "Verificamos a situação à luz da Súmula 244 do TST, Art. 500 da CLT e Tema 497 do STF.",
    },
    {
      n: "03",
      t: "Orientação completa",
      d: "Explicamos o cenário, os direitos aplicáveis e os próximos passos possíveis. Sem compromisso.",
    },
  ];

  return (
    <section
      id="processo"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
      style={{ background: C.forest, color: C.bone }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(199,122,92,0.12), transparent 60%), radial-gradient(ellipse at 10% 90%, rgba(199,194,184,0.08), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel index="03" title="Como funciona" light />
          <h2
            className="mt-5 text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ color: C.bone }}
          >
            Três passos.{" "}
            <SerifI color={C.claySoft}>Sem juridiquês</SerifI>,
            <br />
            sem deslocamento, sem robô.
          </h2>
        </div>

        <ol className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-3 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div
                className="flex items-center gap-4 pb-5 mb-6"
                style={{ borderBottom: "1px solid rgba(245,241,234,0.18)" }}
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-full text-[15px] font-mono font-semibold"
                  style={{ background: "rgba(199,122,92,0.16)", color: C.claySoft, border: "1px solid rgba(199,122,92,0.3)" }}
                >
                  {s.n}
                </span>
                <span className="text-[11px] font-semibold uppercase" style={{ color: "rgba(245,241,234,0.6)", letterSpacing: "0.22em" }}>
                  Passo {i + 1}
                </span>
              </div>
              <h3 className="text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[1.65rem]" style={{ color: C.bone }}>
                {s.t}
              </h3>
              <p className="mt-3.5 text-[15px] leading-[1.7]" style={{ color: "rgba(245,241,234,0.75)" }}>
                {s.d}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-center sm:mt-20">
          <button
            type="button"
            data-wa-cta
            onClick={() => clickWhatsapp("v2-process")}
            className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold transition hover:scale-[1.02]"
            style={{ background: "#25D366", color: "white", boxShadow: "0 14px 32px -10px rgba(37,211,102,0.45)" }}
          >
            <WhatsappIcon className="size-5" />
            Começar conversa
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────── STORY ─────────── */

function Story() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: C.bone }}>
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Foto */}
        <div className="relative order-1 lg:sticky lg:top-24 lg:self-start">
          <div className="aspect-[4/5] overflow-hidden rounded-[28px]" style={{ boxShadow: "0 30px 80px -30px rgba(31,51,41,0.4)" }}>
            <img
              src={storyImg}
              alt="Mulher em ambiente acolhedor"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ filter: "saturate(0.78) contrast(1.05)" }}
            />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{ background: "linear-gradient(155deg, rgba(31,51,41,0.32), transparent 50%)" }}
            />
          </div>
          {/* Citação flutuante */}
          <div
            className="absolute -bottom-6 left-6 right-6 rounded-[20px] p-5 sm:left-auto sm:right-auto sm:bottom-6 sm:max-w-[20rem]"
            style={{ background: C.forest, color: C.bone, boxShadow: "0 22px 44px -16px rgba(31,51,41,0.4)" }}
          >
            <Quote className="size-4 mb-2" style={{ color: C.claySoft }} aria-hidden="true" />
            <p className="text-[14.5px] leading-[1.55]" style={{ color: "rgba(245,241,234,0.92)" }}>
              <SerifI>6 meses e 17 dias</SerifI> é o tempo médio da Justiça do
              Trabalho para julgar um processo em 2025.
            </p>
            <p className="mt-3 text-[10.5px] uppercase font-semibold" style={{ color: "rgba(245,241,234,0.55)", letterSpacing: "0.22em" }}>
              CNJ · Justiça em Números
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="order-2">
          <SectionLabel index="04" title="Contexto" />
          <h2
            className="mt-5 text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ color: C.ink }}
          >
            Muitas gestantes{" "}
            <SerifI color={C.clay}>desistem cedo demais</SerifI>.
          </h2>

          <div className="mt-7 space-y-5 text-[15.5px] leading-[1.75]" style={{ color: "rgba(27,26,23,0.78)" }}>
            <p>
              Medo, vergonha, desinformação. Acham que processar empresa é
              demorado, que precisam de provas demais, que perderam o direito
              porque pediram demissão ou porque descobriram a gravidez depois.
            </p>
            <p>
              A maioria está enganada. A jurisprudência brasileira protege a
              gestante mesmo nas situações mais difíceis.
            </p>
          </div>

          {/* Cards de "erros" como lista limpa */}
          <div
            className="mt-9 rounded-[20px] p-6 sm:p-7"
            style={{ background: C.boneDeep, border: "1px solid rgba(31,51,41,0.08)" }}
          >
            <p className="text-[11px] font-semibold uppercase" style={{ color: C.clay, letterSpacing: "0.22em" }}>
              Evite estes quatro
            </p>
            <ul className="mt-5 space-y-3.5">
              {[
                "Aceitar a situação sem questionar.",
                "Assinar pedido de demissão sob pressão sem assistência sindical.",
                "Esperar muito tempo. Existe prazo prescricional.",
                "Pagar advogado errado por desespero.",
              ].map((t, i) => (
                <li key={t} className="flex items-baseline gap-3 text-[14.5px] leading-[1.5]" style={{ color: C.ink }}>
                  <span
                    className="text-[11px] font-mono font-semibold pt-1"
                    style={{ color: C.clay, minWidth: 24, letterSpacing: "0.1em" }}
                  >
                    / 0{i + 1}
                  </span>
                  <span style={{ color: "rgba(27,26,23,0.85)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── OFFICE ─────────── */

function Office() {
  return (
    <section id="escritorio" className="scroll-mt-20 py-20 sm:py-28" style={{ background: C.boneDeep }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel index="05" title="O escritório" align="center" />
          <h2
            className="mt-5 text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.6rem]"
            style={{ color: C.ink }}
          >
            <SerifI color={C.forest}>Barp·Hoff</SerifI> Advogadas.
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7]" style={{ color: "rgba(27,26,23,0.7)" }}>
            Escritório formado por advogadas, dedicado a representar mulheres
            trabalhadoras e gestantes em todo o Brasil. Atendimento
            individualizado, com base em jurisprudência consolidada.
          </p>
        </div>

        {/* Bentos */}
        <div className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-6 sm:gap-4">
          {/* Bento principal: advogadas */}
          <div
            className="sm:col-span-3 rounded-[24px] p-7"
            style={{ background: C.forest, color: C.bone }}
          >
            <p className="text-[11px] font-semibold uppercase" style={{ color: C.claySoft, letterSpacing: "0.22em" }}>
              Sócias fundadoras
            </p>
            <div className="mt-7 space-y-5">
              <div>
                <p className="text-[1.25rem] font-semibold leading-tight tracking-tight" style={{ color: C.bone }}>
                  Dra. Alexandra Barp Salgado
                </p>
                <p className="mt-1 text-[12px] font-mono" style={{ color: "rgba(245,241,234,0.6)", letterSpacing: "0.16em" }}>
                  OAB / PR 56.903-N
                </p>
              </div>
              <div className="h-px" style={{ background: "rgba(245,241,234,0.18)" }} />
              <div>
                <p className="text-[1.25rem] font-semibold leading-tight tracking-tight" style={{ color: C.bone }}>
                  Dra. Jessica Cristina Hoff Bueno Garcia
                </p>
                <p className="mt-1 text-[12px] font-mono" style={{ color: "rgba(245,241,234,0.6)", letterSpacing: "0.16em" }}>
                  OAB / PR 99.905
                </p>
              </div>
            </div>
          </div>

          {/* Bento estatística */}
          <div
            className="sm:col-span-3 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:grid-rows-2"
          >
            {[
              { n: "17", suf: "anos", lab: "Atuação especializada" },
              { n: "5k+", lab: "Casos analisados" },
              { n: "100%", lab: "Atendimento online" },
              { n: "BR", lab: "Cobertura nacional" },
            ].map((s) => (
              <div
                key={s.lab}
                className="rounded-[20px] p-5"
                style={{ background: C.bone, border: "1px solid rgba(31,51,41,0.08)" }}
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[2rem] font-bold leading-none tracking-tight" style={{ color: C.forest }}>
                    {s.n}
                  </span>
                  {s.suf && (
                    <span className="text-[11px]" style={{ color: "rgba(27,26,23,0.55)" }}>
                      {s.suf}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[12.5px] leading-tight" style={{ color: "rgba(27,26,23,0.6)" }}>
                  {s.lab}
                </p>
              </div>
            ))}
          </div>

          {/* Faixa CTA */}
          <div
            className="sm:col-span-6 mt-1 rounded-[20px] p-5 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            style={{ background: C.bone, border: "1px solid rgba(31,51,41,0.08)" }}
          >
            <p className="text-[15.5px] leading-[1.5]" style={{ color: C.ink }}>
              <SerifI color={C.forest}>Conversar com uma advogada hoje</SerifI> não
              gera compromisso de prosseguir.
            </p>
            <button
              type="button"
              data-wa-cta
              onClick={() => clickWhatsapp("v2-office")}
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-[14px] font-semibold transition hover:scale-[1.02]"
              style={{ background: "#25D366", color: "white" }}
            >
              <WhatsappIcon className="size-4" />
              Falar agora
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FAQ ─────────── */

function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-20 py-20 sm:py-28" style={{ background: C.bone }}>
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <SectionLabel index="06" title="Dúvidas mais comuns" align="center" />
          <h2
            className="mt-5 text-[2.3rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[2.8rem] lg:text-[3.2rem]"
            style={{ color: C.ink }}
          >
            O que <SerifI color={C.forest}>importa saber</SerifI>.
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 space-y-2"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-[18px] border-0 overflow-hidden"
              style={{ background: C.boneDeep }}
            >
              <AccordionTrigger
                className="group gap-4 px-6 py-5 text-left hover:no-underline [&>svg]:transition-transform"
                style={{ color: C.ink }}
              >
                <span className="flex items-baseline gap-3.5">
                  <span
                    className="shrink-0 text-[11px] font-mono font-semibold"
                    style={{ color: C.clay, letterSpacing: "0.14em" }}
                  >
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold leading-[1.4] tracking-tight sm:text-[16px]">
                    {item.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="px-6 pb-5 pl-[3.3rem] text-[14.5px] leading-[1.7]"
                style={{ color: "rgba(27,26,23,0.7)" }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─────────── VOICES (reviews) ─────────── */

function Voices() {
  const r = [
    {
      t: "Atendimento muito profissional e atencioso. As advogadas explicaram tudo com clareza e me deixaram muito mais tranquila.",
      a: "Cliente verificada",
    },
    {
      t: "Equipe maravilhosa. Conheci o escritório em um momento difícil e me senti acolhida do começo ao fim.",
      a: "Cliente verificada",
    },
    {
      t: "Atendimento online prático e sério, trataram meu caso com muito respeito.",
      a: "Cliente verificada",
    },
    {
      t: "Profissionais sérias, comunicação rápida e clara. Me senti segura em cada etapa.",
      a: "Cliente verificada",
    },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ background: C.boneDeep }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionLabel index="07" title="O que dizem" align="center" />
          <div
            className="inline-flex items-center gap-3 rounded-full px-4 py-2"
            style={{ background: C.bone, border: "1px solid rgba(31,51,41,0.1)" }}
          >
            <span className="text-[13px] font-semibold" style={{ color: C.ink }}>
              Google
            </span>
            <span className="h-3.5 w-px" style={{ background: "rgba(27,26,23,0.2)" }} />
            <span className="flex items-center gap-0.5" style={{ color: C.clay }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-[13px] font-semibold" style={{ color: C.ink }}>
              4,9
            </span>
          </div>
          <h2
            className="text-[2.3rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[2.8rem] lg:text-[3.2rem]"
            style={{ color: C.ink }}
          >
            Vozes de quem <SerifI color={C.forest}>já passou por aqui</SerifI>.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {r.map((rev, i) => (
            <figure
              key={i}
              className="rounded-[24px] p-7 sm:p-8"
              style={{ background: C.bone, border: "1px solid rgba(31,51,41,0.08)" }}
            >
              <div className="flex items-center gap-0.5" style={{ color: C.clay }}>
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-[1.05rem] leading-[1.5] tracking-[-0.005em] sm:text-[1.12rem]" style={{ color: C.ink }}>
                <SerifI>“</SerifI>
                {rev.t}
                <SerifI>”</SerifI>
              </blockquote>
              <figcaption
                className="mt-6 text-[11px] font-semibold uppercase"
                style={{ color: C.moss, letterSpacing: "0.22em" }}
              >
                — {rev.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── FINAL CTA ─────────── */

function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: C.forest, color: C.bone }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(199,122,92,0.18), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(199,194,184,0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionLabel index="08" title="Próximo passo" align="center" light />

        <h2
          className="mt-7 text-[2.6rem] font-bold leading-[1.0] tracking-[-0.035em] sm:text-[3.8rem] lg:text-[4.6rem]"
          style={{ color: C.bone }}
        >
          Você não{" "}
          <SerifI color={C.claySoft}>precisa passar</SerifI>
          <br />
          por isso{" "}
          <SerifI color={C.claySoft}>sozinha</SerifI>.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.7]" style={{ color: "rgba(245,241,234,0.82)" }}>
          Mande sua situação. A análise jurídica é individual e você decide se
          quer prosseguir depois.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            data-wa-cta
            onClick={() => clickWhatsapp("v2-final")}
            className="inline-flex items-center gap-3 rounded-full px-8 py-5 text-[16px] font-semibold transition hover:scale-[1.03] active:scale-[0.98] sm:text-[17px]"
            style={{
              background: "#25D366",
              color: "white",
              boxShadow: "0 18px 44px -14px rgba(37,211,102,0.55)",
            }}
            aria-label="Conversar com Advogada no WhatsApp"
          >
            <WhatsappIcon className="size-6" />
            Conversar pelo WhatsApp
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-9 flex flex-col items-center gap-3 text-[13.5px] sm:flex-row sm:justify-center sm:gap-x-7 sm:gap-y-2" style={{ color: "rgba(245,241,234,0.7)" }}>
          {[
            "Direto com advogada",
            "Sigilo profissional",
            "Online no Brasil",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Check className="size-3.5" style={{ color: C.claySoft }} aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */

function Foot() {
  return (
    <footer style={{ background: "#141A16", color: "rgba(245,241,234,0.65)" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 pb-24 sm:px-8 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="/v2" className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-full text-[14px] font-bold"
                style={{ background: C.bone, color: C.forest, fontFamily: '"Instrument Serif", serif' }}
              >
                B
              </span>
              <span className="font-semibold tracking-tight" style={{ color: C.bone, fontSize: 17 }}>
                Barp<span style={{ color: C.clay }}>·</span>Hoff
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-[1.7]">
              Direito Trabalhista e Direitos da Mulher. Atendimento online em
              todo o Brasil.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase" style={{ color: C.claySoft, letterSpacing: "0.22em" }}>
              Atuação
            </p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>Atendimento nacional</li>
              <li>100% online</li>
              <li>Sem deslocamento</li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase" style={{ color: C.claySoft, letterSpacing: "0.22em" }}>
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a href="/politica-de-privacidade" className="transition hover:opacity-100" style={{ opacity: 0.8 }}>
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="transition hover:opacity-100" style={{ opacity: 0.8 }}>
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t pt-8" style={{ borderColor: "rgba(245,241,234,0.1)" }}>
          <p className="text-[12px]" style={{ color: "rgba(245,241,234,0.5)" }}>
            Dra. Alexandra Barp Salgado, OAB/PR 56.903-N · Dra. Jessica Cristina
            Hoff Bueno Garcia, OAB/PR 99.905 · CNPJ 48.808.073/0001-30
          </p>
          <p
            className="mt-5 max-w-3xl text-[12px] italic leading-[1.7]"
            style={{ color: "rgba(245,241,234,0.42)", fontFamily: '"Instrument Serif", serif' }}
          >
            Este conteúdo tem caráter exclusivamente informativo e não constitui
            aconselhamento jurídico. A análise de casos específicos requer
            consulta profissional individualizada. Nenhum resultado jurídico
            pode ser garantido previamente; cada caso é avaliado conforme
            contrato, documentos e jurisprudência aplicável.
          </p>
          <p className="mt-6 text-[12px]" style={{ color: "rgba(245,241,234,0.35)" }}>
            © 2026 Barp.Hoff Advogadas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
