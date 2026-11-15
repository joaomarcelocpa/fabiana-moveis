/** 2499 -> "R$ 2.499,00" */
export function brl(valor: number) {
  return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

/** Caminho de uma foto em /public/img. Sem tamanho, usa o arquivo original. */
export function foto(id: string, largura?: number) {
  return `/img/photo-${id}${largura ? `-${largura}` : ''}.jpg`
}

/** srcset com os tamanhos pedidos: srcSet('f123', [500, 960]) */
export function fotoSrcSet(id: string, larguras: number[]) {
  return larguras.map((l) => `${foto(id, l)} ${l}w`).join(', ')
}
