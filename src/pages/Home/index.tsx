import {
  Header,
  Hero,
  Benefits,
  Collections,
  Anniversary,
  Catalog,
  Footer,
} from "@/components";

import "./styles.scss";

export function Home() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <Benefits />
        <Collections />
        <Anniversary />
        <Catalog />
      </main>

      <Footer />
    </>
  );
}
