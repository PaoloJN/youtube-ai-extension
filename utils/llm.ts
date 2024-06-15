import { createMistral } from "@ai-sdk/mistral"
import { createOpenAI } from "@ai-sdk/openai"
import { createOllama } from "ollama-ai-provider"

export const mistralai = createMistral({
  apiKey: "YOUR_MISTRALAI_API_KEY"
})

export const openai = createOpenAI({
  apiKey: "YOUR_OPENAI_API_KEY"
})

export const ollama = createOllama()

export const getProviderByModel = (model: string) => {
  switch (model) {
    case "mistral-small-latest":
    case "mistral-large-latest":
      return mistralai
    case "phi3":
    case "llama3":
      return ollama

    default:
      return openai
  }
}
