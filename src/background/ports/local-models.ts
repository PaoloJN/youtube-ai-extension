import type { PlasmoMessaging } from "@plasmohq/messaging";

async function getLocalModels() {
  const baseURL = "http://localhost:1234/v1"
  try {
    const localModelsResponse = await fetch(`${baseURL}/models`)
    return await localModelsResponse.json()
  } catch (error) {
    throw error
  }
}

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  try {
    const localModelsResponse = await getLocalModels()

    const localModels = localModelsResponse.data.map((model: any) => ({
      value: model.id,
      label: model.id,
      content: model.id,
      icon: ""
    }))

    res.send({ message: localModels, error: null, isEnd: true })
  } catch (error) {
    console.log(error)
    res.send({ error: "something went wrong" })
  }
}

export default handler