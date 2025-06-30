import { useEffect, useRef, useState } from 'react';
import './styleHeader.scss';

const navLinks = [
  { href: '#sectionDois', label: 'ABOUT ARTIST' },
  { href: '#sectionSete', label: 'WORKS' },
  { href: '#sectionNove', label: 'TIME AND PLACE' },
  { href: '#footer', label: 'CONTACT' }
];

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  const alternarMenu = () => setMenuAberto((prev) => !prev);
  const fecharMenu = () => setMenuAberto(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuAberto && navRef.current && !navRef.current.contains(event.target)) {
        fecharMenu();
      }
    };
    const handleEsc = (event) => {
      if (event.key === 'Escape') fecharMenu();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [menuAberto]);

  return (
    <header className={menuAberto ? 'menu-aberto' : ''}>
      <button
        className={`mobile-menu ${menuAberto ? 'ativo' : ''}`}
        onClick={alternarMenu}
        aria-label="Abrir ou fechar menu"
        aria-expanded={menuAberto}
      >
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </button>

      <nav
        ref={navRef}
        className={`nav-list ${menuAberto ? 'ativo' : ''}`}
        role="navigation"
      >
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={fecharMenu}
                className={activeSection === href ? 'ativo' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;