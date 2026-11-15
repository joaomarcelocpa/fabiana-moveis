import { useEffect, useRef } from 'react'
import { CATALOGO } from '../data/catalogo'
import { usePedido } from '../context/PedidoContext'
import { brl, foto, fotoSrcSet } from '../lib/format'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { Eyebrow, Titulo } from './ui/Typography'

/** Janela com as opções (foto, nome e preço) de uma categoria de produto. */
export function CatalogoDialog() {
  const { categoriaAberta, fecharCategoria, escolherProduto } = usePedido()
  const ref = useRef<HTMLDialogElement>(null)
  const categoria = CATALOGO.find((c) => c.id === categoriaAberta)

  // abre e fecha o <dialog> nativo conforme o estado (ele cuida do foco, do Esc e do fundo escuro)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (categoriaAberta && !dialog.open) {
      document.body.style.overflow = 'hidden'
      dialog.showModal()
      dialog.querySelector('[data-rolagem]')?.scrollTo(0, 0)
    } else if (!categoriaAberta && dialog.open) {
      dialog.close()
    }
  }, [categoriaAberta])

  return (
    <dialog
      ref={ref}
      aria-labelledby="cat-title"
      onClose={() => {
        document.body.style.overflow = ''
        fecharCategoria()
      }}
      onClick={(e) => e.target === e.currentTarget && fecharCategoria()}
      className="m-auto max-h-[calc(100dvh-48px)] w-[min(1080px,calc(100vw-32px))] rounded-[20px] border-0 bg-white p-0 text-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,.55)] backdrop:bg-[rgba(7,26,47,.68)]"
    >
      <div data-rolagem className="max-h-[calc(100dvh-48px)] overflow-auto p-8 overscroll-contain phone:px-4 phone:py-5">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <Eyebrow>Escolha o produto</Eyebrow>
            <Titulo id="cat-title" className="mt-1.5">
              {categoria?.titulo}
            </Titulo>
          </div>
          <button
            type="button"
            onClick={fecharCategoria}
            aria-label="Fechar"
            className="grid size-11 flex-none cursor-pointer place-items-center rounded-full border-[1.5px] border-[#cfd8e3] bg-white text-ink hover:border-brand hover:text-brand"
          >
            <Icon name="close" className="size-[18px]" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 phone:grid-cols-1">
          {categoria?.itens.map((item) => (
            <article key={item.nome} className="grid content-start gap-1 overflow-hidden rounded-[14px] border border-line bg-white">
              <img
                src={foto(item.foto, 500)}
                srcSet={fotoSrcSet(item.foto, [500, 960])}
                sizes="(max-width: 560px) 90vw, 330px"
                width={500}
                height={375}
                alt={item.alt}
                decoding="async"
                className="aspect-[4/3] w-full bg-mist object-cover"
              />
              <div className="grid gap-0.5 px-4 pt-4 pb-[18px]">
                <h3 className="text-[15px] leading-[1.35] font-semibold">{item.nome}</h3>
                <p className="mt-1 text-[22px] leading-[1.3] font-bold tracking-[-0.3px] text-brand">{brl(item.preco)}</p>
                <p className="text-xs text-muted">em até 12x no cartão</p>
                <Button
                  className="mt-3 w-full"
                  onClick={() => escolherProduto({ ...item, categoria: categoria.titulo })}
                >
                  Quero este
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-muted">Valores e disponibilidade sujeitos a confirmação na loja.</p>
      </div>
    </dialog>
  )
}
