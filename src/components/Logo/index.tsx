import { Heart } from "@/lib/icons";
import type { LogoProps } from "./types";

import "./styles.scss";

export function Logo({ light = false }: LogoProps) {
  return (
    <a
      className={`logo ${light ? "logo--light" : ""}`}
      href="#inicio"
      aria-label="Estela Amaral - início"
    >
      <div className="logo__main">
        <strong>EA</strong>
        <span>Estela Amaral</span>
        <br />
      </div>

      <div className="logo__description">
        <Heart fill="currentColor" aria-hidden="true" />
        <small>do seu jeito</small>
      </div>
    </a>
  );
}
