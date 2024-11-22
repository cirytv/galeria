import axios from 'axios'
import { safeParse } from 'valibot'
import { DraftImageSchema, Image } from '../types'

type ImageData = {
  [k: string]: FormDataEntryValue
}

export async function addImage(data: ImageData) {
  try {
    const result = safeParse(DraftImageSchema, {
      image: data.image,
      name: data.name,
      description: data.description,
      publisher: data.publisher,
    })
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`
      await axios.post(url, {
        image: result.output.image,
        name: result.output.name,
        description: result.output.description,
        publisher: result.output.publisher,
      })
    } else {
      throw new Error('Datos no válidos')
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteImage(id: Image['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/images/${id}`
    await axios.delete(url)
  } catch (error) {
    console.log(error)
  }
}
