import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Layout'
import { Eyebrow, Lead, Titulo } from '../ui/Typography'

const PASSOS = [
  { titulo: 'Escolha o produto', texto: 'Veja as opções de cada ambiente e escolha os móveis e eletros que combinam com a sua casa.' },
  { titulo: 'Faça seu crediário', texto: 'Faça o crediário próprio direto na loja ou parcele em até 12x no cartão de crédito.' },
  { titulo: 'Receba em casa', texto: 'O frete e a montagem são grátis. Seus móveis chegam prontos para usar.' },
]

export function ComoComprar() {
  return (
    <section id="como-comprar" aria-labelledby="steps-h" className="bg-mist py-[72px] tablet:py-14">
      <Container className="grid grid-cols-[340px_1fr] items-center gap-14 laptop:grid-cols-1 laptop:gap-8">
        <div className="grid justify-items-start gap-3.5">
          <Eyebrow>Como comprar</Eyebrow>
          <Titulo id="steps-h">Mobilie a casa em 3 passos</Titulo>
          <Lead>Do primeiro contato até a montagem, a Fabiana acompanha você.</Lead>
          <Button href="#whatsapp">
            Entre em contato <Icon name="arrow" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 narrow:grid-cols-1">
          {PASSOS.map((passo, i) => (
            <article key={passo.titulo} className="grid content-start gap-2.5 rounded-xl bg-white px-5 py-[22px] shadow-[0_12px_30px_-20px_rgba(7,26,47,.35)]">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-brand text-base leading-none font-bold text-white">{i + 1}</span>
                <h3 className="text-sm leading-[1.3] font-semibold">{passo.titulo}</h3>
              </div>
              <p className="text-[13px] leading-[1.65] text-muted">{passo.texto}</p>
              <span className="h-1 w-9 rounded-sm bg-sun" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
