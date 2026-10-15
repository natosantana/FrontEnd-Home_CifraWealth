import { Link } from 'react-router-dom';

export function Wealthy() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy"><span className="page-eyebrow"><span className="eyebrow-indicator" /> SOBRE A CIFRAWEALTH</span><h1 id="about-title">Uma relação mais clara com o seu dinheiro começa pela <span>informação.</span></h1><p>A CifraWealth reúne recursos de organização financeira pessoal em uma experiência que valoriza clareza, autonomia e acompanhamento contínuo.</p><Link className="button-primary" to="/produtos">Conhecer os recursos <span aria-hidden="true">↗</span></Link></div>
        <div className="about-hero-card" aria-label="Princípios da CifraWealth"><div className="about-symbol" aria-hidden="true">∞</div><span className="section-kicker">NOSSO FOCO</span><h2>Organizar para entender. Entender para planejar.</h2><p>Uma abordagem prática para acompanhar o presente e tomar decisões cotidianas com mais contexto.</p><div className="about-card-tags"><span>Clareza</span><span>Consistência</span><span>Autonomia</span></div></div>
      </section>

      <section className="about-principles section-frame" aria-labelledby="about-principles-title"><div className="section-intro"><span className="section-kicker">O QUE ORIENTA A EXPERIÊNCIA</span><h2 id="about-principles-title">Princípios simples, aplicados à rotina.</h2><p>O valor de uma ferramenta financeira está em tornar a informação mais acessível e útil no dia a dia.</p></div><div className="about-principles-grid"><article><span>01</span><h3>Clareza antes da complexidade</h3><p>Textos objetivos e visualizações organizadas para ajudar a compreender a própria situação financeira.</p></article><article><span>02</span><h3>Planejamento realista</h3><p>Metas e históricos servem como apoio para organizar prioridades compatíveis com cada momento.</p></article><article><span>03</span><h3>Responsabilidade com a informação</h3><p>Os dados precisam ser interpretados com contexto. Gráficos e registros não garantem resultados futuros.</p></article></div></section>

      <section className="about-how section-frame" aria-labelledby="about-how-title"><div><span className="section-kicker">UMA EXPERIÊNCIA CONECTADA</span><h2 id="about-how-title">Da movimentação ao panorama geral.</h2><p>Transações, categorias, metas e relatórios funcionam como partes de uma mesma rotina: registrar, organizar, acompanhar e revisar. A proposta não é substituir seu julgamento, mas oferecer contexto para suas decisões.</p><Link to="/duvidas" className="text-link">Leia as perguntas frequentes <span aria-hidden="true">→</span></Link></div><div className="about-flow"><div><span>01</span><strong>Registrar</strong><small>Receitas e despesas</small></div><i aria-hidden="true">↓</i><div><span>02</span><strong>Organizar</strong><small>Categorias e objetivos</small></div><i aria-hidden="true">↓</i><div><span>03</span><strong>Acompanhar</strong><small>Histórico e relatórios</small></div></div></section>

      <section className="about-note section-frame"><span className="about-note-icon" aria-hidden="true">i</span><div><h2>Transparência sobre o projeto</h2><p>As informações institucionais, a política de privacidade, os termos de uso e os canais oficiais devem ser publicados e verificados antes de disponibilizar a plataforma para uso com dados reais. Esta página não afirma vínculo com instituições reguladas nem oferece produtos de investimento.</p></div></section>
    </main>
  );
}
