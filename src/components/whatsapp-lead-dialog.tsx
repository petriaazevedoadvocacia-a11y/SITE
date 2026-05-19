/**
 * WhatsappLeadDialog
 * ──────────────────
 * Mini-form de triagem que abre quando a usuária clica no CTA da LP.
 * Coleta 3 dados rápidos (situação, nome opcional, tempo) e compõe uma
 * mensagem personalizada no WhatsApp da Dra. Pétria. Isso permite à advogada
 * receber o lead já classificado e otimiza o tempo da primeira resposta.
 *
 * API: useWhatsappLead().open({ origin, prefillSituation? })
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { WhatsappIcon } from "@/components/whatsapp-button";
import { clickWhatsapp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Lock, ArrowRight, Check } from "lucide-react";

const WA_NUMBER = "552732082264";

const SITUATIONS = [
  { id: "sem-justa-causa", label: "Fui demitida sem justa causa durante a gestação" },
  { id: "descobri-depois", label: "Descobri grávida depois da demissão" },
  { id: "pedi-demissao", label: "Pedi demissão grávida (com ou sem saber)" },
  { id: "experiencia", label: "Estava em contrato de experiência" },
  { id: "sem-registro", label: "Trabalhava sem registro em carteira" },
  { id: "indenizacao", label: "Não recebi a indenização da estabilidade" },
  { id: "outra", label: "Outra situação" },
] as const;

const TIMINGS = [
  { id: "0-30", label: "Há menos de 30 dias" },
  { id: "1-6m", label: "Entre 1 e 6 meses" },
  { id: "6-12m", label: "Entre 6 meses e 1 ano" },
  { id: "1y+", label: "Mais de 1 ano atrás" },
  { id: "nao-sei", label: "Prefiro não dizer agora" },
] as const;

type SituationId = (typeof SITUATIONS)[number]["id"];

type OpenArgs = { origin: string; prefillSituation?: SituationId };

type Ctx = { open: (args: OpenArgs) => void };

const WhatsappLeadContext = createContext<Ctx | null>(null);

export function useWhatsappLead(): Ctx {
  const ctx = useContext(WhatsappLeadContext);
  if (!ctx) throw new Error("useWhatsappLead deve ser usado dentro de <WhatsappLeadProvider>");
  return ctx;
}

export function WhatsappLeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<string>("unknown");
  const [situation, setSituation] = useState<SituationId>("sem-justa-causa");
  const [name, setName] = useState("");
  const [timing, setTiming] = useState<string>("nao-sei");

  const open = useCallback((args: OpenArgs) => {
    setOrigin(args.origin);
    if (args.prefillSituation) setSituation(args.prefillSituation);
    setIsOpen(true);
    // Tracking: lead qualificação iniciada
    try {
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lead_form_open", {
        origin: args.origin,
        prefill_situation: args.prefillSituation ?? "none",
      });
    } catch {
      /* ga não carregou */
    }
  }, []);

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      const sit = SITUATIONS.find((s) => s.id === situation)?.label ?? "Não informado";
      const t = TIMINGS.find((t) => t.id === timing)?.label ?? "Não informado";
      const cleanName = name.trim();
      const greeting = cleanName ? `Olá Dra. Pétria, meu nome é ${cleanName}.` : "Olá Dra. Pétria.";

      const message = [
        greeting,
        "",
        "Vim pelo site sobre direitos da gestante demitida.",
        "",
        `▸ Minha situação: ${sit}`,
        `▸ Quando aconteceu: ${t}`,
        "",
        "Gostaria de entender melhor o meu caso.",
      ].join("\n");

      const url = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(message)}`;

      // Track conversion antes de abrir
      clickWhatsapp(`lead-form-${origin}-${situation}`);

      try {
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lead_form_submit", {
          origin,
          situation,
          timing,
          named: !!cleanName,
        });
      } catch {
        /* ga não carregou */
      }

      window.open(url, "_blank", "noopener,noreferrer");
      setIsOpen(false);
    },
    [name, situation, timing, origin],
  );

  const value = useMemo(() => ({ open }), [open]);

  return (
    <WhatsappLeadContext.Provider value={value}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="
            max-h-[92vh] gap-0 overflow-y-auto border-0 p-0
            inset-x-0 bottom-0 top-auto translate-x-0 translate-y-0
            w-full max-w-none rounded-t-3xl rounded-b-none
            bg-[var(--color-cream)]
            data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom
            sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
            sm:max-w-md sm:rounded-2xl
          "
        >
          {/* Header */}
          <div className="relative border-b border-[var(--color-bordeaux)]/10 bg-[var(--color-bordeaux-deep)] px-6 pb-5 pt-6 text-[var(--color-cream)] sm:rounded-t-2xl">
            <div className="mx-auto h-1 w-10 rounded-full bg-[var(--color-cream)]/25 sm:hidden" aria-hidden />
            <div className="mt-3 flex items-center gap-3 sm:mt-0">
              <span className="grid size-10 place-items-center rounded-full bg-[var(--color-champagne)]/15 ring-1 ring-[var(--color-champagne)]/40">
                <WhatsappIcon className="size-5 text-[var(--color-champagne)]" />
              </span>
              <div className="flex-1">
                <DialogTitle className="font-display text-[1.1rem] font-semibold leading-tight text-[var(--color-cream)]">
                  Falar com a Dra. Pétria
                </DialogTitle>
                <DialogDescription className="mt-0.5 text-[12px] text-[var(--color-cream)]/70">
                  Responda 3 perguntas rápidas pra acelerar seu atendimento.
                </DialogDescription>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-7 sm:py-7">
            {/* Pergunta 1 — Situação */}
            <fieldset>
              <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">
                01 · Qual a sua situação?
              </legend>
              <p className="mt-1 text-[12px] text-foreground/60">Escolha a que mais combina.</p>
              <div className="mt-3 grid gap-1.5">
                {SITUATIONS.map((s) => {
                  const active = situation === s.id;
                  return (
                    <label
                      key={s.id}
                      className={`group flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-3 transition ${
                        active
                          ? "border-[var(--color-bordeaux)] bg-[var(--color-bordeaux)]/[0.06]"
                          : "border-[var(--color-bordeaux)]/12 bg-card hover:border-[var(--color-bordeaux)]/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="situation"
                        value={s.id}
                        checked={active}
                        onChange={() => setSituation(s.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden
                        className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border-2 transition ${
                          active
                            ? "border-[var(--color-bordeaux)] bg-[var(--color-bordeaux)]"
                            : "border-foreground/30 bg-transparent"
                        }`}
                      >
                        {active && <Check className="size-2.5 text-[var(--color-cream)]" strokeWidth={3} />}
                      </span>
                      <span className="text-[13.5px] leading-[1.4] text-foreground">{s.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Pergunta 2 — Tempo */}
            <fieldset className="mt-6">
              <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">
                02 · Quando aconteceu?
              </legend>
              <select
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                className="mt-3 block w-full rounded-xl border border-[var(--color-bordeaux)]/15 bg-card px-4 py-3 text-[14px] text-foreground shadow-soft focus:border-[var(--color-bordeaux)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)]/20"
              >
                {TIMINGS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Pergunta 3 — Nome (opcional) */}
            <fieldset className="mt-6">
              <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)]">
                03 · Como podemos te chamar?{" "}
                <span className="font-normal normal-case tracking-normal text-foreground/45">
                  (opcional)
                </span>
              </legend>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu primeiro nome"
                autoComplete="given-name"
                maxLength={40}
                className="mt-3 block w-full rounded-xl border border-[var(--color-bordeaux)]/15 bg-card px-4 py-3 text-[14px] text-foreground shadow-soft placeholder:text-foreground/35 focus:border-[var(--color-bordeaux)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)]/20"
              />
            </fieldset>

            {/* CTA submit */}
            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-whatsapp)] px-6 py-4 text-[15px] font-semibold text-white shadow-warm transition hover:bg-[var(--color-whatsapp-deep)] hover:scale-[1.01] active:scale-[0.99]"
            >
              <WhatsappIcon className="size-5" />
              Continuar conversa pelo WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </button>

            {/* Microcopy */}
            <p className="mt-4 flex items-center justify-center gap-2 text-[11.5px] text-foreground/60">
              <Lock className="size-3.5" aria-hidden />
              Sigilo profissional · Atendimento direto com a Dra. Pétria
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </WhatsappLeadContext.Provider>
  );
}

/** Map dos origins dos cards Identify para as ids de situação do form. */
export function originToSituation(origin: string): SituationId | undefined {
  if (origin.includes("sem-justa-causa")) return "sem-justa-causa";
  if (origin.includes("descobriu-depois")) return "descobri-depois";
  if (origin.includes("pedi-demissao")) return "pedi-demissao";
  if (origin.includes("experiencia")) return "experiencia";
  if (origin.includes("sem-registro")) return "sem-registro";
  if (origin.includes("indenizacao")) return "indenizacao";
  return undefined;
}

/* ─────────── botões prontos que abrem o lead form ─────────── */

type LeadButtonProps = {
  origin: string;
  prefillSituation?: SituationId;
  label?: string;
  size?: "md" | "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
};

/** Botão verde WhatsApp que, em vez de ir direto, abre o mini-form. */
export function LeadButton({
  origin,
  prefillSituation,
  label = "Falar com a Dra. Pétria",
  size = "lg",
  fullWidth,
  className,
}: LeadButtonProps) {
  const { open } = useWhatsappLead();
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type="button"
      onClick={() => open({ origin, prefillSituation })}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      aria-label={label}
      data-wa-cta
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-tight",
        "bg-[var(--color-whatsapp)] text-white shadow-warm",
        "transition-all duration-200 ease-out",
        "hover:bg-[var(--color-whatsapp-deep)] hover:scale-[1.02]",
        "active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,var(--color-whatsapp)_40%,transparent)]",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-7 py-4 text-base sm:text-lg",
        size === "xl" && "px-8 py-5 text-lg sm:text-xl",
        fullWidth && "w-full",
        pressed && "scale-[0.98]",
        className,
      )}
    >
      <WhatsappIcon className={cn(size === "xl" ? "size-7" : "size-6")} />
      <span>{label}</span>
    </button>
  );
}

/** Sticky CTA bottom mobile que abre o lead form. */
export function LeadStickyCTA() {
  const { open } = useWhatsappLead();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const otherCtas = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-wa-cta]:not([data-sticky])"));
    const update = () => {
      ticking = false;
      const scrolled = window.scrollY > 200;
      if (!scrolled) {
        setVisible(false);
        return;
      }
      const vh = window.innerHeight;
      const overlap = otherCtas().some((el) => {
        const r = el.getBoundingClientRect();
        return r.bottom > 60 && r.top < vh - 40;
      });
      setVisible(!overlap);
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      data-sticky
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pb-4 pt-3",
        "bg-gradient-to-t from-background via-background/95 to-background/0",
        "transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <button
        type="button"
        data-wa-cta
        data-sticky
        aria-label="Falar com a Dra. Pétria no WhatsApp"
        onClick={() => open({ origin: "sticky-mobile" })}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-whatsapp)] px-6 py-4 text-base font-semibold text-white shadow-warm active:scale-[0.98] transition-transform"
      >
        <WhatsappIcon className="size-6" />
        Falar com a Dra. Pétria agora
      </button>
    </div>
  );
}
