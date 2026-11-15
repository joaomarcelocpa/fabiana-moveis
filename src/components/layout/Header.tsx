import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Container, Logo } from '../ui/Layout'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#produtos', rotulo: 'Produtos' },
  { href: '#ambientes', rotulo: 'Ambientes' },
  { href: '#pagamento', rotulo: 'Pagamento' },
  { href: '#contato', rotulo: 'Lojas' },
  { href: '#whatsapp', rotulo: 'Contato' },
]

export function Header() {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const aoApertar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    document.addEventListener('keydown', aoApertar)
    return () => document.removeEventListener('keydown', aoApertar)
  }, [])

  return (
    <header className="relative z-20 bg-white">
      <Container className="flex h-[84px] items-center justify-between gap-6 tablet:h-[72px]">
        <a href="#inicio" aria-label="Fabiana Móveis e Eletro, início">
          <Logo className="[--lh:58px] tablet:[--lh:50px]" />
        </a>

        <nav
          id="menu"
          aria-label="Principal"
          className={cn(
            'flex gap-9 laptop:gap-[22px]',
            aberto
              ? 'sheet:absolute sheet:inset-x-0 sheet:top-[72px] sheet:flex sheet:flex-col sheet:gap-0 sheet:border-b sheet:border-line sheet:bg-white sheet:px-6 sheet:pt-2 sheet:pb-5 sheet:shadow-[0_20px_30px_-20px_rgba(7,26,47,.3)]'
              : 'sheet:hidden',
          )}
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setAberto(false)}
              className={cn(
                "relative py-[13px] text-[13px] leading-none font-medium text-ink after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100",
                'sheet:border-b sheet:border-line sheet:py-3.5 sheet:text-[15px] sheet:after:hidden',
                i === 0 && 'text-brand after:scale-x-100',
              )}
            >
              {link.rotulo}
            </a>
          ))}
        </nav>

        <Button href="#whatsapp" className="tablet:hidden">
          Entre em contato <Icon name="arrow" />
        </Button>

        <button
          type="button"
          aria-expanded={aberto}
          aria-controls="menu"
          aria-label="Menu"
          onClick={() => setAberto((v) => !v)}
          className="hidden size-11 cursor-pointer place-items-center rounded-xl border border-line bg-white text-ink sheet:ml-auto sheet:inline-grid"
        >
          <Icon name="menu" className="size-5" />
        </button>
      </Container>
    </header>
  )
}
