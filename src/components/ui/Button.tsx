import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'line' | 'yellow' | 'white' | 'whatsapp' | 'ghost'

const BASE =
  'inline-flex h-11 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] border-transparent px-6 text-[13px] leading-none font-semibold transition duration-150 active:translate-y-0 [&_svg]:size-4'

const VARIANTES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white shadow-[0_8px_18px_-8px_rgba(0,87,168,.7)] hover:-translate-y-px hover:bg-brand-dark',
  line: 'border-[#cfd8e3] bg-white text-ink hover:border-brand hover:text-brand',
  yellow: 'bg-sun text-navy hover:bg-sun-dark',
  white: 'bg-white text-navy hover:bg-mist',
  whatsapp: 'bg-[#0f7a3f] text-white hover:-translate-y-px hover:bg-[#0b6232]',
  ghost: 'border-white/30 bg-transparent text-white hover:border-sun hover:text-sun',
}

interface BaseProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type LinkProps = BaseProps & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps> & { href: string }
type NativeProps = BaseProps & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps> & { href?: undefined }

/** Botão em pílula. Com `href` vira link (<a>), sem `href` vira <button>. */
export function Button(props: LinkProps | NativeProps) {
  const { variant = 'primary', className, children, ...resto } = props
  const classes = cn(BASE, VARIANTES[variant], className)

  if ('href' in resto && resto.href !== undefined) {
    return (
      <a className={classes} {...(resto as Omit<LinkProps, keyof BaseProps>)}>
        {children}
      </a>
    )
  }
  const { type = 'button', ...nativos } = resto as Omit<NativeProps, keyof BaseProps>
  return (
    <button type={type} className={classes} {...nativos}>
      {children}
    </button>
  )
}
