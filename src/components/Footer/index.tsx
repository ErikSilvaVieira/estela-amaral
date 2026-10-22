import { Camera, MessageCircle } from "@/lib/icons";
import { navigation, WHATSAPP_URL } from "@/lib/site-data";

import { Logo } from "../Logo";

import "./styles.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <Logo light />

        <div className="footer__column">
          <strong>Institucional</strong>

          <a href="#nossa-loja">Sobre nós</a>
          <a href="#nossa-loja">Nossa loja</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer__column">
          <strong>Ajuda</strong>

          <a href="#contato">Dúvidas frequentes</a>
          <a href="#catalogo">Catálogo</a>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Fale pelo WhatsApp
          </a>
        </div>

        <div className="footer__column">
          <strong>Horário de atendimento</strong>

          <p>
            Segunda a sexta: 9h às 18h
            <br />
            Sábado: 9h às 13h
          </p>
        </div>

        <div className="footer__column footer__column--social">
          <strong>Siga-nos</strong>

          <div className="footer__socials">
            <a href="#" aria-label="Instagram">
              <Camera aria-hidden="true" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <nav
        className="container footer__mobile-links"
        aria-label="Navegação do rodapé"
      >
        {navigation.slice(0, 4).map(({ href, label }) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <p className="footer__copyright">
        ESTELA AMARAL - 2026 - TODOS OS DIREITOS RESERVADOS.
      </p>

      <a
        className="footer__floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </footer>
  );
}
