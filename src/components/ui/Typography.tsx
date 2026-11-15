import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

type Tom = 'claro' | 'escuro'

/** Rótulo pequeno em caixa-alta acima dos títulos. */
export function Eyebrow({ tom = 'claro', className, ...props }: ComponentPropsWithoutRef<'p'> & { tom?: Tom }) {
  return (
    <p
      className={cn(
        'text-xs leading-[1.4] font-bold tracking-[2.2px] uppercase',
        tom === 'escuro' ? 'text-sun' : 'text-brand',
        className,
      )}
      {...props}
    />
  )
}

/** Título de seção (h2). */
export function Titulo({ className, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={cn('text-[clamp(26px,2.6vw,34px)] leading-[1.2] font-bold tracking-[-0.3px]', className)}
      {...props}
    />
  )
}

/** Parágrafo de apoio embaixo do título. */
export function Lead({ tom = 'claro', className, ...props }: ComponentPropsWithoutRef<'p'> & { tom?: Tom }) {
  return (
    <p
      className={cn(
        'max-w-[400px] text-sm laptop:max-w-[560px]',
        tom === 'escuro' ? 'text-[#b6c4d4]' : 'text-muted',
        className,
      )}
      {...props}
    />
  )
}

/** Frase "escrita à mão" sobre as fotos. */
export function Manuscrito({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p aria-hidden="true" className={cn('font-script text-[40px] leading-[1.05] font-semibold', className)} {...props} />
}
