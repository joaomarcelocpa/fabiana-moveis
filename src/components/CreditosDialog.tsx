import { useEffect, useRef } from 'react'
import { CREDITOS } from '../data/creditos'
import { Icon } from './ui/Icon'
import { Eyebrow, Titulo } from './ui/Typography'

interface CreditosDialogProps {
  aberto: boolean
  aoFechar: () => void
}

/** Lista de autores e licenças das fotos de exemplo. */
export function CreditosDialog({ aberto, aoFechar }: CreditosDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (aberto && !dialog.open) {
      document.body.style.overflow = 'hidden'
      dialog.showModal()
    } else if (!aberto && dialog.open) {
      dialog.close()
    }
  }, [aberto])

  return (
    <dialog
      ref={ref}
      aria-labelledby="creditos-title"
      onClose={() => {
        document.body.style.overflow = ''
        aoFechar()
      }}
      onClick={(e) => e.target === e.currentTarget && aoFechar()}
      className="m-auto max-h-[calc(100dvh-48px)] w-[min(760px,calc(100vw-32px))] rounded-[20px] border-0 bg-white p-0 text-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,.55)] backdrop:bg-[rgba(7,26,47,.68)]"
    >
      <div className="max-h-[calc(100dvh-48px)] overflow-auto p-8 overscroll-contain phone:px-4 phone:py-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <Eyebrow>Fotografias</Eyebrow>
            <Titulo id="creditos-title" className="mt-1.5">
              Créditos das fotos
            </Titulo>
          </div>
          <button
            type="button"
            onClick={aoFechar}
            aria-label="Fechar"
            className="grid size-11 flex-none cursor-pointer place-items-center rounded-full border-[1.5px] border-[#cfd8e3] bg-white text-ink hover:border-brand hover:text-brand"
          >
            <Icon name="close" className="size-[18px]" />
          </button>
        </div>
        <ul className="grid gap-3 text-[13px]">
          {CREDITOS.map((c) => (
            <li key={c.id} className="border-b border-line pb-3">
              <a href={c.pagina} rel="noopener" className="font-semibold text-brand hover:underline">
                {c.titulo}
              </a>
              <span className="block text-muted">
                {c.autor} ·{' '}
                <a href={c.urlLicenca} rel="noopener" className="hover:underline">
                  {c.licenca}
                </a>{' '}
                · Wikimedia Commons
              </span>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}
