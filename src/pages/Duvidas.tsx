import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Duvidas.css';

type FaqCategory = 'Tudo' | 'Primeiros passos' | 'Organização financeira' | 'Metas e relatórios' | 'Conta e privacidade';
type Faq = { id: string; category: Exclude<FaqCategory, 'Tudo'>; question: string; answer: string };

const categories: FaqCategory[] = ['Tudo', 'Primeiros passos', 'Organização financeira', 'Metas e relatórios', 'Conta e privacidade'];

const questions: Faq[] = [
  {
    id: 'comecar', category: 'Primeiros passos', question: 'O que é a CifraWealth?',
    answer: 'A CifraWealth é uma experiência digital voltada à organização financeira pessoal. A proposta é reunir movimentações, categorias, metas e relatórios em uma interface clara, para ajudar você a acompanhar sua rotina financeira com mais contexto.',
  },
  {
    id: 'cadastro', category: 'Primeiros passos', question: 'Como começo a usar a plataforma?',
    answer: 'Use o fluxo de cadastro disponibilizado pela aplicação CifraWealth e siga as etapas solicitadas na tela. Depois de entrar, comece registrando suas movimentações, organizando categorias e definindo quais objetivos deseja acompanhar. A disponibilidade de cada etapa pode variar conforme o ambiente em que a aplicação estiver publicada.',
  },
  {
    id: 'corretora', category: 'Primeiros passos', question: 'A CifraWealth é uma corretora ou recomenda investimentos?',
    answer: 'Não. Neste projeto, a CifraWealth é apresentada como uma ferramenta de organização e acompanhamento financeiro pessoal. As informações da plataforma são destinadas ao controle e ao planejamento do orçamento; não representam oferta de corretagem, recomendação individual de investimento ou promessa de rentabilidade.',
  },
  {
    id: 'receitas-despesas', category: 'Organização financeira', question: 'Posso registrar receitas e despesas?',
    answer: 'Sim. A área de transações foi pensada para registrar e consultar movimentações financeiras. Manter os lançamentos atualizados e usar descrições consistentes ajuda a construir um histórico mais útil para acompanhar entradas, saídas e compromissos do período.',
  },
  {
    id: 'categorias', category: 'Organização financeira', question: 'Para que servem as categorias?',
    answer: 'As categorias agrupam movimentações semelhantes, como moradia, transporte, alimentação, salário ou outras fontes de receita. Essa organização facilita a leitura do orçamento e permite identificar quais grupos representam uma parcela maior das despesas ao longo do tempo.',
  },
  {
    id: 'editar-transacoes', category: 'Organização financeira', question: 'Como mantenho minhas movimentações organizadas?',
    answer: 'Procure registrar cada movimentação assim que possível, confira valor e data, escolha uma categoria adequada e revise os lançamentos periodicamente. Se identificar um erro, utilize as opções de edição disponíveis na área de transações do ambiente que estiver usando.',
  },
  {
    id: 'metas', category: 'Metas e relatórios', question: 'Como funcionam as metas financeiras?',
    answer: 'As metas ajudam a transformar um objetivo — como formar uma reserva ou planejar uma compra — em um valor que possa ser acompanhado. Defina um nome e uma quantia realista, atualize o progresso conforme sua evolução e revise o prazo quando sua situação financeira mudar.',
  },
  {
    id: 'relatorios', category: 'Metas e relatórios', question: 'O que encontro na área de relatórios?',
    answer: 'A área de relatórios reúne formas de observar suas movimentações por período, comparar resultados e visualizar a distribuição por categoria. Esses dados são mais úteis quando os lançamentos estão completos e categorizados de maneira consistente.',
  },
  {
    id: 'dados', category: 'Conta e privacidade', question: 'Quais cuidados devo ter com meus dados?',
    answer: 'Utilize senhas fortes e não compartilhe códigos de verificação. Antes de inserir informações reais, confirme que está no endereço oficial da aplicação e consulte a Política de Privacidade e os Termos de Uso do ambiente publicado. Ambientes de demonstração ou desenvolvimento não devem receber dados financeiros sensíveis.',
  },
  {
    id: 'acesso', category: 'Conta e privacidade', question: 'O que fazer se eu não conseguir acessar minha conta?',
    answer: 'Confira se o endereço de e-mail e a senha foram digitados corretamente e se a etapa de verificação solicitada foi concluída. Caso o problema persista, use o fluxo de recuperação disponível na tela de acesso, quando habilitado, ou procure o canal oficial de suporte informado pelo responsável pela plataforma.',
  },
  {
    id: 'exportar', category: 'Metas e relatórios', question: 'Posso exportar ou compartilhar meus relatórios?',
    answer: 'As opções de exportação dependem das funcionalidades habilitadas na versão da aplicação em uso. Antes de compartilhar um relatório, revise os dados apresentados e remova informações pessoais ou financeiras que não precisem ser divulgadas.',
  },
  {
    id: 'recomendacao', category: 'Organização financeira', question: 'Os gráficos são uma previsão do meu resultado financeiro?',
    answer: 'Não. Os gráficos representam os dados registrados e os cálculos apresentados pela aplicação; eles não garantem resultados futuros nem substituem uma análise profissional. A qualidade da visualização depende da atualização e da consistência das informações informadas.',
  },
];

