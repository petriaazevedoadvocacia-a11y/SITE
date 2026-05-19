import { createFileRoute } from "@tanstack/react-router";
import logoSymbol from "@/assets/azevedo-symbol.png";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Termos de Uso · Dra. Pétria Azevedo" },
      {
        name: "description",
        content:
          "Termos de Uso do site informativo da Dra. Pétria Azevedo Advocacia. Caráter informativo, ausência de promessa de resultado e alinhamento ao Provimento 205/2021 da OAB.",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#3b1018" },
    ],
  }),
  component: TermosUso,
});

function TermosUso() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--color-champagne)]" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bordeaux)]">
            Legal
          </span>
        </div>
        <h1 className="mt-5 text-[2rem] leading-[1.08] sm:text-4xl">
          Termos de{" "}
          <span className="font-serif-italic text-[var(--color-bordeaux)]">
            Uso
          </span>
        </h1>
        <p className="mt-3 text-sm text-foreground/60">
          Última atualização: maio de 2026
        </p>

        <section className="mt-10 space-y-8 text-[15px] leading-[1.75] text-foreground/82 sm:text-base">
          <p>
            Estes Termos de Uso disciplinam a utilização do site{" "}
            <a
              href="https://petriaazevedo.com.br"
              className="text-[var(--color-bordeaux)] underline-offset-4 hover:underline"
            >
              petriaazevedo.com.br
            </a>
            , mantido pelo escritório{" "}
            <strong>Dra. Pétria Azevedo Advocacia</strong>. Ao acessar o
            site, você declara estar ciente e de acordo com as condições
            descritas a seguir.
          </p>

          <Section title="1. Caráter informativo do site">
            <p>
              Este site tem natureza estritamente informativa. Seu conteúdo
              destina-se a apresentar a atuação do escritório, esclarecer
              dúvidas frequentes sobre direitos da gestante trabalhadora e
              oferecer canal direto de contato com a equipe jurídica.
            </p>
            <p>
              <strong>
                As informações publicadas não substituem a análise
                individualizada de cada caso e não constituem aconselhamento
                jurídico.
              </strong>{" "}
              Cada situação concreta exige avaliação técnica baseada em
              documentos, datas e particularidades específicas.
            </p>
          </Section>

          <Section title="2. Ausência de promessa de resultado">
            <p>
              Em alinhamento ao{" "}
              <strong>
                Provimento nº 205/2021 do Conselho Federal da OAB
              </strong>{" "}
              e ao Código de Ética e Disciplina da advocacia, o conteúdo
              deste site não contém promessa de resultado, garantia de êxito
              em demandas judiciais, valores específicos de indenização ou
              expressões superlativas de captação.
            </p>
            <p>
              Toda referência a leis, súmulas, temas e jurisprudência
              presente no site tem propósito exclusivamente informativo e
              educacional.
            </p>
          </Section>

          <Section title="3. Não constituição de relação contratual pelo site">
            <p>
              O preenchimento do formulário de contato e o envio de mensagem
              pelo WhatsApp não constituem, por si só, contratação de
              serviços advocatícios. Eventual prestação de serviços jurídicos
              dependerá de:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Análise prévia da viabilidade técnica e ética do caso;</li>
              <li>
                Aceitação expressa do escritório quanto à condução da
                demanda;
              </li>
              <li>
                Formalização da contratação por meio de contrato de
                prestação de serviços advocatícios, com cláusulas, honorários
                e responsabilidades definidos.
              </li>
            </ul>
          </Section>

          <Section title="4. Sigilo profissional">
            <p>
              Todas as informações compartilhadas durante o contato inicial
              estão protegidas pelo <strong>sigilo profissional</strong>{" "}
              previsto no art. 7º, XIX, da Lei 8.906/1994 (Estatuto da
              Advocacia) e no Código de Ética da OAB, independentemente da
              formalização ou não da contratação.
            </p>
          </Section>

          <Section title="5. Uso permitido e proibido">
            <p>O acesso e a utilização do site são livres, observando-se que é vedado:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Utilizar o conteúdo do site, no todo ou em parte, para fins
                comerciais sem autorização prévia e expressa;
              </li>
              <li>
                Reproduzir, redistribuir, modificar ou criar obra derivada
                do conteúdo sem autorização;
              </li>
              <li>
                Acessar o site por meios automatizados que possam prejudicar
                seu funcionamento;
              </li>
              <li>
                Inserir conteúdo falso, ofensivo, ilícito ou que viole
                direitos de terceiros nos formulários do site;
              </li>
              <li>
                Utilizar o canal de contato para fins distintos da busca por
                orientação jurídica nas áreas de atuação do escritório.
              </li>
            </ul>
          </Section>

          <Section title="6. Propriedade intelectual">
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens,
              identidade visual, marca, layout e estrutura, é protegido pela
              legislação de direitos autorais (Lei 9.610/1998) e de
              propriedade industrial, e pertence ao escritório{" "}
              <strong>Dra. Pétria Azevedo Advocacia</strong> ou a terceiros
              que autorizaram sua utilização.
            </p>
          </Section>

          <Section title="7. Limitação de responsabilidade">
            <p>
              O escritório envida esforços razoáveis para manter o site
              disponível, atualizado e seguro, mas não garante a ausência de
              interrupções, erros ou indisponibilidades pontuais.
            </p>
            <p>
              O escritório não se responsabiliza por decisões tomadas
              exclusivamente com base em conteúdo genérico publicado no
              site, sem a devida análise jurídica individualizada.
            </p>
          </Section>

          <Section title="8. Links para sites externos">
            <p>
              Eventuais links para sites de terceiros (Google, OAB,
              tribunais, redes sociais) são oferecidos por conveniência. O
              escritório não se responsabiliza pelo conteúdo, pelas práticas
              de privacidade ou pelas políticas desses sites.
            </p>
          </Section>

          <Section title="9. Política de Privacidade">
            <p>
              A coleta e o tratamento de dados pessoais pelo site são
              regidos pela{" "}
              <a
                href="/politica-de-privacidade"
                className="text-[var(--color-bordeaux)] underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </a>
              , parte integrante destes Termos.
            </p>
          </Section>

          <Section title="10. Alterações nestes termos">
            <p>
              Estes Termos podem ser revisados a qualquer momento. A versão
              em vigor é sempre a publicada nesta página, com data de
              atualização visível no topo. Recomenda-se consulta periódica.
            </p>
          </Section>

          <Section title="11. Lei aplicável e foro">
            <p>
              Estes Termos são regidos pela legislação brasileira. Para
              dirimir eventuais controvérsias, fica eleito o foro da Comarca
              de Vitória, Estado do Espírito Santo, salvo previsão legal em
              contrário aplicável ao consumidor.
            </p>
          </Section>

          <Section title="12. Contato">
            <p>
              Dúvidas e solicitações relacionadas a estes Termos de Uso
              podem ser encaminhadas para:
            </p>
            <p className="mt-3">
              <strong>Dra. Pétria Azevedo Advocacia</strong>
              <br />
              OAB/ES 23.648 · CNPJ 60.441.824/0001-29
              <br />
              E-mail:{" "}
              <a
                href="mailto:contato@petriaazevedo.com.br"
                className="text-[var(--color-bordeaux)] hover:underline"
              >
                contato@petriaazevedo.com.br
              </a>
              <br />
              Telefone: +55 (27) 3208-2264
            </p>
          </Section>
        </section>

        <div className="mt-16 border-t border-border pt-8 text-sm text-foreground/60">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-[var(--color-bordeaux)] hover:underline"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-[1.15rem] font-semibold text-foreground sm:text-[1.25rem]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logoSymbol} alt="Azevedo Advocacia" width={32} height={32} className="size-8" />
          <span className="font-serif-italic text-base text-[var(--color-bordeaux)] sm:text-lg">
            Pétria Azevedo
          </span>
        </a>
        <a
          href="/"
          className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bordeaux)] hover:opacity-80"
        >
          ← Início
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--color-bordeaux-deep)] py-10 text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-5 text-center text-[13px] text-[var(--color-cream)]/70 sm:px-8">
        <p>
          © 2026 Dra. Pétria Azevedo Advocacia · OAB/ES 23.648 · CNPJ
          60.441.824/0001-29
        </p>
      </div>
    </footer>
  );
}
