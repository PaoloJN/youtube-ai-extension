import { useExtension } from "@/contexts/extension-context"
import { useTranscript } from "@/contexts/transcript-context"
import React from "react"

import TranscriptList from "./transcript-list"
import TranscriptSkeleton from "./transcript-skeleton"

interface TranscriptContentProps {
  ref: React.RefObject<HTMLDivElement>
}

const TranscriptContent = React.forwardRef<HTMLDivElement, TranscriptContentProps>(
  (props, ref) => {
    const { transcriptJson, transcriptSearch } = useTranscript()
    const { extensionLoading, extensionData } = useExtension()

    if (extensionLoading || !extensionData) {
      return (
        <div className="flex justify-center items-center w-full p-3 bg-white dark:bg-[#0f0f0f]">
          <TranscriptSkeleton />
        </div>
      )
    }

    return (
      <div
        ref={ref} // Attach the ref here
        className="flex justify-center items-center w-full  p-3 bg-white dark:bg-[#0f0f0f]">
        <TranscriptList transcript={transcriptJson} searchInput={transcriptSearch} />
      </div>
    )
  }
)

export default TranscriptContent
