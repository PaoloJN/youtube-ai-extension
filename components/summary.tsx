import SummaryActions from "@/components//summary-actions"
import SummaryContent from "@/components/summary-content"

interface SummaryProps {}

export default function Summary({}: SummaryProps) {
  return (
    <>
      <SummaryActions />
      <SummaryContent />
    </>
  )
}
