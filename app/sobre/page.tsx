import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, o jeito de trabalhar e a cultura da Café com Marketing.",
  alternates: { canonical: "/sobre" },
};

const team = [
  ["Dani Freiman", "Estratégia & direção criativa", "Salva referências demais e usa quase todas."],
  ["Bia Costa", "Conteúdo & social", "Ouve o áudio antes de responder a pauta."],
  ["Rafa Lima", "Direção audiovisual", "Sempre pede mais um take. Quase sempre tem razão."],
  ["Leo Martins", "Edição & motion", "Sabe exatamente em qual frame o corte deve cair."],
];

export default function AboutPage() {
  return (
    <PageShell>
      <div id="conteudo" className="inner-page">
        <header className="page-hero about-page-hero">
          <p className="eyebrow">POR TRÁS DA CANECA</p>
          <h1>
            Marketing bom começa com conversa.
            <em> E conversa boa quase sempre começa com café.</em>
          </h1>
        </header>

        <section className="about-intro section-pad">
          <MotionReveal>
            <p className="eyebrow">A NOSSA HISTÓRIA</p>
            <h2>
              A Café nasceu para juntar o que nunca deveria ter sido separado:
              <em> estratégia e conteúdo que dá vontade de ver.</em>
            </h2>
          </MotionReveal>
          <div>
            <p>
              A gente acredita em repertório, contexto e execução. Em entender a
              marca antes de abrir o arquivo. Em fazer conteúdo bonito, sim — mas
              bonito por um motivo.
            </p>
            <p>
              Trabalhamos como estúdio e pensamos como parceiro: equipe próxima,
              conversa franca e gente que realmente acompanha o que colocou no ar.
            </p>
          </div>
        </section>

        <section className="about-image">
          <Image
            src="/media/hero-collage.png"
            alt="Colagem editorial sobre produção audiovisual e criação de conteúdo"
            fill
            sizes="100vw"
          />
          <span>SEM CAFÉ DESCafeinado.<br />SEM IDEIA DESCafeinada.</span>
        </section>

        <section className="values section-pad">
          {[
            ["Clareza antes do hype", "A tendência pode entrar. A estratégia precisa ficar."],
            ["Ideia com acabamento", "Conceito bom também merece áudio limpo e corte no frame certo."],
            ["Proximidade de verdade", "Sem parede entre quem pensa, quem produz e quem atende."],
            ["Curiosidade sempre ligada", "A internet muda rápido. A gente gosta de acompanhar de perto."],
          ].map(([title, copy], index) => (
            <MotionReveal className="value-item" key={title} delay={index * 0.06}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="team section-pad">
          <div className="section-heading">
            <p className="eyebrow">QUEM FAZ ACONTECER</p>
            <h2>
              Gente que pensa,
              <em> grava, corta e posta.</em>
            </h2>
          </div>
          <div className="team-grid">
            {team.map(([name, role, note], index) => (
              <article className="team-card" key={name}>
                <div className="team-photo">
                  <Image
                    src="/media/vertical-collage.png"
                    alt={`Retrato editorial ilustrativo de ${name}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 24vw"
                  />
                  <span>0{index + 1}</span>
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
                <small>{note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="simple-cta">
          <h2>
            Quer colocar essa equipe
            <em> na sua próxima ideia?</em>
          </h2>
          <Link className="button button-cream" href="/contato">
            Vamos conversar ↗
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
