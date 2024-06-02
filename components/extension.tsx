import ExtensionActions from "@/components/extension-actions"
import ExtensionPanels from "@/components/extension-panels"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { useExtension } from "@/contexts/extension-context"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"
import { getVideoData } from "@/utils/functions"
import React from "react"

export default function Extension() {
  //https://github.com/vantezzen/plasmo-state

  const {
    setExtensionContainer,
    setExtensionIsOpen,
    setExtensionVideoId,
    setExtensionLoading,
    setExtensionData,
    setExtensionTheme,
    extensionTheme,
    extensionIsOpen,
    extensionVideoId
  } = useExtension()

  React.useEffect(() => {
    console.log("Use Effect That Fetches Video Data Called")
    const getVideoId = () => {
      return new URLSearchParams(window.location.search).get("v")
    }

    const fetchVideoData = async () => {
      const id = getVideoId()
      if (id && id !== extensionVideoId) {
        setExtensionVideoId(id)
        setExtensionLoading(true)
        const data = await getVideoData(id)
        console.log("Data")
        console.log(data)
        setExtensionData(data)
        setExtensionLoading(false)
      }
    }

    fetchVideoData()

    const intervalId = setInterval(fetchVideoData, 2000)

    return () => clearInterval(intervalId)
  }, [extensionVideoId])

  React.useEffect(() => {
    console.log("Use Effect That Fetches Theme Called")
    const getCssVariable = (name: string) => {
      const rootStyle = getComputedStyle(document.documentElement)
      return rootStyle.getPropertyValue(name).trim()
    }
    const backgroundColor = getCssVariable("--yt-spec-base-background")
    if (backgroundColor === "#fff") {
      setExtensionTheme("light")
    } else {
      setExtensionTheme("dark")
    }
  }, [])

  if (!extensionTheme) return null

  return (
    <main
      ref={setExtensionContainer}
      className={`antialiased w-full mb-3 z-10 ${extensionTheme}`}>
      <div className="w-full">
        <Collapsible
          open={extensionIsOpen}
          onOpenChange={setExtensionIsOpen}
          className="space-y-3">
          <ExtensionActions />
          <CollapsibleContent className="w-full dark:bg-[#0f0f0f] dark:text-white h-fit max-h-[500px] border border-zinc-200 dark:border-zinc-800 rounded-md overflow-auto no-scrollbar">
            <ExtensionPanels />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </main>
  )
}
