import { useState } from 'react';
import './styleHeader.scss';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => setMenuAberto((prev) => !prev);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header>
      <button
        className={`mobile-menu ${menuAberto ? 'ativo' : ''}`}
        onClick={alternarMenu}
        aria-label="Abrir ou fechar menu"
      >
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </button>

      <nav className={`nav-list ${menuAberto ? 'ativo' : ''}`}>
        <ul>
          <li><a href="#sectionSeis" onClick={fecharMenu}>ABOUT ARTIST</a></li>
          <li><a href="#sectionSete" onClick={fecharMenu}>WORKS</a></li>
          <li><a href="#sectionNove" onClick={fecharMenu}>TIME AND PLACE</a></li>
          <li><a href="#sectionDez" onClick={fecharMenu}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;