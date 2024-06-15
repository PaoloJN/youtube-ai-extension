import OpenAI from "openai"

export const createLlm = (apiKey: string) =>
  new OpenAI({
    apiKey
  })
