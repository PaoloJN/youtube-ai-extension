import { useRef } from "react"

import TranscriptActions from "./transcript-actions"
import TranscriptContent from "./transcript-content"

interface TranscriptProps {}

export default function Transcript({}: TranscriptProps) {
  const player = document.querySelector("video")
  const transcriptListRef = useRef(null)

  function jumpCurrentTime(): void {
    if (!player || !transcriptListRef.current) return
    const time = Math.round(player.currentTime * 1000)

    const itemsContainer = transcriptListRef.current.firstElementChild as HTMLElement
    if (itemsContainer) {
      const children = Array.from(itemsContainer.children) as HTMLElement[]
      const targetElement = children.find((child: HTMLElement) => {
        const startTime = parseInt(child.getAttribute("data-start-time") || "0", 10)
        const endTime = parseInt(child.getAttribute("data-end-time") || "0", 10)
        return startTime <= time && endTime >= time
      })

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })

        // bg-[#141414]
        targetElement.classList.add("bg-zinc-100")
        targetElement.classList.add("dark:bg-[#141414]")
        targetElement.classList.add("transition-all")
        setTimeout(() => {
          targetElement.classList.remove("bg-zinc-100")
          targetElement.classList.add("dark:bg-[#141414]")
          targetElement.classList.remove("transition-all")
        }, 3000)
      }
    }
  }

  return (
    <>
      <TranscriptActions jumpCurrentTime={jumpCurrentTime} />
      <TranscriptContent ref={transcriptListRef} />
    </>
  )
}
