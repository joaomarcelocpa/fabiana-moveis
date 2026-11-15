import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container, FaixaEscura } from '../ui/Layout'
import { Eyebrow, Lead, Manuscrito, Titulo } from '../ui/Typography'

const DESTAQUES = [
  { valor: '+30 anos', rotulo: 'de tradição na região' },
  { valor: '12x', rotulo: 'no cartão de crédito' },
  { valor: 'Grátis', rotulo: 'frete e montagem' },
  { valor: 'Preço justo', rotulo: 'qualidade em cada peça' },
]

export function Sobre() {
  return (
    <FaixaEscura id="sobre" aria-labelledby="sobre-h">
      <Container className="relative z-[2] grid grid-cols-[1.05fr_.9fr_1.1fr] items-stretch laptop:grid-cols-2 tablet:grid-cols-1">
        <div className="grid content-center justify-items-start gap-4 py-14 pr-10 tablet:pr-0">
          <Eyebrow tom="escuro">Sobre a Fabiana Móveis</Eyebrow>
          <Titulo id="sobre-h">Mais que uma loja de móveis</Titulo>
          <Lead tom="escuro">
            A loja que vende barato sem abrir mão da qualidade, com frete e montagem grátis e condições de pagamento
            especiais.
          </Lead>
          <Button href="#contato" variant="white">
            Conheça as lojas <Icon name="arrow" />
          </Button>
        </div>

        <div className="grid content-center gap-[22px] border-x border-white/[.14] px-10 py-2 laptop:border-r-0 laptop:pr-0 tablet:my-0 tablet:mt-7 tablet:border-x-0 tablet:border-y tablet:px-0 tablet:py-7">
          {DESTAQUES.map((d) => (
            <div key={d.valor} className="border-l-[3px] border-sun pl-4">
              <b className="block text-xl leading-[1.15] font-bold">{d.valor}</b>
              <small className="block text-xs leading-[1.35] text-[#b6c4d4]">{d.rotulo}</small>
            </div>
          ))}
        </div>

        {/* a foto "sangra" até a borda direita da tela */}
        <div className="relative mr-[calc((100vw-min(100vw-48px,var(--wrap)))/-2)] min-h-[300px] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#0a2038_0%,rgba(10,32,56,.15)_55%,rgba(10,32,56,.05))] after:content-[''] laptop:col-span-full laptop:mt-10 laptop:ml-[calc((100vw-min(100vw-48px,var(--wrap)))/-2)] laptop:min-h-[260px]">
          <img
            src="/img/photo-f187101722-960.jpg"
            srcSet="/img/photo-f187101722-500.jpg 500w, /img/photo-f187101722-960.jpg 960w"
            sizes="(max-width: 1100px) 100vw, 40vw"
            width={960}
            height={1433}
            alt="Quarto com cabeceira estofada em azul e laranja e parede escura com desenho geométrico"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-[50%_45%]"
          />
          <Manuscrito className="absolute top-1/2 left-[42px] z-[2] max-w-[220px] -translate-y-1/2 -rotate-[5deg] text-white">
            Sua casa, nossa especialidade
            <svg viewBox="0 0 130 12" fill="none" stroke="#fdc80c" strokeWidth={3} strokeLinecap="round" className="mt-1.5 block h-3 w-[130px]">
              <path d="M3 8c26-6 60-6 124-2" />
            </svg>
          </Manuscrito>
        </div>
      </Container>
    </FaixaEscura>
  )
}
