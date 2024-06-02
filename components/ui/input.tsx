import { cn } from "@/lib/utils"
import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const handleKeyDown = (event: any): void => {
      event.stopPropagation()
    }

    const handelKeyUp = (event: any): void => {
      event.stopPropagation()
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        ref={ref}
        onKeyDown={handleKeyDown} // Adding the onKeyDown event handler
        onKeyUp={handelKeyUp}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
