"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setError("Confira os campos destacados e tente de novo.");
      form.reportValidity();
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>☕</span>
        <h2>Ideia recebida.</h2>
        <p>A conversa começa por aqui. Respondemos em até dois dias úteis.</p>
        <button type="button" className="text-link" onClick={() => setSent(false)}>
          Enviar outro projeto
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Como a gente te chama?</label>
        <input id="name" name="name" required placeholder="Seu nome" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="company">Qual é a marca?</label>
        <input id="company" name="company" required placeholder="Empresa ou projeto" />
      </div>
      <div className="field">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input id="whatsapp" name="whatsapp" required placeholder="(11) 99999-9999" inputMode="tel" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required placeholder="voce@marca.com.br" />
      </div>
      <div className="field">
        <label htmlFor="type">O que vamos criar?</label>
        <select id="type" name="type" required defaultValue="">
          <option value="" disabled>
            Escolha um tipo de projeto
          </option>
          <option>Gestão de redes sociais</option>
          <option>Produção de vídeo</option>
          <option>Campanha</option>
          <option>Identidade visual</option>
          <option>Cobertura de evento</option>
          <option>Outro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="budget">Faixa de investimento</label>
        <select id="budget" name="budget" required defaultValue="">
          <option value="" disabled>
            Selecione uma faixa
          </option>
          <option>Até R$ 5 mil</option>
          <option>R$ 5 mil — R$ 15 mil</option>
          <option>R$ 15 mil — R$ 30 mil</option>
          <option>Acima de R$ 30 mil</option>
          <option>Ainda estamos definindo</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="deadline">Quando precisa estar no ar?</label>
        <input id="deadline" name="deadline" placeholder="Mês ou data aproximada" />
      </div>
      <div className="field field-wide">
        <label htmlFor="message">Conta a ideia — pode ser do seu jeito.</label>
        <textarea id="message" name="message" required rows={6} placeholder="Contexto, objetivo, links e tudo que ajudar a gente a enxergar o projeto." />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="button button-pink form-submit" type="submit">
        Mandar a ideia <span>↗</span>
      </button>
      <p className="form-note">Seus dados serão usados apenas para responder este contato.</p>
    </form>
  );
}
