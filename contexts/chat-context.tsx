import { models, type Message, type Model } from "@/lib/constants"
import * as React from "react"

interface ChatState {
  chatModel: Model
  chatIsGenerating: boolean
  chatIsError: boolean
  chatMessages: Message[] | undefined
  chatPrompt: string
  chatSuggestions: string[]
  chatIsGeneratingSuggestions: boolean
  chatIsErrorSuggestions: boolean
}

const initialState: ChatState = {
  chatModel: models[0],
  chatIsGenerating: false,
  chatIsError: false,
  chatMessages: [],
  chatPrompt: "",
  chatSuggestions: [],
  chatIsGeneratingSuggestions: false,
  chatIsErrorSuggestions: false
}

interface ChatActions {
  setChatModel: (model: Model) => void
  setChatIsGenerating: (isGenerating: boolean) => void
  setChatIsError: (isError: boolean) => void
  setChatMessages: (messages: Message[]) => void
  setChatPrompt: (prompt: string) => void
  setChatSuggestions: (suggestions: string[]) => void
  setChatIsGeneratingSuggestions: (isGeneratingSuggestions: boolean) => void
  setChatIsErrorSuggestions: (isErrorSuggestions: boolean) => void
}

interface ChatContext extends ChatState, ChatActions {}

const ChatContext = React.createContext<ChatContext | undefined>(undefined)

export function useChat() {
  const context = React.useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}

interface ChatProviderProps {
  children: React.ReactNode
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [chatModel, setChatModel] = React.useState<Model>(initialState.chatModel)
  const [chatIsGenerating, setChatIsGenerating] = React.useState<boolean>(
    initialState.chatIsGenerating
  )
  const [chatIsError, setChatIsError] = React.useState<boolean>(initialState.chatIsError)
  const [chatMessages, setChatMessages] = React.useState<Message[]>(
    initialState.chatMessages
  )
  const [chatPrompt, setChatPrompt] = React.useState<string>(initialState.chatPrompt)
  const [chatSuggestions, setChatSuggestions] = React.useState<any[]>(
    initialState.chatSuggestions
  )
  const [chatIsGeneratingSuggestions, setChatIsGeneratingSuggestions] =
    React.useState<boolean>(initialState.chatIsGeneratingSuggestions)
  const [chatIsErrorSuggestions, setChatIsErrorSuggestions] = React.useState<boolean>(
    initialState.chatIsErrorSuggestions
  )

  const value = {
    chatModel,
    chatIsGenerating,
    chatIsError,
    chatMessages,
    chatPrompt,
    chatSuggestions,
    chatIsGeneratingSuggestions,
    chatIsErrorSuggestions,
    setChatModel,
    setChatIsGenerating,
    setChatIsError,
    setChatMessages,
    setChatPrompt,
    setChatSuggestions,
    setChatIsGeneratingSuggestions,
    setChatIsErrorSuggestions
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
