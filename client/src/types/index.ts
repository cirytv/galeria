import { array, InferOutput, number, object, string } from 'valibot'

export const DraftImageSchema = object({
  // image: string(),
  name: string(),
  description: string(),
  publisher: string(),
})

export const ImageSchema = object({
  id: number(),
  // image: string(),
  name: string(),
  description: string(),
  publisher: string(),
})

export const DraftUser = object({
  username: string(),
  password: string(),
})

export const UserSchema = object({
  id: number(),
  username: string(),
  password: string(),
})

export const ImagesSchema = array(ImageSchema)
export type Image = InferOutput<typeof ImageSchema>

export const UsersSchema = array(UserSchema)
export type User = InferOutput<typeof UserSchema>
