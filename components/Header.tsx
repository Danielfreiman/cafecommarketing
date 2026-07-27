"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["/", "Início"],
  ["/trabalhos", "Trabalhos"],
  ["/servicos", "Serviços"],
  ["/sobre", "Sobre"],
  ["/contato", "Contato"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Logo />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([href, label]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="instagram-link"
          href="https://instagram.com/seucafecomarketing"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da Café com Marketing"
        >
          @
        </a>
        <Link className="button button-small button-pink" href="/contato">
          Vamos conversar
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu-starburst">OPA!</div>
        <nav aria-label="Navegação mobile">
          {links.map(([href, label], index) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <p>Ideias boas combinam com café passado na hora.</p>
      </div>
    </header>
  );
}
