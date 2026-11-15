import { brl } from './format'
import type { Pagamento, ProdutoEscolhido } from '../data/tipos'

interface DadosMensagem {
  nome: string
  categoria: string
  pagamento: Pagamento
  produto: ProdutoEscolhido | null
}

const FRASE_PAGAMENTO: Record<Pagamento, string> = {
  crediario: 'Gostaria de solicitar o crediário próprio.',
  cartao: 'Quero parcelar em até 12x no cartão de crédito.',
  'nao-sei': 'Quero saber as condições de pagamento.',
}

export function montarMensagem({ nome, categoria, pagamento, produto }: DadosMensagem) {
  const interesse = produto
    ? `Tenho interesse em: ${produto.nome} (${brl(produto.preco)}). `
    : `Estou procurando: ${categoria}. `
  return `Olá! Aqui é ${nome.trim()}, vim pelo site da Fabiana Móveis. ${interesse}${FRASE_PAGAMENTO[pagamento]}`
}

/** wa.me/<número>?text=<mensagem>. O número vai só com dígitos, com o 55 do Brasil. */
export function urlWhatsApp(numero: string, texto?: string) {
  const base = `https://wa.me/${numero}`
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base
}
