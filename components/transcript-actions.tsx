import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TooltipWrapper } from "@/components/ui/tooltip-wrapper"
import { useExtension } from "@/contexts/extension-context"
import { useTranscript } from "@/contexts/transcript-context"
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard"
import { cleanTextTranscript } from "@/utils/functions"
import {
  CheckIcon,
  ClipboardCopyIcon,
  Crosshair1Icon,
  MagnifyingGlassIcon
} from "@radix-ui/react-icons"

interface TranscriptActionsProps {
  jumpCurrentTime: () => void
}

export default function TranscriptActions({ jumpCurrentTime }: TranscriptActionsProps) {
  const { extensionLoading, extensionData } = useExtension()
  const { transcriptJson, transcriptSearch, setTranscriptSearch } = useTranscript()

  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  function CopyTranscript() {
    if (isCopied || !extensionData.transcript) return
    const processed = cleanTextTranscript(extensionData.transcript)
    copyToClipboard(processed)
  }

  return (
    <div className="flex flex-row w-full justify-between items-center sticky top-0 z-10 bg-white dark:bg-[#0f0f0f] pt-3.5 pb-3 px-3 space-x-4">
      <div className="relative w-full">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
        <Input
          type="text"
          placeholder="Search Transcript"
          className="pl-8"
          onChange={(e) => {
            e.preventDefault()
            setTranscriptSearch(e.currentTarget.value)
          }}
          disabled={extensionLoading || transcriptJson.length === 0}
        />
      </div>

      <div className="flex flex-row space-x-2">
        <TooltipWrapper text="Jump to Current Time">
          <Button
            variant="outline"
            size="icon"
            onClick={jumpCurrentTime}
            disabled={extensionLoading || transcriptJson.length === 0}>
            <Crosshair1Icon className="h-4 w-4 opacity-60" />
          </Button>
        </TooltipWrapper>

        <TooltipWrapper text="Copy Transcript">
          <Button
            variant="outline"
            size="icon"
            onClick={CopyTranscript}
            disabled={extensionLoading || transcriptJson.length === 0}>
            {isCopied ? (
              <CheckIcon className="h-4.5 w-4.5 opacity-60" />
            ) : (
              <ClipboardCopyIcon className="h-4 w-4 opacity-60" />
            )}
          </Button>
        </TooltipWrapper>

        {/* <Select
          value={selectedLanguage.value}
          disabled={extensionLoading || transcriptJson.length === 0}
          onValueChange={(value) =>
            setSelectedLanguage(languages.find((lang) => lang.value === value))
          }>
          <SelectTrigger className="w-fit space-x-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
    </div>
  )
}
