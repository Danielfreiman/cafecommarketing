import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Logo />
        <p>
          Estratégia para saber o que falar.
          <br />
          Criatividade para ninguém ignorar.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <span>MAPA</span>
          <Link href="/trabalhos">Trabalhos</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
        <div>
          <span>CONTATO</span>
          <a href="mailto:oi@cafecommarketing.com.br">oi@cafecommarketing.com.br</a>
          <a href="https://instagram.com/seucafecomarketing">@seucafecomarketing</a>
          <a href="https://wa.me/5511999999999">WhatsApp</a>
        </div>
        <div>
          <span>BASE</span>
          <p>São Paulo, SP</p>
          <p>Atendemos marcas de todo o Brasil.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Café com Marketing.</p>
        <p>Feito com estratégia, cortes e café.</p>
      </div>
    </footer>
  );
}
