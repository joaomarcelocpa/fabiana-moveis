import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Layout'

export function FaixaCta() {
  return (
    <section
      aria-labelledby="cta-h"
      className="relative overflow-hidden bg-[linear-gradient(95deg,var(--color-brand-dark),var(--color-brand)_55%,var(--color-brand-light))] text-white before:absolute before:inset-y-0 before:left-0 before:w-[140px] before:bg-black/[.14] before:[clip-path:polygon(0_0,60%_0,100%_100%,0_100%)] before:content-['']"
    >
      <Container className="relative flex items-center justify-between gap-6 py-[34px] tablet:flex-col tablet:items-start">
        <div>
          <h2 id="cta-h" className="text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-bold">
            Pronto para mobiliar a sua casa?
          </h2>
          <p className="text-[13px] text-[#d9e9fa]">Fale com a loja e solicite seu crediário hoje.</p>
        </div>
        <Button href="#whatsapp" variant="yellow">
          Entre em contato <Icon name="arrow" />
        </Button>
      </Container>
    </section>
  )
}
