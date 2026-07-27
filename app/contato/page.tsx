import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Conte sua ideia para a Café com Marketing. Fale sobre produção de vídeo, redes sociais, campanhas, branding ou eventos.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div id="conteudo" className="contact-page">
        <header className="contact-intro">
          <p className="eyebrow light">ABRE O JOGO</p>
          <h1>
            Conta a ideia.
            <em> O café é por nossa conta.</em>
          </h1>
          <p>
            Pode chegar com briefing pronto, áudio de cinco minutos ou aquela
            ideia que ainda não cabe em uma frase. A gente começa daí.
          </p>
          <div className="contact-channels">
            <a href="https://wa.me/5511999999999">
              <span>WHATSAPP</span>
              (11) 99999-9999 ↗
            </a>
            <a href="mailto:oi@cafecommarketing.com.br">
              <span>E-MAIL</span>
              oi@cafecommarketing.com.br ↗
            </a>
            <a href="https://instagram.com/seucafecomarketing">
              <span>INSTAGRAM</span>
              @seucafecomarketing ↗
            </a>
          </div>
          <small>Prazo médio de resposta: até 2 dias úteis.</small>
        </header>
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
