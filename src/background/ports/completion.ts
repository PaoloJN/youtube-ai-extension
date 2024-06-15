import { createOpenAI } from "@ai-sdk/openai"
import { streamText, type CoreMessage } from "ai"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const openai = createOpenAI({
  apiKey: "YOUR_API_KEY"
})

async function createCompletion(model: string, prompt: string, context: any) {
  console.log("Creating Chat Completion")

  const parsed = context.transcript.events
    .filter((x: { segs: any }) => x.segs)
    .map((x: { segs: any[] }) => x.segs.map((y: { utf8: any }) => y.utf8).join(" "))
    .join(" ")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")

  const USER = `${prompt}\n\nVideo Title: ${context.metadata.title}\nVideo Transcript: ${parsed}`

  console.log("User Prompt")
  console.log(USER)

  const messages = [{ role: "user", content: USER }] satisfies CoreMessage[]

  const result = await streamText({
    model: openai(model || "gpt-3.5-turbo"),
    messages
  })

  return result.textStream
}

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  let cumulativeDelta = ""

  const prompt = req.body.prompt
  const model = req.body.model
  const context = req.body.context

  // console.log("Prompt")
  // console.log(prompt)
  // console.log("Model")
  // console.log(model)
  // console.log("Context")
  // console.log(context)

  try {
    const completion = await createCompletion(model, prompt, context)

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
