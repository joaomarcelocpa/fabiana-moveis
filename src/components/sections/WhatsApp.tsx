import { useState, type FormEvent } from 'react'
import { usePedido } from '../../context/PedidoContext'
import { OPCOES_PROCURA } from '../../data/catalogo'
import { LOJAS } from '../../data/lojas'
import type { Pagamento } from '../../data/tipos'
import { brl } from '../../lib/format'
import { montarMensagem, urlWhatsApp } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Icon, WhatsAppIcon } from '../ui/Icon'
import { Container } from '../ui/Layout'
import { Lead, Titulo } from '../ui/Typography'

const FORMAS_PAGAMENTO: { valor: Pagamento; rotulo: string }[] = [
  { valor: 'crediario', rotulo: 'Crediário próprio' },
  { valor: 'cartao', rotulo: 'Cartão em até 12x' },
  { valor: 'nao-sei', rotulo: 'Ainda não sei' },
]

const CAMPO =
  'h-12 w-full rounded-[10px] border-[1.5px] border-[#c3d2e3] bg-white px-3.5 text-[15px] text-ink focus:border-brand focus:outline-3 focus:outline-brand/25'
const ROTULO = 'text-[13px] leading-[1.3] font-semibold'

export function WhatsApp() {
  const { produtoEscolhido, removerProduto } = usePedido()
  const [nome, setNome] = useState('')
  const [lojaId, setLojaId] = useState(LOJAS[0].id)
  const [categoria, setCategoria] = useState(OPCOES_PROCURA[0])
  const [pagamento, setPagamento] = useState<Pagamento>('crediario')
  const [erroNome, setErroNome] = useState(false)
  const [status, setStatus] = useState('Você confere a mensagem no WhatsApp antes de enviar.')

  // Ao escolher um produto no catálogo, a lista "O que você procura" acompanha a categoria dele.
  // (Ajuste de estado durante a renderização, o jeito recomendado pelo React em vez de useEffect.)
  const [produtoAnterior, setProdutoAnterior] = useState(produtoEscolhido)
  if (produtoEscolhido !== produtoAnterior) {
    setProdutoAnterior(produtoEscolhido)
    if (produtoEscolhido) setCategoria(produtoEscolhido.categoria)
  }

  function enviar(e: FormEvent) {
    e.preventDefault()
    if (!nome.trim()) {
      setErroNome(true)
      document.getElementById('wa-nome')?.focus()
      return
    }
    const loja = LOJAS.find((l) => l.id === lojaId) ?? LOJAS[0]
    const texto = montarMensagem({ nome, categoria, pagamento, produto: produtoEscolhido })
    setStatus('Abrindo o WhatsApp da loja…')
    window.open(urlWhatsApp(loja.whatsapp, texto), '_blank', 'noopener')
  }

  return (
    <section id="whatsapp" aria-labelledby="wa-h" className="bg-white py-[72px] tablet:py-14">
      <Container className="max-w-[760px]">
        <div className="mb-7 grid justify-items-center gap-3.5 text-center">
          <Titulo id="wa-h">Compre e solicite o crediário pelo WhatsApp</Titulo>
          <Lead className="max-w-[560px]">
            Conte o que você procura e como prefere pagar. A conversa abre direto com a loja que você escolher, e lá a
            solicitação do crediário é feita com você.
          </Lead>
        </div>

        <form onSubmit={enviar} noValidate className="grid gap-[18px] rounded-2xl bg-mist p-7 phone:p-5">
          <div className="grid min-w-0 gap-1.5">
            <label htmlFor="wa-nome" className={ROTULO}>
              Seu nome
            </label>
            <input
              id="wa-nome"
              name="nome"
              type="text"
              autoComplete="given-name"
              required
              value={nome}
              onChange={(e) => {
                setNome(e.target.value)
                setErroNome(false)
              }}
              aria-invalid={erroNome || undefined}
              aria-describedby={erroNome ? 'wa-nome-err' : undefined}
              className={`${CAMPO} ${erroNome ? 'border-[#b3261e]' : ''}`}
            />
            {erroNome && (
              <p id="wa-nome-err" className="text-[13px] text-[#b3261e]">
                Escreva seu nome para a loja saber com quem falar.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3.5 phone:grid-cols-1">
            <div className="grid min-w-0 gap-1.5">
              <label htmlFor="wa-loja" className={ROTULO}>
                Loja
              </label>
              <select id="wa-loja" value={lojaId} onChange={(e) => setLojaId(e.target.value)} className={`${CAMPO} select-chevron`}>
                {LOJAS.map((loja) => (
                  <option key={loja.id} value={loja.id}>
                    {loja.rotulo}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid min-w-0 gap-1.5">
              <label htmlFor="wa-item" className={ROTULO}>
                O que você procura
              </label>
              <select id="wa-item" value={categoria} onChange={(e) => setCategoria(e.target.value)} className={`${CAMPO} select-chevron`}>
                {OPCOES_PROCURA.map((opcao) => (
                  <option key={opcao}>{opcao}</option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="grid min-w-0 gap-1.5">
            <legend className={ROTULO}>Como prefere pagar</legend>
            <div className="mt-1.5 grid grid-cols-3 gap-2.5 phone:grid-cols-1">
              {FORMAS_PAGAMENTO.map((forma) => (
                <label key={forma.valor} className="relative">
                  <input
                    type="radio"
                    name="pag"
                    value={forma.valor}
                    checked={pagamento === forma.valor}
                    onChange={() => setPagamento(forma.valor)}
                    className="peer absolute inset-0 m-0 size-full cursor-pointer opacity-0"
                  />
                  <span className="flex min-h-12 items-center justify-center rounded-[10px] border-[1.5px] border-[#c3d2e3] bg-white px-2.5 py-2 text-center text-[13px] leading-tight font-medium peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sun">
                    {forma.rotulo}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {produtoEscolhido && (
            <div className="flex flex-wrap items-center gap-3 rounded-xl border-[1.5px] border-brand bg-white px-3.5 py-3">
              <span className="min-w-[200px] flex-[1_1_200px]">
                <small className="block text-xs text-muted">Produto escolhido</small>
                <b className="text-sm leading-[1.3] font-semibold">
                  {produtoEscolhido.nome} · {brl(produtoEscolhido.preco)}
                </b>
              </span>
              <button
                type="button"
                onClick={removerProduto}
                className="h-11 cursor-pointer rounded-full border-[1.5px] border-[#cfd8e3] bg-white px-4 text-xs font-semibold"
              >
                Remover
              </button>
            </div>
          )}

          <Button type="submit" variant="whatsapp" className="h-[52px] w-full text-sm">
            <WhatsAppIcon className="size-5" />
            Enviar pelo WhatsApp <Icon name="arrow" />
          </Button>
          <p role="status" className="text-center text-xs text-muted">
            {status}
          </p>
        </form>
      </Container>
    </section>
  )
}
