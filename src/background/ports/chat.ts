import { getProviderByModel } from "@/utils/llm"
import { streamText } from "ai"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const SYSTEM = `
You are a helpful assistant, Given the metadata and transcript of a YouTube video. Your primary task is to provide accurate and relevant answers to any questions based on this information. Use the available details effectively to assist users with their inquiries about the video's content, context, or any other related aspects.

START OF METADATA
Video Title: {title}
END OF METADATA

START OF TRANSCRIPT
{transcript}
END OF TRANSCRIPT
`

async function createChatCompletion(
  model: string = "gpt-3.5-turbo",
  messages: any,
  context: any
) {
  console.log("Creating Chat Completion")

  const aiProvider = getProviderByModel(model, context)

  const parsed = context.transcript.events
    .filter((x: { segs: any }) => x.segs)
    .map((x: { segs: any[] }) => x.segs.map((y: { utf8: any }) => y.utf8).join(" "))
    .join(" ")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")

  const SYSTEM_WITH_CONTEXT = SYSTEM.replace("{title}", context.metadata.title).replace(
    "{transcript}",
    parsed
  )
  messages.unshift({ role: "system", content: SYSTEM_WITH_CONTEXT })

  console.log("Messages sent to OpenAI")
  console.log(messages)

  const result = await streamText({
    model: aiProvider(model),
    messages
  })

  return result.textStream
}

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  let cumulativeDelta = ""

  const model = req.body.model
  const messages = req.body.messages
  const context = req.body.context

  console.log("Model")
  console.log(model)
  console.log("Messages")
  console.log(messages)
  console.log("Context")
  console.log(context)

  try {
    const completion = await createChatCompletion(model, messages, context)

    for await (const delta of completion) {
      cumulativeDelta += delta

      res.send({ message: cumulativeDelta, error: null, isEnd: false })
    }

    res.send({ message: "END", error: null, isEnd: true })
  } catch (error) {
    res.send({ error: "something went wrong" })
  }
}

export default handler
