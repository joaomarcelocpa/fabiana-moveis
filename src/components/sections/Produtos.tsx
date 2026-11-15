import { CATALOGO } from '../../data/catalogo'
import { usePedido } from '../../context/PedidoContext'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Layout'
import { Eyebrow, Lead, Titulo } from '../ui/Typography'

export function Produtos() {
  const { abrirCategoria } = usePedido()

  return (
    <section id="produtos" aria-labelledby="produtos-h" className="py-[72px] tablet:py-14">
      <Container className="grid grid-cols-[340px_1fr] items-center gap-14 laptop:grid-cols-1 laptop:gap-8">
        <div className="grid justify-items-start gap-3.5">
          <Eyebrow>Nossos produtos</Eyebrow>
          <Titulo id="produtos-h">Tudo para a casa em um só lugar</Titulo>
          <Lead>Móveis e eletrodomésticos para a sala, o quarto e a cozinha, com qualidade e preço justo.</Lead>
          <Button href="#ambientes">
            Ver ambientes <Icon name="arrow" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 tablet:grid-cols-2 tiny:grid-cols-1">
          {CATALOGO.map((categoria, i) => (
            <button
              key={categoria.id}
              type="button"
              aria-haspopup="dialog"
              onClick={() => abrirCategoria(categoria.id)}
              className="relative grid w-full cursor-pointer gap-1.5 rounded-xl border border-line bg-white px-5 pt-[22px] pb-5 text-left shadow-[0_10px_28px_-18px_rgba(7,26,47,.28)] transition duration-200 hover:-translate-y-[3px] hover:border-[#bcd3ea] hover:shadow-[0_16px_32px_-16px_rgba(0,87,168,.35)]"
            >
              <span
                aria-hidden="true"
                className="mb-1.5 justify-self-start rounded-full bg-sun px-2.5 py-1.5 text-xs leading-none font-bold tracking-[1px] text-navy"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm leading-[1.3] font-semibold">{categoria.titulo}</h3>
              <p className="pr-5 text-[13px] leading-[1.55] text-muted">{categoria.descricao}</p>
              <span className="mt-1.5 text-xs leading-none font-bold tracking-[.2px] text-brand">Ver opções</span>
              <Icon name="arrow" className="absolute right-4 bottom-4 size-3.5 text-brand" />
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
