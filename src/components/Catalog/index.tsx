import { Download, MessageCircle } from "@/lib/icons";
import { WHATSAPP_URL } from "@/lib/site-data";
import "./styles.scss";

export function Catalog() {
  return (
    <section className="section catalog" id="catalogo">
      <div className="container catalog__grid">
        <article className="catalog__card catalog__card--catalog">
          <div className="catalog__art">
            EA<span>catálogo</span>
          </div>
          <div>
            <h2>Conheça nosso catálogo</h2>
            <p>
              Confira todas as peças disponíveis na Estela Amaral. Escolha seus
              favoritos e fale com a gente pelo WhatsApp.
            </p>
            <div className="catalog__actions">
              <a
                className="button button--primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Ver catálogo online
              </a>
              <a className="button button--outline" href="#catalogo">
                <Download aria-hidden="true" />
                Baixar PDF
              </a>
            </div>
          </div>
        </article>
        <article className="catalog__card catalog__card--contact" id="contato">
          <div>
            <h2>Compre pelo WhatsApp</h2>
            <p>
              Gostou de alguma peça? Fale com uma de nossas vendedoras e garanta
              a sua.
            </p>
            <a
              className="button button--primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Falar com uma vendedora
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
          <div className="catalog__phone" aria-hidden="true">
            <MessageCircle />
            <span>
              Estela Amaral
              <br />
              <b>online</b>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
