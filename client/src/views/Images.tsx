import { Form, Link, useLoaderData } from 'react-router-dom'
import { Image } from '../types/index'
import { getImages } from '../services/ImageServices'
import ImageDetails from '../components/ImageDetails'
import { useAuth } from '../context/AuthContext'

export async function loader() {
  const images = await getImages()
  return images
}

export default function Images() {
  const data = useLoaderData() as Image[]
  console.log(data)
  const { user } = useAuth()
  // Filtrar las imágenes según el publisher
  const filteredImages = user
    ? data.filter((image) => image.publisher === user.username)
    : []
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-slate-500">
          Hello, {user?.username}
        </h2>
        {user && (
          <div className="flex items-center gap-4">
            <Form method="post" action="/logout">
              <button
                type="submit"
                className="rounded-md bg-red-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-red-500"
              >
                Logout
              </button>
            </Form>
            <Link
              to="images/create"
              className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
            >
              Agregar Imagen
            </Link>
          </div>
        )}
      </div>

      <div>
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Publisher</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredImages.map((image) => (
              <ImageDetails key={image.id} image={image} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
