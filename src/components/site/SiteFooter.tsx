import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="brand-lockup footer-brand" aria-label="CifraWealth — página inicial">
            <span className="brand-symbol" aria-hidden="true">∞</span>
            <span className="brand-name">Cifra<span>Wealth</span></span>
          </Link>
          <p>Organize o presente. Planeje o futuro. Acompanhe sua evolução financeira com mais clareza.</p>
        </div>
        <div className="footer-link-column"><h2>Plataforma</h2><Link to="/produtos">Visão geral dos recursos</Link><Link to="/produtos">Metas e planejamento</Link><Link to="/produtos">Relatórios</Link></div>
        <div className="footer-link-column"><h2>Informações</h2><Link to="/wealthy">Sobre a CifraWealth</Link><Link to="/duvidas">Perguntas frequentes</Link><Link to="/duvidas#faq-conteudo">Central de conhecimento</Link></div>
      </div>
      <div className="site-footer-bottom">
        <p>© {new Date().getFullYear()} CifraWealth. Todos os direitos reservados.</p>
        <p>Projeto de organização financeira pessoal. Conteúdo informativo; não constitui recomendação de investimento.</p>
      </div>
    </footer>
  );
}
