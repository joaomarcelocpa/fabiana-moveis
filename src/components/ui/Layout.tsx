import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

/** Largura útil da página (ver .wrap em index.css). */
export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('wrap', className)} {...props} />
}

/** Logo da Fabiana (recorte do arquivo original). A altura vem da variável --lh. */
export function Logo({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn('logo', className)} />
}

/**
 * Faixa escura com os recortes decorativos (azul à esquerda, triângulo amarelo no canto).
 * Usada em "Sobre" e "Pagamento".
 */
export function FaixaEscura({ className, ...props }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-[linear-gradient(100deg,var(--color-navy)_0%,var(--color-navy-2)_60%,#061629_100%)] text-white',
        "before:absolute before:-top-2.5 before:-left-[60px] before:h-[120%] before:w-[380px] before:bg-[linear-gradient(120deg,rgba(10,120,209,.55),rgba(0,87,168,0)_70%)] before:[clip-path:polygon(0_0,55%_0,25%_100%,0_100%)] before:content-['']",
        "after:absolute after:top-0 after:right-0 after:size-[90px] after:bg-sun after:[clip-path:polygon(0_0,100%_0,100%_100%)] after:content-['']",
        className,
      )}
      {...props}
    />
  )
}
