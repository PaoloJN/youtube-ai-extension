import { correctJsonString } from "@/utils/json-autocomplete"
import { llm } from "@/utils/llm"

import type { PlasmoMessaging } from "@plasmohq/messaging"

// use https://github.com/st3w4r/openai-partial-stream to stream the response

const SYSTEM = `
Using the transcript and relevant metadata (including the video title and description) of a YouTube video, generate 4 to 5 simple conversation starter questions related to the video content. Each question shouldn't be long Your response should be in json format.

Here is an example of the expected output THAT IS NOT RELATED TO THE VIDEO CONTENT:
{"questions": ["What is your experience with UI libraries and frameworks?","Have you ever used Tailwind or other UI libraries mentioned in the video?","Do you agree with the speaker's opinion on owning your style system instead of using pre-built libraries?","How do you feel about the trade-off between component reusability and architecture complexity when using styled components versus Tailwind?","What are your thoughts on the idea that front-end developers should own their style systems and build applications that aren't limited by the libraries they choose?"]}


START OF METADATA
Video Title: {title}
END OF METADATA

START OF TRANSCRIPT
{transcript}
END OF TRANSCRIPT
`

async function createSuggestionsCompletion(model: string, context: any) {
  console.log("Creating Suggestions Completion")

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
  return llm.beta.chat.completions.stream({
    messages: [{ role: "user", content: SYSTEM_WITH_CONTEXT }],
    model: "gpt-3.5-turbo-1106",
    stream: true,
    response_format: { type: "json_object" }
  })
}

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  let cumulativeDelta = ""

  const model = req.body.model
  const context = req.body.context

  console.log("Model")
  console.log(model)
  console.log("Context")
  console.log(context)

  try {
    const completion = await createSuggestionsCompletion(model, context)

    completion.on("content", (delta, snapshot) => {
      cumulativeDelta += delta

      const correctJson = correctJsonString(cumulativeDelta)
      console.log("Correct Json")

      console.log(correctJson)
      res.send({ message: correctJson, error: "", isEnd: false })
    })

    completion.on("end", () => {
      res.send({ message: "END", error: "", isEnd: true })
    })
  } catch (error) {
    res.send({ error: "something went wrong" })
  }
}

export default handler
