import { Button } from "@/components/ui/button"
import { TooltipWrapper } from "@/components/ui/tooltip-wrapper"
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard"
import { CheckIcon, ClipboardCopyIcon, ClockIcon } from "@radix-ui/react-icons"
import { memo } from "react"

type Transcript = {
  text: string
  startTime: number
  endTime: number
}

interface TranscriptItemProps {
  item: Transcript
  searchInput: string
}

function TranscriptItem({ item, searchInput }: TranscriptItemProps) {
  const player = document.querySelector("video")

  const { isCopied, copyToClipboard } = useCopyToClipboard({
    timeout: 2000
  })

  function CopySection() {
    if (isCopied) return
    copyToClipboard(item.text)
  }

  const startTime = new Date(item.startTime).toISOString().substr(14, 5)
  const endTime = new Date(item.endTime).toISOString().substr(14, 5)

  function JumpToTime() {
    player.currentTime = item.startTime / 1000
  }

  const highlightText = (text: string, search: string): JSX.Element => {
    if (!search) return <>{text}</>
    const parts = text.split(new RegExp(`(${search})`, "gi"))
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={index} style={{ backgroundColor: "yellow" }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    )
  }

  return (
    <div
      data-start-time={item.startTime}
      data-end-time={item.endTime}
      className="flex flex-col w-full justify-between items-center p-3 border-[0.5px] rounded-md border-zinc-200 dark:border-zinc-800 space-y-4 group">
      <div className="w-full flex flex-row items-center justify-between">
        <Button
          variant="outline"
          className="space-x-2 bg-transparent dark:bg-transparent dark:hover:bg-transparent border-[0.5px]"
          onClick={JumpToTime}>
          <ClockIcon className="h-4 w-4 opacity-60" />
          <span className="hover:cursor-pointer hover:underline text-blue-500 text-[11px]">
            {startTime} : {endTime}
          </span>
        </Button>

        {/* on hover show Copy Section */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <TooltipWrapper text="Copy Section">
            <Button variant="outline" size="icon" onClick={CopySection}>
              {isCopied ? (
                <CheckIcon className="h-4.5 w-4.5 opacity-60" />
              ) : (
                <ClipboardCopyIcon className="h-4 w-4 opacity-60" />
              )}
            </Button>
          </TooltipWrapper>
        </div>

        {/* <Button variant="outline" size="icon">
          <DotsVerticalIcon className="h-4 w-4 opacity-60" />
        </Button> */}
      </div>

      <p className="text-[10.5px] capitalize leading-7">
        {highlightText(item.text, searchInput)}
      </p>
    </div>
  )
}

export default memo(TranscriptItem)
