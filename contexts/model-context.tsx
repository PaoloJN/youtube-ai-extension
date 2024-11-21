import * as React from "react";
import { useAtomValue } from "jotai";
import { usePort } from "@plasmohq/messaging/hook";
import { openAIKeyAtom } from "@/lib/atoms/openai";
import { models as configuredModels, OPENAI_API_KEY_STORAGE_KEY, prompts, type Model, type Prompt } from "@/lib/constants";
import { useExtension } from "./extension-context";


interface ModelContext {
  selectedModel: Model
  setSelectedModel: (model: Model) => void
  selectedModelType: 'online' | 'local'
  setSelectedModelType: (modelType: 'online' | 'local') => void
  models: Model[]
  setModels: (models: Model[]) => void
  localModels: Model[]
  setLocalModels: (models: Model[]) => void
}

const ModelContext = React.createContext<ModelContext | undefined>(undefined)

export function useModel() {
  const context = React.useContext(ModelContext)
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider")
  }
  return context
}

interface ModelProviderProps {
  children: React.ReactNode
}

export function ModelProvider({ children }: ModelProviderProps) {
  const port = usePort("local-models")
  // const openAIKey = useAtomValue(openAIKeyAtom)

  // models: Model[]
  // setModels: (models: Model[]) => void
  const [models, setModels] = React.useState<Model[]>(configuredModels)
  // selectedModel: Model
  // setSelectedModel: (model: Model) => void
  const [selectedModel, setSelectedModel] = React.useState<Model>(models[0])
  const [selectedModelType, setSelectedModelType] = React.useState<'online' | 'local'>('online')
  // localModels: Model[]
  // setLocalModels: (models: Model[]) => void
  const [localModels, setLocalModels] = React.useState<Model[]>([])

  // const { extensionData, extensionLoading } = useExtension()

  // functions to be used in the context

  async function generateModel(e: any) {
    // console.log("Function That Generates Model Called")
    // e.preventDefault()

    // if (modelContent !== null) {
    //   setModelContent(null)
    // }

    // setModelIsGenerating(true)
    // setModelIsError(false)
    // port.send({
    //   prompt: modelPrompt.content,
    //   model: modelModel.content,
    //   context: { ...extensionData, [OPENAI_API_KEY_STORAGE_KEY]: openAIKey }
    // })
  }

  // effects

  React.useEffect(() => {
    console.log("Retrieve Local Models")
    port.send({})
  }, [])

  // React.useEffect(() => {
  //   setModelContent(null)
  //   setModelIsGenerating(false)
  //   setModelIsError(false)
  // }, [extensionLoading])

  React.useEffect(() => {
    if (port.data?.message !== undefined) {
      console.log("Retrieve Local Models Called")
      setLocalModels(port.data?.message)
    }
    // else {
    //   console.log("No message")
    //   console.log(port.data?.message)
    // }
  }, [port.data?.message])

  React.useEffect(() => {
    if (port.data?.error) {
      console.log("Retrieve Local Models Error Called")
      console.log(port)
      //   setModelIsError(true)
      //   setModelContent(null)
      // } else {
      //   setModelIsError(false)
    }
  }, [port.data?.error])

  const value = {
    selectedModel,
    setSelectedModel,
    selectedModelType,
    setSelectedModelType,
    models,
    setModels,
    localModels,
    setLocalModels
  }

  return <ModelContext.Provider value={value}>{children}</ModelContext.Provider>
}