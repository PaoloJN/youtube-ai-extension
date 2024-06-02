import Markdown from "@/components/markdown"
import { Button } from "@/components/ui/button"
import { useSummary } from "@/contexts/summary-context"

import SummarySkeleton from "./summary-skeleton"

export default function SummaryContent() {
  const { summaryIsGenerating, summaryContent, generateSummary } = useSummary()

  if (!summaryContent && summaryIsGenerating) {
    return (
      <div className="flex justify-center items-center w-full p-3 bg-white dark:bg-[#0f0f0f]">
        <SummarySkeleton />
      </div>
    )
  }

  if (!summaryContent && !summaryIsGenerating) {
    return (
      <div className="flex justify-center items-center w-full p-3 bg-white dark:bg-[#0f0f0f]">
        <Button variant="outline" className="w-full h-12" onClick={generateSummary}>
          <span className="text-sm">Generate Summary</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center w-full p-3 bg-white dark:bg-[#0f0f0f]">
      <div className="h-[600px] w-full px-3 opacity-80">
        <Markdown markdown={summaryContent} className="pb-6" />
      </div>
    </div>
  )
}
