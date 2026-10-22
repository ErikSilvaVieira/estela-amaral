import { useCallback, useState } from "react";

import { Menu, X } from "@/lib/icons";
import { navigation } from "@/lib/site-data";

import { Logo } from "../Logo";
import { WhatsAppButton } from "../WhatsAppButton";

import "./styles.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((current) => !current);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />

        <button
          className="header__menu-button"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="main-navigation"
          className={`header__navigation ${
            isMenuOpen ? "header__navigation--open" : ""
          }`}
          aria-label="Navegação principal"
        >
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <WhatsAppButton compact />
        </nav>
      </div>
    </header>
  );
}
