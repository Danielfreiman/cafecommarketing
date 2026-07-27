import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoStage } from "@/components/VideoStage";
import {
  metrics,
  processSteps,
  projects,
  services,
  testimonials,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Conteúdo, estratégia e produção audiovisual para marcas que querem aparecer, conectar e ficar na memória.",
  alternates: { canonical: "/" },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Showreel Café com Marketing",
  description:
    "Seleção de campanhas, conteúdos verticais e produções audiovisuais da Café com Marketing.",
  thumbnailUrl:
    "https://cafe-com-marketing.sites.openai.com/media/hero-collage.png",
  uploadDate: "2026-01-20",
  duration: "PT1M18S",
};

export default function Home() {
  return (
    <PageShell>
      <div id="conteudo">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/media/hero-collage.png"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <div className="hero-scanline" />
          </div>
          <div className="hero-overlay">
            <p className="eyebrow light">ESTRATÉGIA + CONTEÚDO + VÍDEO</p>
            <h1>
              Sua marca não precisa <em>apenas postar.</em>
              <span>Ela precisa aparecer.</span>
            </h1>
            <p className="hero-copy">
              Estratégia, conteúdo e produção audiovisual para marcas que querem
              ser vistas, lembradas e compartilhadas.
            </p>
            <div className="hero-actions">
              <Link className="button button-cream" href="/trabalhos">
                Ver nossos trabalhos <span>↗</span>
              </Link>
              <Link className="text-link light" href="/contato">
                Falar com a equipe →
              </Link>
            </div>
          </div>
          <div className="play-sticker" aria-hidden="true">
            <span>DÊ O PLAY • DÊ O PLAY •</span>
            <b>▶</b>
          </div>
          <div className="hero-note" aria-hidden="true">
            <span>REC</span>
            <i />
            <span>00:18:24</span>
          </div>
        </section>

        <div className="marquee" aria-label="Nossos campos de atuação">
          <div>
            {[
              "Estratégia",
              "Conteúdo",
              "Vídeo",
              "Social Media",
              "Branding",
              "Produção",
              "Criatividade",
              "Resultado",
            ].map((item) => (
              <span key={item}>{item} ✦</span>
            ))}
            {[
              "Estratégia",
              "Conteúdo",
              "Vídeo",
              "Social Media",
              "Branding",
              "Produção",
              "Criatividade",
              "Resultado",
            ].map((item) => (
              <span key={`repeat-${item}`}>{item} ✦</span>
            ))}
          </div>
        </div>

        <section className="manifesto section-pad">
          <MotionReveal className="manifesto-copy">
            <p className="eyebrow">UM FEED INTEIRO DISPUTANDO ATENÇÃO</p>
            <h2>
              A internet está cheia de marcas <span>falando.</span>
              <br />
              A gente cria marcas que as pessoas <em>param para assistir.</em>
            </h2>
          </MotionReveal>
          <div className="manifesto-collage" aria-hidden="true">
            <div className="paper-note">IDEIA → ROTEIRO → REC</div>
            <div className="mini-phone">
              <Image src="/media/vertical-collage.png" alt="" fill sizes="240px" />
            </div>
            <div className="audio-wave">
              {Array.from({ length: 18 }).map((_, index) => (
                <i key={index} style={{ height: `${18 + ((index * 17) % 58)}%` }} />
              ))}
            </div>
            <div className="coffee-ring" />
          </div>
        </section>

        <section className="showreel section-pad dark-section">
          <MotionReveal className="section-heading split-heading">
            <div>
              <p className="eyebrow light">NOSSO SHOWREEL</p>
              <h2>
                Aperte o play.
                <br />
                <em>O resto a gente mostra.</em>
              </h2>
            </div>
            <p>
              Campanhas, conteúdo vertical, bastidores e aqueles cortes que fazem
              a gente reassistir só mais uma vez.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <VideoStage
              poster="/media/hero-collage.png"
              label="showreel da Café com Marketing"
              className="showreel-player"
            />
          </MotionReveal>
        </section>

        <section className="selected-work section-pad">
          <MotionReveal className="section-heading work-heading">
            <div>
              <p className="eyebrow">TRABALHOS SELECIONADOS</p>
              <h2>
                Ideias que funcionam
                <br />
                <em>no feed e fora dele.</em>
              </h2>
            </div>
            <Link className="text-link" href="/trabalhos">
              Conheça todos os projetos →
            </Link>
          </MotionReveal>
          <div className="project-grid">
            {projects.slice(0, 4).map((project, index) => (
              <MotionReveal key={project.slug} delay={(index % 2) * 0.08}>
                <ProjectCard project={project} index={index} />
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="vertical-content section-pad">
          <div className="vertical-copy">
            <MotionReveal>
              <p className="eyebrow light">REELS • SHORTS • TIKTOK</p>
              <h2>
                Pensado para prender a atenção
                <em> antes do próximo scroll.</em>
              </h2>
              <p>
                Cada segundo tem função: abrir curiosidade, entregar valor e deixar
                vontade de assistir ao próximo.
              </p>
              <Link className="button button-cream" href="/trabalhos">
                Ver conteúdo vertical
              </Link>
            </MotionReveal>
          </div>
          <div className="vertical-reel" aria-label="Exemplos de conteúdo vertical">
            {[0, 1, 2].map((item) => (
              <article className="reel-card" key={item}>
                <Image
                  src="/media/vertical-collage.png"
                  alt="Colagem de bastidores de produção de conteúdo vertical"
                  fill
                  sizes="(max-width: 768px) 78vw, 24vw"
                />
                <div className="reel-info">
                  <span>0{item + 1}</span>
                  <p>{["Bastidores", "Produto em cena", "Cobertura ágil"][item]}</p>
                  <strong>{["1,2 mi plays", "82% retenção", "24h no ar"][item]}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-home section-pad">
          <MotionReveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">O QUE A GENTE FAZ</p>
              <h2>
                Da primeira pauta
                <br />
                <em>ao último corte.</em>
              </h2>
            </div>
            <p>Menos conteúdo por obrigação. Mais conteúdo com intenção.</p>
          </MotionReveal>
          <div className="service-list">
            {services.map((service) => (
              <Link href="/servicos" className="service-row" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <b>{service.tag}</b>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </section>

        <section className="process section-pad">
          <MotionReveal className="section-heading centered-heading">
            <p className="eyebrow">COMO A GENTE TRABALHA</p>
            <h2>
              Do primeiro café
              <br />
              <em>ao conteúdo publicado.</em>
            </h2>
          </MotionReveal>
          <div className="process-path" aria-hidden="true" />
          <div className="process-grid">
            {processSteps.map(([title, copy], index) => (
              <MotionReveal className="process-step" key={title} delay={index * 0.06}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="behind-scenes section-pad">
          <div className="behind-photo">
            <Image
              src="/media/hero-collage.png"
              alt="Colagem de câmera, microfone, celular e ilha de edição"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <MotionReveal className="behind-copy">
            <p className="eyebrow light">POR TRÁS DO POST</p>
            <h2>
              Por trás de todo conteúdo bom existe muito café e
              <em> algumas dezenas de takes.</em>
            </h2>
            <p>
              Tem planejamento, improviso, cabo que some, roteiro rabiscado e uma
              equipe que sabe a hora de insistir em “só mais um”.
            </p>
            <Link href="/sobre" className="text-link light">
              Conheça a equipe →
            </Link>
          </MotionReveal>
          <span className="take-sticker">
            TAKE 27
            <br />
            AGORA VAI!
          </span>
        </section>

        <section className="proof section-pad">
          <MotionReveal className="proof-title">
            <p className="eyebrow">TRABALHO BOM DÁ ASSUNTO</p>
            <h2>O que fica depois do “postar”.</h2>
          </MotionReveal>
          <div className="metrics-grid">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="data-note">
            * Métricas demonstrativas. Substituir pelos dados reais antes da
            publicação final.
          </p>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <MotionReveal
                className="testimonial"
                key={testimonial.name}
                delay={index * 0.1}
              >
                <span aria-hidden="true">“</span>
                <blockquote>{testimonial.quote}</blockquote>
                <p>
                  <strong>{testimonial.name}</strong>
                  {testimonial.role}
                </p>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-noise" aria-hidden="true" />
          <MotionReveal>
            <p className="eyebrow light">TEM UMA IDEIA AÍ?</p>
            <h2>
              Sua próxima ideia merece
              <em> sair do rascunho.</em>
            </h2>
            <p>
              Conte para a gente o que sua marca precisa. Nós transformamos em
              estratégia, conteúdo e vídeo.
            </p>
            <div>
              <Link className="button button-cream" href="/contato">
                Começar um projeto ↗
              </Link>
              <a className="text-link light" href="https://wa.me/5511999999999">
                Chamar no WhatsApp →
              </a>
            </div>
          </MotionReveal>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </PageShell>
  );
}
