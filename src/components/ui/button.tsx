import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cbbd95] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#163b2b] text-white hover:bg-[#0f2d20]',
        outline: 'border border-[#d8d3c5] bg-white text-[#163b2b] hover:bg-[#f6f4ee]',
        ghost: 'text-[#163b2b] hover:bg-[#e7eee9]',
      },
      size: { default: 'h-10 px-4 py-2', sm: 'h-8 px-3 text-xs', lg: 'h-12 px-5 text-base' },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
))
Button.displayName = 'Button'

export { Button }
