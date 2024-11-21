import {
  MISTRALAI_API_KEY_STORAGE_KEY,
  OPENAI_API_KEY_STORAGE_KEY
} from "@/lib/constants"
import { createMistral } from "@ai-sdk/mistral"
import { createOpenAI } from "@ai-sdk/openai"
import { createOllama } from "ollama-ai-provider"

export const ollama = createOllama()

export const getProviderByModel = (model: string, ctx: any) => {
  switch (model) {
    case "mistral-small-latest":
    case "mistral-large-latest":
      return createMistral({
        apiKey: ctx[MISTRALAI_API_KEY_STORAGE_KEY]
      })
    case "phi3":
    case "llama3":
      return ollama

    default:
      return createOpenAI({
        apiKey: ctx[OPENAI_API_KEY_STORAGE_KEY]
      })
  }
}
