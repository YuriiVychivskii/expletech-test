import clsx from 'clsx'
import * as React from 'react'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        'placeholder:text-muted-foreground flex h-10 w-full rounded-md border-2 border-green-500 bg-transparent px-3 py-1 text-base shadow-none transition-all outline-none focus:border-green-500 focus:shadow-none focus:ring-2 focus:ring-green-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-600 aria-invalid:ring-red-600/20 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
