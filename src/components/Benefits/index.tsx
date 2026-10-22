import { Heart } from "@/lib/icons";
import { benefits } from "@/lib/site-data";

import "./styles.scss";

export function Benefits() {
  return (
    <section
      className="benefits"
      id="beneficios"
      aria-label="Benefícios da loja"
    >
      <div className="container benefits__grid">
        {benefits.map(({ icon: Icon, title, short }) => (
          <article className="benefits__item" key={short}>
            <span className="benefits__icon">
              <Icon aria-hidden="true" />
            </span>

            <strong>{short}</strong>

            <p>{title}</p>

            <Heart
              className="benefits__heart"
              fill="currentColor"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}