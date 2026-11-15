export type Pagamento = 'crediario' | 'cartao' | 'nao-sei'

export interface Produto {
  nome: string
  /** Preço em reais. Ex.: 2499 */
  preco: number
  /** ID da foto em /public/img (ex.: "f189229272") */
  foto: string
  alt: string
}

export interface Categoria {
  id: string
  titulo: string
  descricao: string
  itens: Produto[]
}

export interface ProdutoEscolhido extends Produto {
  /** Título da categoria de onde o produto veio */
  categoria: string
}

export interface Loja {
  id: string
  nome: string
  cidade: string
  /** Texto usado em listas: "Matriz, Pedro Leopoldo" */
  rotulo: string
  /** Só dígitos, com 55: 5531988621841 */
  whatsapp: string
  telefone: string
}
