import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container, FaixaEscura } from '../ui/Layout'
import { Eyebrow, Lead, Titulo } from '../ui/Typography'

interface PlanoProps {
  titulo: string
  destaque: string
  detalhe: string
  itens: string[]
  botao: ReactNode
  /** cartão branco, levemente elevado */
  principal?: boolean
  etiqueta?: string
}

function Plano({ titulo, destaque, detalhe, itens, botao, principal, etiqueta }: PlanoProps) {
  return (
    <article
      className={cn(
        'relative grid content-start gap-3.5 rounded-xl border border-white/[.14] bg-white/[.04] px-[22px] py-6',
        principal && '-translate-y-2.5 border-white bg-white pt-9 text-ink shadow-[0_22px_40px_-18px_rgba(0,0,0,.6)] laptop:translate-y-0 narrow:mt-3.5',
      )}
    >
      {etiqueta && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun px-3.5 py-2 text-xs leading-none font-bold whitespace-nowrap text-navy">
          {etiqueta}
        </span>
      )}
      <h3 className={cn('text-sm leading-[1.3] font-semibold text-[#d6e1ee]', principal && 'text-ink')}>{titulo}</h3>
      <p className={cn('text-[28px] leading-[1.1] font-bold', principal && 'text-brand')}>
        {destaque}{' '}
        <small className={cn('ml-1 text-xs leading-none font-normal text-[#9db1c6] tablet:mt-0.5 tablet:ml-0 tablet:block', principal && 'text-muted')}>
          {detalhe}
        </small>
      </p>
      <ul className={cn('grid gap-[9px] text-[13px] text-[#c4d2e2]', principal && 'text-muted')}>
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-2 leading-[1.45]">
            <Icon name="check" className={cn('mt-0.5 size-3.5 text-sun', principal && 'text-brand')} />
            {item}
          </li>
        ))}
      </ul>
      {botao}
    </article>
  )
}

export function Pagamento() {
  return (
    <FaixaEscura id="pagamento" aria-labelledby="pag-h" className="pt-[72px] pb-16">
      <Container className="relative z-[2] grid grid-cols-[330px_1fr] items-center gap-12 laptop:grid-cols-1 laptop:gap-8">
        <div className="grid justify-items-start gap-4">
          <Eyebrow tom="escuro">Pagamento</Eyebrow>
          <Titulo id="pag-h">Condições simples e especiais</Titulo>
          <Lead tom="escuro">Escolha entre o crediário próprio da loja e o parcelamento no cartão de crédito.</Lead>
          <Button href="#whatsapp">
            Entre em contato <Icon name="arrow" />
          </Button>
        </div>

        {/* repeat(3,1fr) (e não grid-cols-3) deixa a coluna em destaque crescer com o conteúdo, como no desenho original */}
        <div className="grid grid-cols-[repeat(3,1fr)] items-stretch gap-4 narrow:grid-cols-1">
          <Plano
            titulo="Crediário"
            destaque="Próprio"
            detalhe="feito na loja"
            itens={['Direto com a Fabiana', 'Sem intermediário', 'Simule antes de comprar']}
            botao={
              <Button href="#whatsapp" variant="ghost" className="mt-1 h-10 w-full">
                Simular crediário
              </Button>
            }
          />
          <Plano
            principal
            etiqueta="Condição especial"
            titulo="Cartão de crédito"
            destaque="Até 12x"
            detalhe="no cartão"
            itens={['Parcelamento em até 12x', 'Preço justo em cada peça', 'Frete e montagem grátis']}
            botao={
              <Button href="#whatsapp" className="mt-1 h-10 w-full">
                Perguntar sobre parcelas
              </Button>
            }
          />
          <Plano
            titulo="Visite as lojas"
            destaque="3 lojas"
            detalhe="em 2 cidades"
            itens={['Matriz, em Pedro Leopoldo', 'Felipe Cláudio, em Pedro Leopoldo', 'Matozinhos']}
            botao={
              <Button href="#contato" variant="ghost" className="mt-1 h-10 w-full">
                Ver telefones
              </Button>
            }
          />
        </div>
      </Container>
    </FaixaEscura>
  )
}
