import type { CollectionItem } from "@/types/site";

import "./styles.scss";

const COLLECTIONS: CollectionItem[] = [
  {
    id: "feminino",
    title: "Coleção feminina",
    description:
      "Vestidos · Blusas · Conjuntos · Calças · Casacos · E muito mais",
  },
  {
    id: "masculino",
    title: "Coleção masculina",
    description:
      "Camisetas · Camisas · Calças · Bermudas · Jaquetas · E muito mais",
  },
];

export function Collections() {
  return (
    <section className="section collections">
      <div className="container collections__grid">
        {COLLECTIONS.map(({ id, title, description, position }) => (
          <article className="collections__item" id={id} key={id}>
            <h2>{title}</h2>

            <div
              className="collections__image"
              style={{ backgroundPosition: position }}
              role="img"
              aria-label={`Destaque da ${title}`}
            />

            <p>{description}</p>

            <a className="button button--primary" href="#catalogo">
              Ver {id} no catálogo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
