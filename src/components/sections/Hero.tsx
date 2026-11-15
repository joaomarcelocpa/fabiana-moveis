import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Layout'
import { Eyebrow, Manuscrito } from '../ui/Typography'

const NUMEROS = [
  { valor: 'Grátis', rotulo: 'Frete e montagem' },
  { valor: '+30 anos', rotulo: 'de tradição' },
  { valor: '3 lojas', rotulo: 'Em 2 cidades' },
]

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-h" className="relative overflow-hidden bg-white tablet:flex tablet:flex-col">
      <Container>
        <div className="relative z-[3] flex min-h-[548px] max-w-[580px] flex-col justify-center gap-[22px] pt-9 pb-10 tablet:min-h-0 tablet:max-w-none tablet:pt-7 tablet:pb-8">
          <Eyebrow>Bem-vindo à Fabiana</Eyebrow>
          <h1 id="hero-h" className="text-[clamp(32px,3.4vw,50px)] leading-[1.12] font-bold tracking-[-0.5px]">
            Móveis de qualidade
            <br />
            <span className="text-brand">a preço justo</span>
            <br />
            para a sua casa
          </h1>
          <p className="max-w-[400px] text-sm text-muted laptop:max-w-[560px]">
            Móveis e eletrodomésticos com crediário próprio e parcelamento em até 12x no cartão de crédito. Há mais de 30
            anos, a loja que mobília as casas de Pedro&nbsp;Leopoldo e região.
          </p>
          <div className="flex flex-wrap gap-3.5 tablet:[&>a]:flex-[1_1_100%]">
            <Button href="#whatsapp">
              Simular crediário <Icon name="arrow" />
            </Button>
            <Button href="#produtos" variant="line">
              Ver produtos
            </Button>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-[30px] gap-y-3.5">
            {NUMEROS.map((n) => (
              <div key={n.valor} className="border-l-[3px] border-sun pl-3.5">
                <b className="block text-2xl leading-[1.15] font-bold tracking-[-0.3px] text-brand">{n.valor}</b>
                <small className="block text-xs leading-[1.3] text-muted">{n.rotulo}</small>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* formas decorativas atrás da foto */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[48%] z-[2] h-[54%] w-[18%] bg-[linear-gradient(160deg,var(--color-brand-light),var(--color-brand-dark))] [clip-path:polygon(30%_0,100%_0,70%_100%,0_100%)] tablet:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[45.5%] z-[2] h-[27%] w-[6%] bg-sun [clip-path:polygon(40%_0,100%_0,60%_100%,0_100%)] tablet:hidden"
      />

      <div className="absolute inset-y-0 right-0 z-[1] w-[57%] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] tablet:static tablet:order-2 tablet:h-[300px] tablet:w-full tablet:[clip-path:none]">
        <img
          src="/img/photo-f195360286-1280.jpg"
          srcSet="/img/photo-f195360286-960.jpg 960w, /img/photo-f195360286-1280.jpg 1280w, /img/photo-f195360286.jpg 1920w"
          sizes="(max-width: 860px) 100vw, 57vw"
          width={1920}
          height={1280}
          alt="Sala de estar com sofá de canto cinza-escuro e mesa de centro de madeira"
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-[60%_55%]"
        />
      </div>

      <Manuscrito className="absolute top-14 right-[11%] z-[4] max-w-[220px] -rotate-6 text-center text-navy tablet:hidden">
        Sua casa, do seu jeito
        <svg viewBox="0 0 150 14" fill="none" stroke="#fdc80c" strokeWidth={3} strokeLinecap="round" className="mx-auto mt-1 block h-3.5 w-[150px]">
          <path d="M3 9c30-8 70-8 144-3" />
        </svg>
      </Manuscrito>

      <div aria-hidden="true" className="absolute right-8 bottom-[52px] z-[4] grid justify-items-center gap-[9px] text-xs text-white tablet:hidden">
        <i className="block size-2 rounded-full bg-sun" />
        <i className="block size-2 rounded-full bg-white/55" />
        <i className="block size-2 rounded-full bg-white/55" />
        <i className="block size-2 rounded-full bg-white/55" />
        <span className="mt-2.5 text-center leading-[1.3]">
          Role
          <br />
          para baixo
        </span>
      </div>
    </section>
  )
}
