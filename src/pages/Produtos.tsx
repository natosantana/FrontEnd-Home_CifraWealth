import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Produtos.css';

type CategoryId = 'todos' | 'organizacao' | 'planejamento' | 'analise';
type ResourceIconName = 'overview' | 'transactions' | 'categories' | 'goals' | 'reports' | 'profile';

type Resource = {
  id: string;
  category: Exclude<CategoryId, 'todos'>;
  label: string;
  title: string;
  description: string;
  details: string[];
  icon: ResourceIconName;
};

const filters: { id: CategoryId; label: string }[] = [
  { id: 'todos', label: 'Todos os recursos' },
  { id: 'organizacao', label: 'Organização financeira' },
  { id: 'planejamento', label: 'Metas e planejamento' },
  { id: 'analise', label: 'Análises e relatórios' },
];

const resources: Resource[] = [
  {
    id: 'visao-geral', category: 'organizacao', label: 'Visão consolidada', title: 'Visão geral financeira',
    description: 'Tenha uma leitura rápida do seu momento financeiro, reunindo informações importantes em um único painel.',
    details: ['Resumo de receitas e despesas', 'Indicadores para acompanhar o período', 'Gráficos para apoiar sua leitura'], icon: 'overview',
  },
  {
    id: 'transacoes', category: 'organizacao', label: 'Dia a dia', title: 'Transações organizadas',
    description: 'Registre e acompanhe as movimentações do cotidiano com informações que ajudam a manter tudo em ordem.',
    details: ['Registro de receitas e despesas', 'Consulta do histórico de movimentações', 'Acompanhamento por situação e período'], icon: 'transactions',
  },
  {
    id: 'categorias', category: 'organizacao', label: 'Mais contexto', title: 'Categorias personalizadas',
    description: 'Agrupe movimentações por tipo para entender melhor os hábitos financeiros e identificar padrões ao longo do tempo.',
    details: ['Organização por categorias', 'Leitura de despesas por grupo', 'Estrutura ajustável à sua rotina'], icon: 'categories',
  },
  {
    id: 'metas', category: 'planejamento', label: 'Foco no futuro', title: 'Metas financeiras',
    description: 'Transforme planos em objetivos acompanháveis, com valores definidos e uma visão clara do progresso.',
    details: ['Definição de objetivos e valores', 'Acompanhamento da evolução', 'Histórico de contribuições e progresso'], icon: 'goals',
  },
  {
    id: 'relatorios', category: 'analise', label: 'Visão analítica', title: 'Relatórios e insights',
    description: 'Explore a evolução das suas finanças com comparações por período e uma visão mais detalhada das movimentações.',
    details: ['Comparações entre períodos', 'Distribuição por categoria', 'Histórico para apoiar revisões do orçamento'], icon: 'reports',
  },
  {
    id: 'preferencias', category: 'planejamento', label: 'Experiência pessoal', title: 'Perfil e preferências',
    description: 'Mantenha as informações da sua conta organizadas e ajuste as preferências disponíveis para a sua experiência.',
    details: ['Consulta e atualização do perfil', 'Preferências da experiência', 'Acesso centralizado às configurações'], icon: 'profile',
  },
];

