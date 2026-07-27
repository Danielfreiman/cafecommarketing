import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionReveal } from "@/components/MotionReveal";
import { PageShell } from "@/components/PageShell";
import { VideoStage } from "@/components/VideoStage";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.description,
    alternates: { canonical: `/trabalhos/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const current = projects.indexOf(project);
  const next = projects[(current + 1) % projects.length];

  return (
    <PageShell>
      <article id="conteudo" className="case-page">
        <header className={`case-hero accent-${project.accent}`}>
          <div className="case-kicker">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <p className="eyebrow">{project.client}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <section className="case-media">
          <VideoStage
            poster="/media/hero-collage.png"
            label={`filme principal do projeto ${project.title}`}
          />
        </section>

        <section className="case-facts section-pad">
          <div>
            <span>SERVIÇOS</span>
            {project.services.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
          <div>
            <span>PLATAFORMAS</span>
            {project.platforms.map((platform) => (
              <p key={platform}>{platform}</p>
            ))}
          </div>
          <div>
            <span>DURAÇÃO</span>
            <p>12 semanas</p>
          </div>
          <div>
            <span>ENTREGAS</span>
            <p>32 peças</p>
            <p>18 vídeos</p>
          </div>
        </section>

        <section className="case-story section-pad">
          <MotionReveal>
            <p className="eyebrow">O CONTEXTO</p>
            <h2>
              Um bom filme começa
              <em> antes da câmera ligar.</em>
            </h2>
          </MotionReveal>
          <div className="case-copy-grid">
            <div>
              <h3>O desafio</h3>
              <p>
                A marca tinha presença, mas ainda não tinha uma linguagem própria
                em movimento. Cada peça parecia começar do zero e a frequência
                diluía a identidade.
              </p>
            </div>
            <div>
              <h3>A estratégia</h3>
              <p>
                Criamos uma lógica modular de temas, aberturas, ritmo e assinatura
                visual. O conteúdo ganhou consistência sem virar fórmula.
              </p>
            </div>
          </div>
        </section>

        <section className="case-gallery section-pad">
          <div className="gallery-tall">
            <Image
              src="/media/vertical-collage.png"
              alt="Recortes verticais produzidos para o projeto"
              fill
              sizes="(max-width: 768px) 94vw, 42vw"
            />
          </div>
          <div className="gallery-wide">
            <Image
              src="/media/hero-collage.png"
              alt="Bastidores e materiais audiovisuais do projeto"
              fill
              sizes="(max-width: 768px) 94vw, 52vw"
            />
          </div>
        </section>

        <section className="case-result">
          <p className="eyebrow light">O RESULTADO</p>
          <strong>{project.result}</strong>
          <p>
            Um sistema de conteúdo reconhecível, mais retenção e um repertório que
            segue rendendo novas histórias.
          </p>
        </section>

        <section className="next-project">
          <span>PRÓXIMO PROJETO</span>
          <Link href={`/trabalhos/${next.slug}`}>
            {next.client}
            <strong>{next.title}</strong>
            <i>↗</i>
          </Link>
        </section>
      </article>
    </PageShell>
  );
}
