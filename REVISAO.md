# CifraWealth — revisão profissional de UI/UX

## Resumo executivo

O redesign agora segue a base visual encontrada no `CifraWealth_FrontEnd`: tipografia **Inter**, superfícies escuras em azul-marinho, texto claro, bordas discretas e turquesa como cor de ação. A referência da Rico foi usada como inspiração de comunicação — hierarquia editorial, navegação clara, textos acessíveis e organização por temas — sem reproduzir marca, logotipo ou interface literalmente.

A revisão também alinhou o posicionamento dos dois projetos. O frontend principal implementa uma experiência de organização financeira pessoal com dashboard, transações, categorias, metas e relatórios. Por isso, a página pública “Produtos” agora apresenta recursos compatíveis com esse escopo, em vez de prometer corretagem, cartões, tarifas, rentabilidade ou serviços regulados que não estavam comprovados no código.

## Principais melhorias implementadas

- **Design system unificado:** tokens CSS correspondentes à paleta do frontend (`#0b1020`, `#121827`, `#161f32`, `#1e293b`, `#2dd4bf`) e uso de Inter em toda a experiência.
- **Navegação redesenhada:** header sticky, links de rota consistentes, estado de página ativa, menu móvel acessível e link para pular ao conteúdo.
- **Home alinhada ao produto real:** posicionamento focado em organização, planejamento, metas e acompanhamento, com CTAs que levam a rotas existentes.
- **Produtos reestruturada:** hero editorial, painel visual ilustrativo, filtros funcionais, cards organizados por objetivo, listas curtas de capacidades e CTA para a central de dúvidas.
- **Dúvidas reestruturada:** busca em perguntas e respostas, filtros por categoria, acordeão com `aria-expanded`, estado vazio e conteúdo informativo mais completo.
- **Página institucional revisada:** foco em proposta de valor e princípios, retirando afirmações não comprovadas sobre autorizações regulatórias, garantias, taxas, corretagem e proteção patrimonial.
- **Animação com propósito:** entradas sutis, hover moderado e respeito a `prefers-reduced-motion`.
- **Responsividade:** layouts específicos para desktop, tablet e celular, com filtros roláveis em telas estreitas e menu móvel dedicado.
- **Sem novos pacotes de UI:** implementação baseada em React, React Router e CSS existente, sem adicionar dependência de animação ou ícones.
- **Fallback de rota:** tela de “página não encontrada” com caminhos de retorno funcionais.
- **Metadados:** `lang="pt-BR"`, título e descrição mais adequados à marca.

## Avaliação das páginas prioritárias

### Produtos

A página separa seis recursos em três grupos: organização financeira; metas e planejamento; análises e relatórios. Os filtros atualizam a listagem, e cada card explica a finalidade do recurso e os principais usos esperados. O texto evita promessas de rentabilidade ou benefícios não demonstrados pelo produto.

### Dúvidas / FAQ

A central oferece busca por conteúdo, filtros por tema e perguntas expansíveis. As respostas explicam o fluxo de uso com linguagem simples e incluem limites importantes: os gráficos refletem os dados cadastrados, a disponibilidade varia conforme a versão e a aplicação não deve ser apresentada como uma corretora ou fonte de recomendação de investimento.

## Recomendações para a próxima etapa

1. **Integração entre site e aplicação:** configurar uma URL oficial para a aplicação autenticada e adicionar CTAs reais de cadastro/login. O site de apresentação não inventa uma URL de login.
2. **Privacidade e segurança:** publicar Política de Privacidade, Termos de Uso, canal de suporte e informações sobre armazenamento, retenção, acesso, criptografia e tratamento de dados antes de receber dados financeiros reais.
3. **Conteúdo jurídico:** validar nome empresarial, razão social, CNPJ, endereços e qualquer informação regulatória com a área responsável. Não reutilizar o telefone, frases legais ou afirmações de uma marca de referência.
4. **Acessibilidade:** executar testes com teclado e leitor de tela, validar contraste WCAG 2.2 AA e conferir os fluxos de autenticação.
5. **Qualidade e testes:** adicionar testes para filtros e busca da FAQ, menu responsivo, rotas, cadastro/login e estados vazios; incluir verificação visual em larguras de 360, 768, 1024 e 1440 px.
6. **Tokens compartilhados:** mover os valores de cor, tipografia, raio, espaçamento e motion para tokens consumidos tanto pelo site público quanto pelo frontend autenticado. Isso evita divergência no futuro.
7. **Conteúdo e produto:** conferir cada capacidade descrita em Produtos contra o comportamento disponível na aplicação de produção antes de publicar.

## Validação técnica

Foi feita revisão estática dos arquivos e da estrutura dos componentes. A instalação das dependências foi iniciada, mas não foi concluída neste ambiente; por isso, não foi possível executar um `npm run build` real nem testes de navegador. A tentativa de TypeScript também foi bloqueada por pacotes locais incompletos (`vite/client` e `@types/node` não disponíveis). Isso não é apresentado como build aprovado.

Para validar localmente, na pasta do projeto:

```bash
npm ci
npm run build
npm run lint
npm run dev
```

Se o ambiente de desenvolvimento tiver problema ao baixar dependências opcionais nativas, remova `node_modules` e o lockfile **somente se necessário**, e reinstale a partir de um ambiente Node compatível com a versão declarada pelo projeto. Não apague o lockfile por padrão.

## Referências de design consultadas

- Rico — página oficial de produtos, usada como referência de hierarquia de conteúdo por categorias e orientação em linguagem acessível: https://www.rico.com.vc/produtos/
- W3C WAI — técnica para respeitar preferência por movimento reduzido: https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html
- Impeccable — https://github.com/pbakaus/impeccable
- design-taste-frontend — https://github.com/tenacityinc/design-taste-frontend

A referência visual da Rico orientou a clareza e a estrutura editorial, enquanto a paleta e tipografia foram extraídas do frontend CifraWealth fornecido.
