import { models, prompts, type Model, type Prompt } from "@/lib/constants"
import { useState } from "react"

// prettier-ignore
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button"
import { TooltipWrapper } from "@/components/ui/tooltip-wrapper"
import { useChat } from "@/contexts/chat-context"
import { useExtension } from "@/contexts/extension-context"
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"
import { PlusIcon } from "@radix-ui/react-icons"
import React from "react"

interface ChatActionProps {
  className?: string
}

export default function ChatAction({ className }: ChatActionProps) {
  const {
    chatModel,
    chatIsGenerating,
    setChatMessages,
    setChatIsGenerating,
    setChatIsError,
    setChatModel
  } = useChat()

  const { extensionLoading } = useExtension()

  // const [selectedModel, setSelectedModel] = useState<Model>(models[0])
  // const [isGeneratingChat, setIsGeneratingChat] = useState<any>(false)

  const { isCopied, copyToClipboard } = useCopyToClipboard({
    timeout: 2000
  })

  function resetChat() {
    setChatMessages([])
    setChatIsGenerating(false)
    setChatIsError(false)
  }

  return (
    <div
      className={cn(
        "flex flex-row w-full justify-between items-center absolute top-0 z-10 bg-white dark:bg-[#0f0f0f] pt-3.5 pb-2 px-3",
        className
      )}>
      <Select
        value={chatModel.value}
        onValueChange={(value) =>
          setChatModel(models.find((model) => model.value === value))
        }>
        <SelectTrigger className="w-fit space-x-3">
          <SelectValue placeholder="Model" />
        </SelectTrigger>
        <SelectContent>
          {models.map((model: Model) => (
            <SelectItem key={model.value} value={model.value}>
              <div className="flex flex-row items-center">
                <div className="mr-2">{model.icon}</div>
                {model.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-row space-x-2">
        <TooltipWrapper text="New Chat">
          <Button
            variant="outline"
            onClick={resetChat}
            disabled={chatIsGenerating || extensionLoading}
            className="flex flex-row space-x-2">
            <PlusIcon className="h-4 w-4 opacity-60" />
            <span>New Chat</span>
          </Button>
        </TooltipWrapper>

        {/* <TooltipWrapper text="Copy Chats">
          <Button variant="outline" size="icon" disabled={chatIsGenerating}>
            {isCopied ? (
              <CheckIcon className="h-4.5 w-4.5 opacity-60" />
            ) : (
              <ClipboardCopyIcon className="h-4 w-4 opacity-60" />
            )}
          </Button>
        </TooltipWrapper> */}
      </div>
    </div>
  )
}
