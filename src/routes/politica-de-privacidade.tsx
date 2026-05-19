import { createFileRoute } from "@tanstack/react-router";
import logoSymbol from "@/assets/azevedo-symbol.png";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Política de Privacidade · Dra. Pétria Azevedo" },
      {
        name: "description",
        content:
          "Política de Privacidade do site da Dra. Pétria Azevedo Advocacia. Quais dados são coletados, com qual finalidade, e como exercer seus direitos previstos na LGPD.",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#3b1018" },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
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
          Política de{" "}
          <span className="font-serif-italic text-[var(--color-bordeaux)]">
            Privacidade
          </span>
        </h1>
        <p className="mt-3 text-sm text-foreground/60">
          Última atualização: maio de 2026
        </p>

        <section className="mt-10 space-y-8 text-[15px] leading-[1.75] text-foreground/82 sm:text-base">
          <p>
            Esta Política de Privacidade descreve como o escritório{" "}
            <strong>Dra. Pétria Azevedo Advocacia</strong> coleta, utiliza,
            armazena e protege as informações pessoais das pessoas que
            interagem com o site{" "}
            <a
              href="https://petriaazevedo.com.br"
              className="text-[var(--color-bordeaux)] underline-offset-4 hover:underline"
            >
              petriaazevedo.com.br
            </a>
            . Está em conformidade com a Lei nº 13.709/2018 (Lei Geral de
            Proteção de Dados Pessoais).
          </p>

          <Section title="1. Controlador dos dados">
            <p>
              <strong>Dra. Pétria de Azevedo Silva Schaeffer</strong>
              <br />
              OAB/ES 23.648
              <br />
              CNPJ: 60.441.824/0001-29
              <br />
              Contato:{" "}
              <a
                href="mailto:contato@petriaazevedo.com.br"
                className="text-[var(--color-bordeaux)] hover:underline"
              >
                contato@petriaazevedo.com.br
              </a>
            </p>
          </Section>

          <Section title="2. Quais dados são coletados">
            <p>
              Ao utilizar o site, podem ser coletados os seguintes dados
              pessoais:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Dados informados voluntariamente</strong> no
                formulário de contato pré-WhatsApp: nome, situação descrita
                pela pessoa interessada, e período aproximado da demissão.
              </li>
              <li>
                <strong>Dados de navegação coletados automaticamente</strong>{" "}
                por ferramentas de análise (Google Analytics 4): endereço de
                IP anonimizado, tipo de dispositivo, navegador, páginas
                visitadas, tempo de permanência e origem do acesso (anúncio,
                busca orgânica, redirecionamento direto).
              </li>
              <li>
                <strong>Cookies</strong> técnicos e de análise, conforme
                detalhado na seção específica abaixo.
              </li>
            </ul>
          </Section>

          <Section title="3. Finalidade da coleta">
            <p>Os dados pessoais são utilizados exclusivamente para:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Estabelecer o primeiro contato pelo WhatsApp e iniciar a
                análise inicial da situação descrita pela interessada.
              </li>
              <li>
                Melhorar a qualidade do atendimento e personalizar a primeira
                resposta da equipe jurídica.
              </li>
              <li>
                Realizar análise estatística agregada sobre a performance do
                site, sem identificação individual.
              </li>
              <li>
                Cumprir obrigações legais, regulatórias e fiscais aplicáveis
                à atividade advocatícia.
              </li>
            </ul>
          </Section>

          <Section title="4. Base legal para o tratamento">
            <p>
              O tratamento dos dados é fundamentado nas seguintes bases
              legais previstas no art. 7º da LGPD:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Consentimento</strong> do titular, manifestado ao
                preencher o formulário de contato e enviar a mensagem para o
                WhatsApp.
              </li>
              <li>
                <strong>Execução de procedimentos preliminares</strong>{" "}
                relacionados a possível contratação de serviços, conforme
                inciso V do art. 7º.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> ou
                regulatória, quando aplicável.
              </li>
            </ul>
          </Section>

          <Section title="5. Sigilo profissional">
            <p>
              Todas as informações compartilhadas pela pessoa interessada são
              protegidas pelo <strong>sigilo profissional</strong> previsto
              no art. 7º, inciso XIX, do Estatuto da Advocacia (Lei
              8.906/1994) e no art. 35 do Código de Ética e Disciplina da
              OAB. Esse sigilo se aplica a todos os colaboradores do
              escritório que tenham acesso aos dados.
            </p>
          </Section>

          <Section title="6. Compartilhamento de dados">
            <p>
              Os dados pessoais não são vendidos, alugados ou compartilhados
              com terceiros para fins comerciais. O compartilhamento ocorre
              apenas:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Com prestadores de serviço estritamente necessários ao
                funcionamento do site, como provedores de hospedagem
                (Vercel), envio de mensagens (WhatsApp / Meta) e ferramentas
                de análise (Google Analytics), todos sujeitos a obrigações
                contratuais de confidencialidade e proteção de dados.
              </li>
              <li>
                Quando exigido por lei, ordem judicial ou requisição de
                autoridade competente.
              </li>
            </ul>
          </Section>

          <Section title="7. Cookies">
            <p>
              O site utiliza cookies técnicos, essenciais para seu
              funcionamento, e cookies de análise para medir a performance
              das campanhas e melhorar a experiência de navegação. Você pode,
              a qualquer momento, gerenciar cookies pelas configurações do
              seu navegador.
            </p>
          </Section>

          <Section title="8. Tempo de retenção">
            <p>
              Os dados pessoais são mantidos pelo tempo necessário para
              atender às finalidades descritas nesta política e cumprir
              eventuais obrigações legais. Mensagens enviadas pelo WhatsApp e
              dados de contato são mantidos enquanto durar a relação com a
              pessoa interessada, e podem ser excluídos a qualquer momento
              mediante solicitação.
            </p>
          </Section>

          <Section title="9. Direitos do titular dos dados">
            <p>
              Em conformidade com o art. 18 da LGPD, você pode, a qualquer
              momento, solicitar:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Confirmação da existência de tratamento dos seus dados;</li>
              <li>Acesso aos dados pessoais tratados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários
                ou tratados em desconformidade com a LGPD;
              </li>
              <li>
                Portabilidade dos dados a outro fornecedor de serviço ou
                produto;
              </li>
              <li>
                Eliminação dos dados pessoais tratados com base no
                consentimento;
              </li>
              <li>
                Informação sobre as entidades públicas e privadas com as
                quais os dados foram compartilhados;
              </li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, envie e-mail para{" "}
              <a
                href="mailto:contato@petriaazevedo.com.br"
                className="text-[var(--color-bordeaux)] hover:underline"
              >
                contato@petriaazevedo.com.br
              </a>
              .
            </p>
          </Section>

          <Section title="10. Segurança da informação">
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para
              proteger os dados pessoais contra acessos não autorizados,
              perda, alteração ou divulgação indevida. Nenhum sistema, no
              entanto, é absolutamente invulnerável, e por isso recomendamos
              que você também adote boas práticas de segurança nos
              dispositivos pelos quais nos contata.
            </p>
          </Section>

          <Section title="11. Alterações nesta política">
            <p>
              Esta Política de Privacidade pode ser revisada periodicamente,
              especialmente para refletir mudanças na legislação ou nas
              práticas do escritório. A versão vigente é sempre a publicada
              nesta página, com data de atualização visível no topo.
            </p>
          </Section>

          <Section title="12. Contato">
            <p>
              Dúvidas, solicitações ou reclamações relacionadas ao tratamento
              dos seus dados pessoais podem ser encaminhadas para:
            </p>
            <p className="mt-3">
              <strong>Dra. Pétria Azevedo Advocacia</strong>
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
