import { useEffect, useState } from "react"
import { useModel } from '@/contexts/model-context'
import { models as configuredModels, prompts, type Model, type Prompt } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

interface ExtensionModelProps {}

export default function ExtensionModel({}: ExtensionModelProps) {
  const [open, setOpen] = useState(false);
  const {
    // models,
    localModels,
    selectedModelType,
    setSelectedModelType,
    selectedModel,
    setSelectedModel
  } = useModel()

  useEffect(() => {
    setSelectedModel(selectedModel)
  }, [selectedModel])

  return (
    <Popover open={open}>
      <PopoverTrigger className='pr-3 w-full'>
        <Button variant="outline" className='w-full space-x-3 px-1 whitespace-normal [&>span]:line-clamp-1' onClick={() => setOpen(!open)}>
          <span>{selectedModel.label}</span>
          <CaretSortIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-100 w-full">
        <Tabs defaultValue={selectedModelType} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Online Models</TabsTrigger>
            <TabsTrigger value="local">Local Models</TabsTrigger>
          </TabsList>
          <TabsContent value='online'>
            <div className="flex flex-col space-y-2 mt-2">
              {configuredModels.map((model: Model) => (
                    <Button
                      key={model.value}
                      variant='ghost'
                      onClick={() => {
                        setSelectedModelType('online')
                        setSelectedModel(model)
                        setOpen(false)
                      }}>
                        {model.label}
                        <div className="ml-auto">{model.icon}</div>
                    </Button>
                  ))}
            </div>
          </TabsContent>
          <TabsContent value="local">
            <div className="flex flex-col space-y-2 mt-2">
              {localModels.map((model: Model) => (
                    <Button
                      key={model.value}
                      variant='ghost'
                      onClick={() => {
                        setSelectedModelType('local')
                        setSelectedModel(model)
                        setOpen(false)
                      }}>

                        { selectedModel.value === model.value ? <CheckIcon /> : <></> }
                        {model.label}
                        <div className="my-2">{model.icon}</div>
                    </Button>
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}
