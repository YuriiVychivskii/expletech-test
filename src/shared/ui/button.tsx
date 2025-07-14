import clsx from 'clsx'
import * as React from 'react'

type ButtonProps = React.ComponentProps<'button'>

function Button({ className, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={clsx(
        'cursor-pointer rounded-md bg-green-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300 disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Button }