export function Duvidas() {
  const [termo, setTermo] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<FaqCategory>('Tudo');
  const [aberta, setAberta] = useState<string | null>('comecar');

  const filtradas = useMemo(() => {
    const normalized = termo.trim().toLocaleLowerCase('pt-BR');
    return questions.filter((item) => {
      const matchesCategory = categoriaAtiva === 'Tudo' || item.category === categoriaAtiva;
      const matchesText = !normalized || `${item.question} ${item.answer} ${item.category}`.toLocaleLowerCase('pt-BR').includes(normalized);
      return matchesCategory && matchesText;
    });
  }, [termo, categoriaAtiva]);

  return (
    <main className="faq-page">
      <section className="faq-hero" aria-labelledby="faq-title">
        <div className="faq-hero-content">
          <span className="page-eyebrow"><span className="eyebrow-indicator" /> CENTRAL DE CONHECIMENTO</span>
          <h1 id="faq-title">Informação clara.<br /><span>Mais tranquilidade.</span></h1>
          <p>Encontre orientações sobre a CifraWealth, organização financeira, metas e relatórios. Respostas diretas para ajudar você a aproveitar melhor cada recurso.</p>
          <a className="faq-hero-link" href="#faq-conteudo">Explorar perguntas <span aria-hidden="true">↓</span></a>
        </div>
        <div className="faq-hero-aside" aria-hidden="true">
          <div className="faq-aside-mark">?</div>
          <span>RESPOSTAS QUE APROXIMAM</span>
          <p>Entenda o essencial no seu ritmo, sem complicar o que pode ser simples.</p>
          <div className="faq-aside-line"><span /><span /><span /></div>
        </div>
      </section>

      <section id="faq-conteudo" className="faq-content section-frame" aria-labelledby="faq-content-title">
        <div className="faq-heading-row">
          <div><span className="section-kicker">COMO PODEMOS AJUDAR?</span><h2 id="faq-content-title">Perguntas frequentes</h2><p>Pesquise uma palavra ou selecione um tema para encontrar a resposta que procura.</p></div>
          <div className="faq-total"><strong>{questions.length.toString().padStart(2, '0')}</strong><span>respostas<br />na central</span></div>
        </div>

        <div className="faq-tools">
          <label className="faq-search" htmlFor="faq-search-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.2 4.2"/></svg>
            <input id="faq-search-input" type="search" value={termo} onChange={(event) => setTermo(event.target.value)} placeholder="Ex.: metas, despesas, acesso..." />
            {termo && <button type="button" className="faq-clear-search" onClick={() => setTermo('')} aria-label="Limpar busca">×</button>}
          </label>
          <div className="faq-category-filters" role="group" aria-label="Filtrar perguntas por tema">
            {categories.map((category) => <button key={category} type="button" className={`faq-category-button${categoriaAtiva === category ? ' is-active' : ''}`} aria-pressed={categoriaAtiva === category} onClick={() => setCategoriaAtiva(category)}>{category}</button>)}
          </div>
        </div>

        <p className="faq-results" aria-live="polite">{filtradas.length} {filtradas.length === 1 ? 'resposta encontrada' : 'respostas encontradas'}</p>

        {filtradas.length > 0 ? (
          <div className="faq-list">
            {filtradas.map((item, index) => {
              const isOpen = aberta === item.id;
              const panelId = `faq-answer-${item.id}`;
              return (
                <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.id}>
                  <button type="button" className="faq-question" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setAberta(isOpen ? null : item.id)}>
                    <span className="faq-question-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-question-copy"><span className="faq-question-category">{item.category}</span><span className="faq-question-title">{item.question}</span></span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer" id={panelId} hidden={!isOpen}><p>{item.answer}</p></div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="faq-empty-state"><span className="faq-empty-icon" aria-hidden="true">⌕</span><h3>Nenhuma resposta encontrada</h3><p>Tente outra palavra ou selecione “Tudo” para ampliar sua busca.</p><button className="faq-reset-button" type="button" onClick={() => { setTermo(''); setCategoriaAtiva('Tudo'); }}>Limpar filtros</button></div>
        )}
      </section>

      <section className="faq-bottom-cta section-frame" aria-labelledby="faq-cta-title">
        <div className="faq-cta-icon" aria-hidden="true">↗</div>
        <div><span className="section-kicker">CONTINUE EXPLORANDO</span><h2 id="faq-cta-title">Quer conhecer os recursos da plataforma?</h2><p>Veja como movimentações, categorias, metas e relatórios se conectam em uma experiência financeira mais organizada.</p></div>
        <Link to="/produtos" className="button-primary">Conhecer recursos <span aria-hidden="true">↗</span></Link>
      </section>
      <p className="faq-disclaimer">As orientações desta página têm caráter informativo. A disponibilidade dos recursos pode variar conforme a versão e a configuração da aplicação.</p>
    </main>
  );
}
