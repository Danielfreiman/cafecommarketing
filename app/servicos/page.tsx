import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { PageShell } from "@/components/PageShell";
import { processSteps, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Estratégia de conteúdo, produção audiovisual, redes sociais, campanhas, posicionamento e cobertura de eventos.",
  alternates: { canonical: "/servicos" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Marketing digital e produção audiovisual",
  provider: {
    "@type": "Organization",
    name: "Café com Marketing",
  },
  areaServed: "Brasil",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <div id="conteudo" className="inner-page">
        <header className="page-hero services-page-hero">
          <p className="eyebrow light">O QUE A GENTE FAZ</p>
          <h1>
            Estratégia para saber o que falar.
            <em> Criatividade para ninguém ignorar.</em>
          </h1>
        </header>
        <section className="service-detail-list section-pad">
          {services.map((service, index) => (
            <MotionReveal className="service-detail" key={service.number}>
              <span>{service.number}</span>
              <div>
                <p>{service.tag}</p>
                <h2>{service.title}</h2>
              </div>
              <p>{service.copy}</p>
              <div className="service-stamp" aria-hidden="true">
                {index % 2 === 0 ? "REC" : "PLAY"}
              </div>
            </MotionReveal>
          ))}
        </section>
        <section className="services-process section-pad">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">DE BRIEFING A CONTEÚDO</p>
              <h2>
                Um processo claro.
                <br />
                <em>Sem engessar a ideia.</em>
              </h2>
            </div>
            <p>
              Cada projeto muda de tamanho e formato. O cuidado com contexto,
              produção e acompanhamento não muda.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map(([title, copy], index) => (
              <div className="process-step" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="simple-cta">
          <h2>
            Não sabe qual serviço pedir?
            <em> Conta o problema.</em>
          </h2>
          <Link className="button button-cream" href="/contato">
            Conversar com a equipe ↗
          </Link>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </PageShell>
  );
}
