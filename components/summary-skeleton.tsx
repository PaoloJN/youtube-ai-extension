import { Skeleton } from "@/components/ui/skeleton"

export default function SummarySkeleton() {
  return (
    <div className="h-[600px] w-full px-3">
      <div className="w-full rounded-md space-y-4">
        {/* <span className="text-xl font-bold">Summary</span> */}
        <div className="flex flex-col space-y-5">
          {Array.from({ length: 16 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
