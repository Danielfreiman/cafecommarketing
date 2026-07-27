import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section id="conteudo" className="not-found">
        <span>404</span>
        <h1>Esse take não entrou no corte final.</h1>
        <p>A página que você tentou abrir não existe ou mudou de endereço.</p>
        <Link className="button button-cream" href="/">
          Voltar para o início
        </Link>
      </section>
    </PageShell>
  );
}
