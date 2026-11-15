# Fabiana Móveis e Eletro — site

Página inicial da Fabiana Móveis e Eletro (Pedro Leopoldo e Matozinhos, MG).
React 19 + TypeScript + Tailwind CSS 4, empacotado com Vite.

## Como rodar

```bash
npm install        # só na primeira vez
npm run dev        # desenvolvimento, com recarga automática
npm run build      # confere os tipos e gera a pasta dist/ (é ela que vai para a hospedagem)
npm run preview    # abre a versão de dist/ localmente
npm run lint
```

## Onde mexer

| Quero mudar…                                  | Arquivo                                  |
| --------------------------------------------- | ---------------------------------------- |
| Produtos, preços e fotos do catálogo          | `src/data/catalogo.ts`                   |
| Lojas e telefones (WhatsApp)                  | `src/data/lojas.ts`                      |
| Cores e fontes da marca                       | `src/index.css` (bloco `@theme`)         |
| Texto de cada parte da página                 | `src/components/sections/*.tsx`          |
| Menu, rodapé e barra do celular               | `src/components/layout/*.tsx`            |
| Botão, títulos, ícones                        | `src/components/ui/*.tsx`                |
| Mensagem que vai para o WhatsApp              | `src/lib/whatsapp.ts`                    |
| Créditos das fotos                            | `src/data/creditos.ts`                   |

> **Atenção:** os produtos, preços e fotos do catálogo atual são **exemplos**.
> Troque pelos reais em `src/data/catalogo.ts` (nome, preço em reais, foto, texto alternativo)
> e coloque as fotos em `public/img/`.

## Estrutura

```
src/
  App.tsx                      monta a página
  index.css                    Tailwind + cores e pontos de quebra da marca
  context/PedidoContext.tsx    estado compartilhado: catálogo aberto e produto escolhido
  data/                        catálogo, lojas, créditos e tipos (TypeScript)
  lib/                         funções de apoio (preço, WhatsApp, classes)
  components/
    ui/                        Button, Icon, Typography, Layout
    layout/                    Header, Footer, ActionBar
    sections/                  Hero, Produtos, Sobre, Ambientes, ComoComprar, Pagamento, WhatsApp, FaixaCta
    CatalogoDialog.tsx         janela com as opções de cada categoria
    CreditosDialog.tsx         créditos das fotos
public/img/                    fotos e logo
```

## Pontos de quebra (responsivo)

Definidos em `src/index.css` como variantes do Tailwind, no mesmo estilo "até X px" do desenho original:
`laptop` (até 1100 px), `tablet` (860), `sheet` (760, menu em tela cheia), `narrow` (700), `phone` (560), `tiny` (520).
Exemplo: `tablet:grid-cols-1` vale de 860 px para baixo.
