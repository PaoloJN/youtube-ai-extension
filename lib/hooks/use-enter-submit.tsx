import { useRef, type RefObject } from "react"

export function useEnterSubmit(): {
  formRef: RefObject<HTMLFormElement>
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
} {
  const formRef = useRef<HTMLFormElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    event.stopPropagation()

    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      formRef.current?.requestSubmit()
      event.preventDefault()
    }
  }

  const handelKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    event.stopPropagation()
  }

  return { formRef, onKeyDown: handleKeyDown, onKeyUp: handelKeyUp }
}
