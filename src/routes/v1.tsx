import { createFileRoute } from "@tanstack/react-router";
import { GestantePage } from "./index";

/* /v1 — espelho da principal (/) pra comparação lado a lado com /v2 e /v3 */
export const Route = createFileRoute("/v1")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "v1 · Fui Demitida Grávida? | Dra. Pétria Azevedo" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "theme-color", content: "#3b1018" },
    ],
  }),
  component: GestantePage,
});
