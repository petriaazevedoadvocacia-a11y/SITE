import { useEffect, useState } from "react";
import { clickWhatsapp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  origin: string;
  label?: string;
  className?: string;
  size?: "md" | "lg" | "xl";
  fullWidth?: boolean;
};

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.55c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.91 2.92 4.62 4.1.65.28 1.15.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.05 27.4h-.01a11.36 11.36 0 0 1-5.79-1.59l-.42-.25-4.31 1.13 1.15-4.2-.27-.43A11.36 11.36 0 0 1 4.71 16c0-6.27 5.1-11.37 11.36-11.37 3.04 0 5.89 1.18 8.04 3.33a11.3 11.3 0 0 1 3.32 8.05c0 6.27-5.1 11.39-11.38 11.39zm9.67-21.04A13.45 13.45 0 0 0 16.05 2C8.6 2 2.55 8.05 2.55 15.5c0 2.38.62 4.71 1.81 6.76L2.43 30l7.91-2.07c1.97 1.07 4.19 1.64 6.45 1.64h.01c7.45 0 13.5-6.05 13.5-13.5 0-3.61-1.4-7-3.95-9.55z" />
    </svg>
  );
}

export function WhatsappButton({
  origin,
  label = "Falar com a Dra. Pétria",
  className,
  size = "lg",
  fullWidth,
}: Props) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type="button"
      onClick={() => clickWhatsapp(origin)}
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
        className
      )}
    >
      <WhatsappIcon className={cn(size === "xl" ? "size-7" : "size-6")} />
      <span>{label}</span>
    </button>
  );
}

export { WhatsappIcon };

// Sticky mobile CTA: shows after 650px scroll, hides if any other WA CTA is in viewport
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const otherCtas = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>("[data-wa-cta]:not([data-sticky])")
      );

    const update = () => {
      ticking = false;
      const scrolled = window.scrollY > 200;
      if (!scrolled) {
        setVisible(false);
        return;
      }
      // hide if any other CTA visible in viewport
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
        "fixed inset-x-0 bottom-0 z-50 md:hidden px-4 pb-4 pt-3",
        "bg-gradient-to-t from-background via-background/95 to-background/0",
        "transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <button
        type="button"
        data-wa-cta
        data-sticky
        aria-label="Falar com a Dra. Pétria no WhatsApp"
        onClick={() => clickWhatsapp("sticky-mobile")}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-whatsapp)] px-6 py-4 text-base font-semibold text-white shadow-warm active:scale-[0.98] transition-transform"
      >
        <WhatsappIcon className="size-6" />
        Fale com advogado agora mesmo
      </button>
    </div>
  );
}
