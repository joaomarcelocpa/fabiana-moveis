import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { ProdutoEscolhido } from '../data/tipos'

interface PedidoContextValue {
  /** id da categoria cujo catálogo está aberto (ou null) */
  categoriaAberta: string | null
  abrirCategoria: (id: string) => void
  fecharCategoria: () => void
  /** produto que o cliente escolheu no catálogo e que vai na mensagem do WhatsApp */
  produtoEscolhido: ProdutoEscolhido | null
  escolherProduto: (produto: ProdutoEscolhido) => void
  removerProduto: () => void
}

const PedidoContext = createContext<PedidoContextValue | null>(null)

export function PedidoProvider({ children }: { children: ReactNode }) {
  const [categoriaAberta, setCategoriaAberta] = useState<string | null>(null)
  const [produtoEscolhido, setProdutoEscolhido] = useState<ProdutoEscolhido | null>(null)

  const abrirCategoria = useCallback((id: string) => setCategoriaAberta(id), [])
  const fecharCategoria = useCallback(() => setCategoriaAberta(null), [])
  const removerProduto = useCallback(() => setProdutoEscolhido(null), [])

  const escolherProduto = useCallback((produto: ProdutoEscolhido) => {
    setProdutoEscolhido(produto)
    setCategoriaAberta(null)
    document.getElementById('whatsapp')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => document.getElementById('wa-nome')?.focus({ preventScroll: true }), 500)
  }, [])

  const value = useMemo(
    () => ({ categoriaAberta, abrirCategoria, fecharCategoria, produtoEscolhido, escolherProduto, removerProduto }),
    [categoriaAberta, abrirCategoria, fecharCategoria, produtoEscolhido, escolherProduto, removerProduto],
  )

  return <PedidoContext.Provider value={value}>{children}</PedidoContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePedido() {
  const ctx = useContext(PedidoContext)
  if (!ctx) throw new Error('usePedido precisa estar dentro de <PedidoProvider>')
  return ctx
}
