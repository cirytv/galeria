import { Form, ActionFunctionArgs, redirect } from 'react-router-dom'
import { Image } from '../types'
import { deleteImage } from '../services/ImageServices'

type ImageDetailsProps = {
  image: Image
}

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteImage(+params.id)
    return redirect('/')
  }
}

export default function ImageDetails({ image }: ImageDetailsProps) {
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800 text-center">{image.name}</td>
      <td className="p-3 text-lg text-gray-800 text-center">
        {image.description}
      </td>
      <td className="p-3 text-lg text-gray-800 text-center">
        {image.publisher}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <div className="flex gap-2 items-center">
          <Form
            className="w-full"
            method="POST"
            action={`images/${image.id}/delete`}
            onSubmit={(e) => {
              if (!confirm('¿Eliminar?')) {
                e.preventDefault()
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            />
          </Form>
        </div>
      </td>
    </tr>
  )
}
