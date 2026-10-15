import { Link } from 'react-router-dom';

const APP_URL = (import.meta.env.VITE_APP_URL || 'http://localhost:5173').replace(/\/$/, '');

export default function Home() {
  return (
    <>
      <main className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-orb home-orb-one" aria-hidden="true" />
        <div className="home-hero-orb home-orb-two" aria-hidden="true" />
        <div className="home-hero-copy">
          <span className="page-eyebrow"><span className="eyebrow-indicator" /> SUA VIDA FINANCEIRA EM PERSPECTIVA</span>
          <h1 id="home-title">Mais clareza para cuidar do seu <span>dinheiro.</span></h1>
          <p>Registre movimentações, organize despesas e acompanhe objetivos em uma experiência pensada para deixar sua rotina financeira mais simples de entender.</p>
          <div className="home-hero-actions">
            <a className="button-primary" href={`${APP_URL}/register`}>Criar minha conta <span aria-hidden="true">↗</span></a>
            <a className="button-quiet" href={`${APP_URL}/login`}>Já tenho conta · Entrar <span aria-hidden="true">→</span></a>
          </div>
          <div className="home-hero-proof"><span className="proof-check" aria-hidden="true">✓</span><span>Organização, metas e análises em uma única visão.</span></div>
        </div>

        <div className="home-visual" aria-label="Ilustração de um painel financeiro">
          <div className="home-visual-glow" aria-hidden="true" />
          <div className="finance-window">
            <div className="window-top"><div className="window-brand"><span className="brand-mark">∞</span><span>Cifra<span className="brand-light">Wealth</span></span></div><span className="window-menu" aria-hidden="true">•••</span></div>
            <div className="window-label">VISÃO GERAL <span>↗</span></div>
            <div className="window-balance">Sua rotina, em perspectiva</div>
            <div className="window-caption">Uma leitura visual das movimentações registradas.</div>
            <div className="chart-area"><div className="chart-grid"><i /><i /><i /></div><svg viewBox="0 0 420 130" role="img" aria-label="Gráfico decorativo ilustrativo, sem dados reais"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2dd4bf" stopOpacity=".28" /><stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" /></linearGradient></defs><path d="M0 108 C35 100 38 82 74 90 S119 75 145 82 S183 47 220 60 S265 38 292 46 S342 18 370 28 S400 12 420 7 L420 130 L0 130 Z" fill="url(#chartFill)" /><path d="M0 108 C35 100 38 82 74 90 S119 75 145 82 S183 47 220 60 S265 38 292 46 S342 18 370 28 S400 12 420 7" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" /></svg></div>
            <div className="chart-months"><span>JAN</span><span>MAR</span><span>MAI</span><span>JUL</span><span>SET</span><span>NOV</span></div>
            <div className="window-bottom"><div><span className="bottom-dot mint" /> Movimentações</div><div><span className="bottom-dot blue" /> Metas</div></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon">↗</span><span><b>Mais organização</b><small>para acompanhar o dia a dia</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-star">◎</span><span><b>Seus objetivos</b><small>em uma visão mais clara</small></span></div>
        </div>
      </main>

      <section className="home-intro-strip"><span>FINANÇAS MAIS FÁCEIS DE ENTENDER</span><p>Quando as informações ficam organizadas, fica mais simples enxergar padrões e planejar os próximos passos.</p></section>

      <section className="home-resources section-frame" aria-labelledby="home-resources-title">
        <div className="section-intro"><span className="section-kicker">RECURSOS PARA A VIDA REAL</span><h2 id="home-resources-title">Tudo começa com uma visão mais organizada.</h2><p>Do registro de uma despesa à revisão de uma meta, cada recurso ajuda a construir uma leitura mais completa das suas finanças.</p></div>
        <div className="home-feature-grid">
          <article className="home-feature-card home-feature-highlight"><span className="home-feature-icon" aria-hidden="true">↔</span><span className="home-feature-label">01 / ORGANIZE</span><h3>Movimentações e categorias</h3><p>Registre receitas e despesas e agrupe cada lançamento para entender como o dinheiro circula no dia a dia.</p><Link to="/produtos">Explorar organização <span aria-hidden="true">↗</span></Link></article>
          <article className="home-feature-card"><span className="home-feature-icon" aria-hidden="true">◎</span><span className="home-feature-label">02 / PLANEJE</span><h3>Metas financeiras</h3><p>Defina objetivos, acompanhe o progresso e mantenha suas prioridades visíveis ao longo do caminho.</p><Link to="/produtos">Conhecer metas <span aria-hidden="true">↗</span></Link></article>
          <article className="home-feature-card"><span className="home-feature-icon" aria-hidden="true">⌁</span><span className="home-feature-label">03 / ACOMPANHE</span><h3>Relatórios e evolução</h3><p>Observe os dados por período, compare resultados e identifique padrões que merecem atenção.</p><Link to="/produtos">Ver relatórios <span aria-hidden="true">↗</span></Link></article>
        </div>
      </section>

      <section className="home-approach" aria-labelledby="home-approach-title">
        <div className="home-approach-copy"><span className="section-kicker">UMA ABORDAGEM MAIS CONSCIENTE</span><h2 id="home-approach-title">Menos ruído.<br /><span>Mais perspectiva.</span></h2><p>A CifraWealth foi concebida para aproximar números e decisões cotidianas. A plataforma ajuda a acompanhar o que aconteceu, visualizar prioridades e planejar com mais intenção — sem prometer resultados automáticos.</p><Link className="text-link" to="/wealthy">Conheça nossa proposta <span aria-hidden="true">→</span></Link></div>
        <div className="home-principles">
          <article><span>01</span><div><h3>Informação organizada</h3><p>Um histórico consistente facilita a leitura da sua rotina financeira.</p></div></article>
          <article><span>02</span><div><h3>Objetivos visíveis</h3><p>Metas ajudam a transformar intenções em prioridades acompanháveis.</p></div></article>
          <article><span>03</span><div><h3>Revisão contínua</h3><p>Olhar para os dados com frequência ajuda a perceber o que precisa mudar.</p></div></article>
        </div>
      </section>

      <section className="home-closing-cta section-frame" aria-labelledby="home-closing-title"><div><span className="section-kicker">O PRÓXIMO PASSO COMEÇA COM CLAREZA</span><h2 id="home-closing-title">Descubra o que você pode organizar hoje.</h2><p>Crie sua conta para começar ou entre se já utiliza a CifraWealth.</p></div><div className="home-closing-actions"><a href={`${APP_URL}/register`} className="button-primary">Cadastrar <span aria-hidden="true">↗</span></a><a href={`${APP_URL}/login`} className="button-quiet">Entrar na minha conta <span aria-hidden="true">→</span></a></div></section>
    </>
  );
}
