// Chat Provider
// Summary Provider
// Transcript Provider

import { ChatProvider } from "@/contexts/chat-context"
import { ExtensionProvider } from "@/contexts/extension-context"
import { ModelProvider } from '@/contexts/model-context'
import { SummaryProvider } from "@/contexts/summary-context"
import { TranscriptProvider } from "@/contexts/transcript-context"

export default function Providers({ children }) {
  return (
    <ExtensionProvider>
      <ModelProvider>
        <ChatProvider>
          <SummaryProvider>
            <TranscriptProvider>{children}</TranscriptProvider>
          </SummaryProvider>
        </ChatProvider>
      </ModelProvider>
    </ExtensionProvider>
  )
}
