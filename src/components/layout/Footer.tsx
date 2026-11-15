import { INSTAGRAM_URL, LOJAS } from '../../data/lojas'
import { urlWhatsApp } from '../../lib/whatsapp'
import { Icon } from '../ui/Icon'
import { Container, Logo } from '../ui/Layout'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#produtos', rotulo: 'Produtos' },
  { href: '#ambientes', rotulo: 'Ambientes' },
  { href: '#pagamento', rotulo: 'Pagamento' },
  { href: '#contato', rotulo: 'Lojas' },
  { href: '#whatsapp', rotulo: 'WhatsApp' },
]

interface FooterProps {
  aoAbrirCreditos: () => void
}

export function Footer({ aoAbrirCreditos }: FooterProps) {
  return (
    <footer id="contato" className="bg-navy text-xs text-[#b6c4d4]">
      <Container>
        <div className="flex items-center justify-between gap-7 pt-[30px] pb-[22px] tablet:flex-col tablet:items-start">
          <a href="#inicio" aria-label="Fabiana Móveis e Eletro, início">
            <Logo className="[--lh:56px]" />
          </a>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-7 tiny:grid tiny:grid-cols-[repeat(3,auto)] tiny:justify-start tiny:gap-x-7">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-white">
                {link.rotulo}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[22px] tablet:flex-wrap">
            <a
              href={INSTAGRAM_URL}
              rel="noopener"
              aria-label="Instagram da Fabiana Móveis"
              className="grid size-11 place-items-center rounded-full border border-white/20 text-[17px] text-white transition hover:border-sun hover:bg-sun hover:text-navy"
            >
              <Icon name="instagram" />
            </a>
          </div>
        </div>

        <div aria-label="Telefones das lojas" className="flex flex-wrap gap-x-9 gap-y-1.5 border-t border-white/10 pt-2 pb-5">
          {LOJAS.map((loja) => (
            <a key={loja.id} href={urlWhatsApp(loja.whatsapp)} rel="noopener" className="inline-flex min-h-[52px] flex-col justify-center">
              <small className="text-xs text-[#8ea2b8]">{loja.rotulo}</small>
              <b className="text-sm leading-[1.3] font-semibold text-white">{loja.telefone}</b>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-[18px] pb-[26px] text-[#8ea2b8]">
          <span>
            &copy; 2026 <span translate="no">Fabiana</span> Móveis e Eletro. Pedro Leopoldo, MG.
          </span>
          <button
            type="button"
            onClick={aoAbrirCreditos}
            className="inline-flex min-h-11 cursor-pointer items-center hover:text-white"
          >
            Fotografias via Wikimedia Commons
          </button>
        </div>
      </Container>
    </footer>
  )
}
