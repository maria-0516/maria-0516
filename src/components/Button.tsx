import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
/* import Link from 'next/link' */
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

interface ButtonProps {
  type?: string
  color?: string
  variant?: string
  className?: string
  href?: string
  children?: React.ReactNode
  as?: {}
}

export const Button = forwardRef(function Button({ variant = 'solid', color = 'gray', className, href, as,  ...props }: ButtonProps, ref) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a ref={ref as React.ForwardedRef<HTMLAnchorElement>} href={href} className={className} {...props} />
  ) : (
    <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={className} {...(props as any )} />
  )
})
