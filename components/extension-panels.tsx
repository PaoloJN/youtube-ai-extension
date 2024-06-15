import Chat from "@/components/chat"
import Summary from "@/components/summary"
import Transcript from "@/components/transcript"
import { useExtension } from "@/contexts/extension-context"
import { openAIKeyAtom } from "@/lib/atoms/openai"
import { useAtomValue } from "jotai"
import React from "react"

import OpenAISetup from "./openai-setup"

interface ExtensionPanelsProps {}

export default function ExtensionPanels({}: ExtensionPanelsProps) {
  const { extensionPanel } = useExtension()

  const openAIKey = useAtomValue(openAIKeyAtom)

  if (!openAIKey) {
    return (
      <div>
        <OpenAISetup />
      </div>
    )
  }
  return (
    <div>
      {extensionPanel === "Summary" && <Summary />}
      {extensionPanel === "Transcript" && <Transcript />}
      {extensionPanel === "Chat" && <Chat />}
    </div>
  )
}
