import { Button } from '../ui/Button'

/** Barra fixa no rodapé do celular. */
export function ActionBar() {
  return (
    <nav
      aria-label="Ações rápidas"
      className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-line bg-white px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] tablet:block"
    >
      <Button href="#whatsapp" variant="whatsapp" className="w-full">
        Entre em contato
      </Button>
    </nav>
  )
}
