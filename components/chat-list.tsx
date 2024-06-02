import { useChat } from "@/contexts/chat-context"
import type { Message } from "@/lib/constants"
import { ChatScrollAnchor } from "@/lib/hooks/chat-scroll-anchor"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

import EmptyScreen from "./chat-empty-screen"
import ChatItem from "./chat-item"

interface ChatListProps {
  className?: string
}

export default function ChatList({ className }: ChatListProps) {
  const { chatMessages, setChatPrompt } = useChat()
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // Scroll to the bottom of the scroll container
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
  }, [chatMessages])

  return (
    <div className={cn("pt-16", className)}>
      {!chatMessages || chatMessages.length === 0 ? (
        <EmptyScreen setPromptInput={setChatPrompt} />
      ) : (
        <div
          ref={scrollContainerRef}
          className="h-[375px] overflow-y-scroll no-scrollbar">
          {chatMessages.map((message: Message, index: number) => (
            <ChatItem key={index} message={message} />
          ))}
        </div>
      )}
    </div>
  )
}

// import { useChat } from "@/contexts/chat-context"
// import { cn } from "@/lib/utils"
// import { useEffect, useRef, useState } from "react"

// import EmptyScreen from "./chat-empty-screen"
// import ChatItem from "./chat-item"

// interface ChatListProps {
//   className?: string
// }

// export default function ChatList({ className }: ChatListProps) {
//   const { chatMessages, setChatPrompt } = useChat()
//   const scrollContainerRef = useRef(null)
//   const [isMouseOver, setIsMouseOver] = useState(false)

//   useEffect(() => {
//     // Ensure the element is not null
//     const scrollContainer = scrollContainerRef.current
//     if (scrollContainer) {
//       if (!isMouseOver) {
//         scrollContainer.scrollTop = scrollContainer.scrollHeight
//       }

//       const handleMouseEnter = () => setIsMouseOver(true)
//       const handleMouseLeave = () => setIsMouseOver(false)

//       // Add mouse event listeners
//       scrollContainer.addEventListener("mouseenter", handleMouseEnter)
//       scrollContainer.addEventListener("mouseleave", handleMouseLeave)

//       return () => {
//         // Clean up the event listeners
//         scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
//         scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
//       }
//     }
//   }, [chatMessages.length, isMouseOver]) // Update dependency array to react on message count and mouse state changes

//   return (
//     <div className={cn("pt-16", className)}>
//       {!chatMessages || chatMessages.length === 0 ? (
//         <EmptyScreen setPromptInput={setChatPrompt} />
//       ) : (
//         <div
//           ref={scrollContainerRef}
//           className="h-[375px] overflow-y-scroll no-scrollbar"
//           onMouseEnter={() => setIsMouseOver(true)}
//           onMouseLeave={() => setIsMouseOver(false)}>
//           {chatMessages.map((message, index) => (
//             <ChatItem key={index} message={message} />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
