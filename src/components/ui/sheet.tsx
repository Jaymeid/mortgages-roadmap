import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger

export function SheetContent({ className, children, ...props }: Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-[#10261c]/40 backdrop-blur-[2px] data-[state=closed]:animate-out" />
      <Dialog.Content
        className={cn('fixed inset-y-0 right-0 z-50 flex w-full max-w-[540px] flex-col overflow-y-auto border-l border-[#ddd8c9] bg-[#fffefa] shadow-2xl outline-none', className)}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-5 top-5 rounded-md p-2 text-[#566158] hover:bg-[#eef1ec] focus:outline-none" aria-label="Close"><X size={20} /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const SheetTitle = ({ className, ...props }: Dialog.DialogTitleProps) => <Dialog.Title className={cn('font-serif text-3xl text-[#173326]', className)} {...props} />
