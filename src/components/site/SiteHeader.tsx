import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const APP_URL = (import.meta.env.VITE_APP_URL || 'http://localhost:5173').replace(/\/$/, '');

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand-lockup" aria-label="CifraWealth — página inicial">
          <span className="brand-symbol" aria-hidden="true">∞</span>
          <span className="brand-name">Cifra<span>Wealth</span></span>
        </Link>

        <button ref={toggleRef} className="mobile-nav-toggle" type="button" aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'} aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen((open) => !open)}>
          <span className="mobile-toggle-lines" aria-hidden="true"><i /><i /><i /></span>
          <span>{mobileOpen ? 'Fechar menu' : 'Menu'}</span>
        </button>

        <nav id="primary-navigation" className={`site-navigation${mobileOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <NavLink to="/" end className={({ isActive }) => `site-nav-link${isActive ? ' is-current' : ''}`}>Início</NavLink>
          <NavLink to="/produtos" className={({ isActive }) => `site-nav-link${isActive ? ' is-current' : ''}`}>Recursos</NavLink>
          <NavLink to="/wealthy" className={({ isActive }) => `site-nav-link${isActive ? ' is-current' : ''}`}>Sobre a CifraWealth</NavLink>
          <NavLink to="/duvidas" className={({ isActive }) => `site-nav-link${isActive ? ' is-current' : ''}`}>Dúvidas</NavLink>
        </nav>

        <div className="site-header-actions">
          <a className="header-action-link" href={`${APP_URL}/login`}>Entrar</a>
          <a className="header-action-primary" href={`${APP_URL}/register`}>Cadastrar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
  );
}
