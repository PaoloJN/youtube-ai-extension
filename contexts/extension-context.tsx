import { supabase } from "@/lib/supabase"
import type { Provider, User } from "@supabase/supabase-js"
import * as React from "react"

// user auth

interface ExtensionState {
  extensionContainer: any
  extensionIsOpen: boolean
  extensionTheme: string | null
  extensionLoading: boolean
  extensionPanel: string
  extensionVideoId: string
  extensionData: any
}

const initialState: ExtensionState = {
  extensionContainer: null,
  extensionIsOpen: false,
  extensionTheme: null,
  extensionLoading: false,
  extensionPanel: "Summary",
  extensionVideoId: "",
  extensionData: null
}

interface ExtensionActions {
  setExtensionContainer: (container: any) => void
  setExtensionIsOpen: (isOpen: boolean) => void
  setExtensionTheme: (theme: string | null) => void
  setExtensionLoading: (loading: boolean) => void
  setExtensionPanel: (panel: string) => void
  setExtensionVideoId: (videoId: string) => void
  setExtensionData: (data: any) => void
  resetExtension: () => void
}

interface ExtensionContext extends ExtensionState, ExtensionActions {}

const ExtensionContext = React.createContext<ExtensionContext | undefined>(undefined)

export function useExtension() {
  const context = React.useContext(ExtensionContext)
  if (!context) {
    throw new Error("useExtension must be used within a ExtensionProvider")
  }
  return context
}

interface ExtensionProviderProps {
  children: React.ReactNode
}

export function ExtensionProvider({ children }: ExtensionProviderProps) {
  const [extensionContainer, setExtensionContainer] = React.useState<any>(
    initialState.extensionContainer
  )
  const [extensionIsOpen, setExtensionIsOpen] = React.useState<boolean>(
    initialState.extensionIsOpen
  )
  const [extensionTheme, setExtensionTheme] = React.useState<string | null>(
    initialState.extensionTheme
  )
  const [extensionLoading, setExtensionLoading] = React.useState<boolean>(
    initialState.extensionLoading
  )
  const [extensionPanel, setExtensionPanel] = React.useState<string>(
    initialState.extensionPanel
  )
  const [extensionVideoId, setExtensionVideoId] = React.useState<string>(
    initialState.extensionVideoId
  )
  const [extensionData, setExtensionData] = React.useState<any>(
    initialState.extensionData
  )

  // User Auth logic

  function resetExtension() {
    setExtensionContainer(initialState.extensionContainer)
    setExtensionIsOpen(initialState.extensionIsOpen)
    setExtensionTheme(initialState.extensionTheme)
    setExtensionLoading(initialState.extensionLoading)
    setExtensionPanel(initialState.extensionPanel)
    setExtensionVideoId(initialState.extensionVideoId)
    setExtensionData(initialState.extensionData)
  }

  const value = {
    extensionContainer,
    extensionIsOpen,
    extensionTheme,
    extensionLoading,
    extensionPanel,
    extensionVideoId,
    extensionData,
    setExtensionContainer,
    setExtensionIsOpen,
    setExtensionTheme,
    setExtensionLoading,
    setExtensionPanel,
    setExtensionVideoId,
    setExtensionData,
    resetExtension
  }

  return <ExtensionContext.Provider value={value}>{children}</ExtensionContext.Provider>
}
