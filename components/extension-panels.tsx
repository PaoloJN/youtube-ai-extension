import Chat from "@/components/chat"
import Summary from "@/components/summary"
import Transcript from "@/components/transcript"
import { useExtension } from "@/contexts/extension-context"
import React from "react"

interface ExtensionPanelsProps {}

export default function ExtensionPanels({}: ExtensionPanelsProps) {
  const { extensionPanel } = useExtension()

  return (
    <div>
      {extensionPanel === "Summary" && <Summary />}
      {extensionPanel === "Transcript" && <Transcript />}
      {extensionPanel === "Chat" && <Chat />}
    </div>
  )
}
