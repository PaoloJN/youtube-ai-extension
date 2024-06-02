import ChatActions from "./chat-actions"
import ChatList from "./chat-list"
import PromptForm from "./chat-prompt-form"

interface ChatProps {}

export default function Chat({}: ChatProps) {
  return (
    <div className="w-full h-[498px] relative bg-white dark:bg-[#0f0f0f]">
      <ChatActions />
      <ChatList />
      <PromptForm />
    </div>
  )
}
