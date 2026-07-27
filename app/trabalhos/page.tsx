import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Trabalhos",
  description:
    "Cases de vídeo, social media, campanhas, branding, eventos e conteúdo vertical criados pela Café com Marketing.",
  alternates: { canonical: "/trabalhos" },
};

export default function WorksPage() {
  return (
    <PageShell>
      <div id="conteudo" className="inner-page">
        <header className="page-hero work-page-hero">
          <p className="eyebrow light">NOSSO PORTFÓLIO</p>
          <h1>
            Trabalho que faz a pessoa
            <br />
            <em>parar o dedo.</em>
          </h1>
          <p>
            Estratégia, produção e conteúdo em diferentes formatos — com uma
            coisa em comum: nenhum nasceu para passar despercebido.
          </p>
        </header>
        <PortfolioGrid />
      </div>
    </PageShell>
  );
}
