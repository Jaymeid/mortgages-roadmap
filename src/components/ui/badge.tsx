import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold', {
  variants: {
    variant: {
      default: 'border-transparent bg-[#e4ede6] text-[#20523c]',
      secondary: 'border-[#ddd6c6] bg-[#fbfaf6] text-[#625d52]',
      gold: 'border-[#e5d6a9] bg-[#faf3df] text-[#725a1a]',
    },
  },
  defaultVariants: { variant: 'default' },
})

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
