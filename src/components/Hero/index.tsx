import { Heart } from "@/lib/icons";
import { WhatsAppButton } from "../WhatsAppButton";
import "./styles.scss";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow"><Heart fill="currentColor" aria-hidden="true" />Moda feminina e masculina</p>
          <h1>Estilo que<br />te representa,<br /><em>do seu jeito.</em></h1>
          <p className="hero__description">Peças escolhidas para acompanhar todos os seus momentos.</p>
          <div className="hero__actions"><WhatsAppButton /><a className="button button--outline" href="#catalogo">Ver catálogo</a></div>
        </div>
      </div>
    </section>
  );
}
