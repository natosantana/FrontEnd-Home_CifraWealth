# CifraWealth — direção de UI/UX e arquitetura recomendada

## 1. Direção visual

**Personalidade:** profissional, precisa, acessível e centrada na clareza financeira. A marca deve transmitir organização e confiança sem parecer uma corretora quando o produto é uma ferramenta de organização financeira pessoal.

### Tokens que devem permanecer consistentes

| Token | Valor | Uso |
|---|---|---|
| Canvas | `#0b1020` | Fundo principal |
| Surface | `#121827` | Header, footer e cards |
| Elevated | `#161f32` | Elementos sobrepostos e controles |
| Hover | `#1e293b` | Realce de componentes |
| Line | `#202634` | Bordas e divisores sutis |
| Line strong | `#313d52` | Contornos de maior contraste |
| Foreground | `#f1f5f9` | Títulos e texto principal |
| Secondary | `#cbd5e1` | Texto de leitura secundário |
| Muted | `#94a3b8` | Descrições e metadados |
| Accent | `#2dd4bf` | Ações, foco, estados ativos e pequenos destaques |
| Tipografia | Inter | Toda a interface |

O turquesa deve ser um acento, não um preenchimento de grandes áreas. Evite adicionar uma segunda cor de marca sem razão funcional. Vermelho, amarelo e azul informativo devem ser reservados a estados semânticos, conforme a convenção do frontend autenticado.

## 2. Estrutura recomendada da experiência pública

- **Início:** promessa de valor objetiva; resumo dos recursos; benefício prático; CTA para conhecer a plataforma e acesso à central de ajuda.
- **Recursos:** catálogo pesquisável/filtrável; recursos correspondentes às funcionalidades reais da aplicação; explicação dos fluxos de uso; observação transparente sobre limites e natureza informativa.
- **Sobre:** propósito, princípios, modelo de funcionamento e transparência. Evitar alegações legais ou institucionais sem documentos que as comprovem.
- **Dúvidas:** busca, temas, FAQ acessível, estados sem resultado e caminhos de ajuda reais.
- **Acesso à aplicação:** CTA direcionado por variável de ambiente para a URL oficial do frontend autenticado; não apontar para rotas inexistentes no site institucional.

## 3. Estrutura sugerida de componentes

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    site/
      SiteHeader.tsx
      SiteFooter.tsx
      PageHero.tsx
      SectionHeading.tsx
      PrimaryButton.tsx
    feedback/
      EmptyState.tsx
    resources/
      ResourceCard.tsx
      ResourceFilters.tsx
    faq/
      FaqSearch.tsx
      FaqCategoryFilters.tsx
      FaqAccordionItem.tsx
  pages/
    Home.tsx
    Produtos.tsx
    Duvidas.tsx
    Wealthy.tsx
  data/
    resources.ts
    faq.ts
  styles/
    tokens.css
    App.css
    Produtos.css
    Duvidas.css
```

Hoje, `SiteHeader` e `SiteFooter` já foram extraídos; os conjuntos de conteúdo estão centralizados nos arquivos das páginas para manter o redesign sem excesso de abstração. Conforme o produto crescer, mover os arrays de recursos/FAQ para `src/data/` e os componentes repetidos para pastas dedicadas facilitará os testes.

## 4. Comportamentos e acessibilidade

- Todo controle deve funcionar via teclado e ter estado de foco visível.
- Em filtros, indicar estado selecionado com `aria-pressed` e não depender apenas de cor.
- Em acordeões, usar `button`, `aria-expanded` e `aria-controls`, com conteúdo associado ao controle.
- A busca deve atualizar a lista sem recarregar a página, informar a quantidade de resultados e oferecer um estado vazio com recuperação simples.
- Respeitar `prefers-reduced-motion`; animações devem realçar hierarquia, não atrasar acesso ao conteúdo.
- Validar o contraste de texto normal, texto ampliado, bordas de campos, foco, estados desabilitados e controles com WCAG 2.2 AA.
- Não usar placeholders como único rótulo de campos. Evitar ícones sem nome acessível quando forem controles.
- Definir um limite de largura para parágrafos longos e manter escala tipográfica, espaço entre seções e raios de borda previsíveis.

## 5. Conteúdo financeiro responsável

A copy deve explicar **o que a funcionalidade faz** e **quais são seus limites**. Evitar frases como “garantido”, “sem risco”, “melhor rentabilidade”, “autorizado pelo regulador”, “protegido pelo FGC” ou “taxa zero” sem confirmação documental e revisão jurídica. Gráficos de demonstração devem estar identificados como ilustrativos. Não exibir dados falsos como prova social ou resultado de cliente.

## 6. Critérios de aceite

- Paleta e tipografia iguais às do frontend autenticado.
- Não há links apontando a rotas inexistentes.
- Navegação por teclado, foco visível e menu móvel funcionais.
- Filtros de recursos e busca/filtros da FAQ atualizam o conteúdo corretamente.
- Estados vazios, textos longos e telas estreitas não quebram a hierarquia.
- Respeito a `prefers-reduced-motion`.
- Build e lint passam em instalação limpa.
- Validação manual em pelo menos 360, 768, 1024 e 1440 px.
- Privacidade, dados institucionais e qualquer alegação regulatória aprovados antes do lançamento.