function ResourceIcon({ name }: { name: ResourceIconName }) {
  const common = { width: 23, height: 23, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  switch (name) {
    case 'overview': return <svg {...common}><rect x="3" y="3" width="7" height="8" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/></svg>;
    case 'transactions': return <svg {...common}><path d="M4 7h15M15 3l4 4-4 4M20 17H5m4-4-4 4 4 4"/></svg>;
    case 'categories': return <svg {...common}><circle cx="8" cy="8" r="4"/><circle cx="17" cy="7" r="2.5"/><circle cx="16" cy="17" r="4"/><path d="M3 17h5"/></svg>;
    case 'goals': return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m13 11 6-6"/></svg>;
    case 'reports': return <svg {...common}><path d="M4 19V5m0 14h17"/><path d="m7 15 4-4 3 2 6-7"/><path d="M16 6h4v4"/></svg>;
    case 'profile': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
  }
  return null;
}

export function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoryId>('todos');
  const produtosFiltrados = useMemo(
    () => categoriaAtiva === 'todos' ? resources : resources.filter((item) => item.category === categoriaAtiva),
    [categoriaAtiva],
  );

  return (
    <main className="products-page">
      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero-copy">
          <span className="page-eyebrow"><span className="eyebrow-indicator" /> RECURSOS CIFRAWEALTH</span>
          <h1 id="products-title">Seu dinheiro, com <span>mais clareza.</span></h1>
          <p className="products-lead">
            Organize movimentações, acompanhe metas e transforme informações do dia a dia em uma visão financeira mais fácil de entender.
          </p>
          <div className="products-hero-actions">
            <a href="#catalogo-recursos" className="button-primary">Explorar recursos <span aria-hidden="true">↓</span></a>
            <Link to="/duvidas" className="button-quiet">Entenda como funciona <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="products-proof-row" aria-label="Principais objetivos da plataforma">
            <span><i aria-hidden="true">✓</i> Organização</span>
            <span><i aria-hidden="true">✓</i> Planejamento</span>
            <span><i aria-hidden="true">✓</i> Acompanhamento</span>
          </div>
        </div>
        <aside className="products-hero-panel" aria-label="Resumo dos pilares da CifraWealth">
          <div className="panel-topline"><span className="panel-status-dot" /> VISÃO FINANCEIRA</div>
          <p className="panel-caption">Uma rotina mais consciente começa com informação bem organizada.</p>
          <div className="panel-metric-list">
            <div className="panel-metric"><span className="metric-icon">↗</span><div><strong>Registre</strong><small>Movimentações em um só lugar</small></div><span className="metric-step">01</span></div>
            <div className="panel-metric"><span className="metric-icon">◎</span><div><strong>Planeje</strong><small>Defina objetivos possíveis</small></div><span className="metric-step">02</span></div>
            <div className="panel-metric"><span className="metric-icon">⌁</span><div><strong>Acompanhe</strong><small>Revise sua evolução por período</small></div><span className="metric-step">03</span></div>
          </div>
          <p className="panel-footnote">Interface ilustrativa · resultados dependem das informações registradas.</p>
        </aside>
      </section>

      <section className="products-catalog section-frame" id="catalogo-recursos" aria-labelledby="catalog-title">
        <div className="section-intro products-section-intro">
          <span className="section-kicker">UM SISTEMA, DIFERENTES PERSPECTIVAS</span>
          <h2 id="catalog-title">Recursos para cada etapa da sua rotina financeira</h2>
          <p>Comece pelo que é mais importante para você. Os recursos se complementam para facilitar o registro, a organização e a análise das suas finanças pessoais.</p>
        </div>

        <div className="products-filter" role="group" aria-label="Filtrar recursos por categoria">
          {filters.map((filter) => (
            <button key={filter.id} type="button" aria-pressed={categoriaAtiva === filter.id}
              className={`products-filter-button${categoriaAtiva === filter.id ? ' is-active' : ''}`}
              onClick={() => setCategoriaAtiva(filter.id)}>
              {filter.label}
            </button>
          ))}
        </div>

        <p className="products-result-count" aria-live="polite">
          {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'recurso disponível nesta categoria' : 'recursos disponíveis nesta categoria'}
        </p>

        <div className="product-grid" aria-label="Recursos disponíveis">
          {produtosFiltrados.map((item, index) => (
            <article className="product-card" key={item.id} style={{ animationDelay: `${Math.min(index * 55, 220)}ms` }}>
              <div className="product-card-top">
                <span className="product-icon"><ResourceIcon name={item.icon} /></span>
                <span className="product-category-label">{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="product-description">{item.description}</p>
              <ul className="product-detail-list">
                {item.details.map((detail) => <li key={detail}><span aria-hidden="true">✓</span>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="products-method section-frame" aria-labelledby="method-title">
        <div className="method-heading">
          <span className="section-kicker">SIMPLES NA PRÁTICA</span>
          <h2 id="method-title">Mais contexto para fazer escolhas melhores.</h2>
          <p>Uma visão financeira útil não depende de complicação. Ela começa com consistência, objetivos definidos e revisões periódicas.</p>
        </div>
        <div className="method-steps">
          <article className="method-step"><span>01</span><h3>Organize</h3><p>Registre receitas e despesas e dê contexto a cada movimentação.</p></article>
          <article className="method-step"><span>02</span><h3>Defina prioridades</h3><p>Transforme planos em metas que possam ser acompanhadas ao longo do tempo.</p></article>
          <article className="method-step"><span>03</span><h3>Revise e evolua</h3><p>Use relatórios e históricos para identificar padrões e ajustar seu planejamento.</p></article>
        </div>
      </section>

      <section className="products-cta section-frame" aria-labelledby="products-cta-title">
        <div><span className="section-kicker">PRECISA DE MAIS INFORMAÇÕES?</span><h2 id="products-cta-title">Entenda cada recurso antes de começar.</h2><p>Consulte respostas sobre cadastro, movimentações, metas e relatórios na central de dúvidas.</p></div>
        <Link to="/duvidas" className="button-primary">Acessar dúvidas frequentes <span aria-hidden="true">↗</span></Link>
      </section>
      <p className="products-disclaimer">A CifraWealth é apresentada neste projeto como uma ferramenta de organização e acompanhamento financeiro pessoal. Os conteúdos são informativos e não constituem recomendação de investimento, oferta de produtos financeiros ou garantia de resultados.</p>
    </main>
  );
}
