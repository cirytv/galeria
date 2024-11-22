import {
  useNavigate,
  Form,
  ActionFunctionArgs,
  redirect,
} from 'react-router-dom'
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
  const navigate = useNavigate()

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{image.name}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/productos/${image.id}/editar`)}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </button>

          <Form
            className="w-full"
            method="POST"
            action={`images/${image.id}/eliminar`}
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
