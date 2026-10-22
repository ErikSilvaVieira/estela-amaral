import { MessageCircle } from "lucide-react";

import type { WhatsAppButtonProps } from "./types";

import "./styles.scss";

const WHATSAPP_URL = "https://wa.me/55SEUNUMERO";

export function WhatsAppButton({ compact = false }: WhatsAppButtonProps) {
  const label = compact ? "Falar no WhatsApp" : "Comprar pelo WhatsApp";

  return (
    <a
      className={`button button--primary whatsapp-button ${
        compact ? "button--compact" : ""
      }`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" />
      {label}
    </a>
  );
}
