import type { SVGProps } from 'react'
import { cn } from '../../lib/cn'

/** Só os ícones de função (seta, check, menu...). Desenhados em traço simples, herdam a cor do texto. */
const FORMAS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  menu: <path d="M3 7h18M3 17h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
} as const

export type IconName = keyof typeof FORMAS

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-[1em] shrink-0', className)}
      {...props}
    >
      {FORMAS[name]}
    </svg>
  )
}
