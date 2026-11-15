import { fotoSrcSet, foto } from '../../lib/format'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Layout'
import { Eyebrow, Lead, Titulo } from '../ui/Typography'

interface Ambiente {
  nome: string
  itens: string
  foto: string
  /** larguras disponíveis em public/img */
  larguras: number[]
  alt: string
  posicao?: string
}

const AMBIENTES: Ambiente[] = [
  { nome: 'Sala de estar', itens: 'Sofás, racks e painéis', foto: 'f192968130', larguras: [500, 960], alt: 'Sala integrada à cozinha com painel de madeira ripada' },
  { nome: 'Quarto', itens: 'Camas, guarda-roupas e cômodas', foto: 'f187101710', larguras: [500, 960], alt: 'Cabeceira estofada com almofadas brancas sobre a cama', posicao: '50% 40%' },
  { nome: 'Cozinha', itens: 'Armários e eletrodomésticos', foto: 'f189521345', larguras: [500], alt: 'Estante de madeira na cozinha com taças e canecas sobre azulejo branco', posicao: '50% 30%' },
  { nome: 'Sala de jantar', itens: 'Mesas e cadeiras', foto: 'f187101703', larguras: [500, 960], alt: 'Mesa de madeira posta para duas pessoas', posicao: '50% 68%' },
]

export function Ambientes() {
  return (
    <section id="ambientes" aria-labelledby="amb-h" className="bg-paper py-[72px] tablet:py-14">
      <Container>
        <div className="mb-[30px] flex items-end justify-between gap-6 tablet:flex-col tablet:items-start">
          <div className="grid gap-2.5">
            <Eyebrow>Ambientes</Eyebrow>
            <Titulo id="amb-h">Ideias para cada cômodo</Titulo>
            <Lead>Veja como móveis e eletros se encaixam na sala, no quarto, na cozinha e na sala de jantar.</Lead>
          </div>
          <a href="#whatsapp" className="inline-flex min-h-11 items-center gap-2 text-xs leading-none font-bold text-brand hover:underline hover:underline-offset-4">
            Pedir pelo WhatsApp <Icon name="arrow" />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-4 laptop:grid-cols-2 tiny:grid-cols-1">
          {AMBIENTES.map((a) => (
            <a
              key={a.nome}
              href="#whatsapp"
              className="group block overflow-hidden rounded-[10px] border border-line bg-white shadow-[0_10px_28px_-20px_rgba(7,26,47,.4)] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_32px_-16px_rgba(0,87,168,.4)]"
            >
              <div className="aspect-video overflow-hidden bg-mist">
                <img
                  src={foto(a.foto, a.larguras[a.larguras.length - 1])}
                  srcSet={a.larguras.length > 1 ? fotoSrcSet(a.foto, a.larguras) : undefined}
                  sizes="(max-width: 520px) 100vw, 290px"
                  alt={a.alt}
                  loading="lazy"
                  decoding="async"
                  style={a.posicao ? { objectPosition: a.posicao } : undefined}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-2.5 px-4 py-3.5">
                <span>
                  <b className="block text-[13px] leading-[1.3] font-semibold">{a.nome}</b>
                  <small className="block text-xs leading-[1.4] text-muted">{a.itens}</small>
                </span>
                <Icon name="arrow" className="size-3.5 text-brand" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
