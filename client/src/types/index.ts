import { array, InferOutput, number, object, string } from 'valibot'

export const DraftImageSchema = object({
  image: string(),
  name: string(),
  description: string(),
  publisher: string(),
})

export const ImageSchema = object({
  id: number(),
  image: string(),
  name: string(),
  description: string(),
  publisher: string(),
})

export const ImagesSchema = array(ImageSchema)
export type Image = InferOutput<typeof ImageSchema>
