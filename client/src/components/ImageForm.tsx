import { Image } from '../types'

type ProductFormProps = {
  product?: Image
}

export default function ImageForm({ product }: ProductFormProps) {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Nombre Imagen
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre de Imagen"
          name="name"
          defaultValue={product?.name}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Descripcion
        </label>
        <input
          id="description"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Description"
          name="description"
          defaultValue={product?.description}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Publisher
        </label>
        <input
          id="publisher"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Publisher"
          name="publisher"
          defaultValue={product?.publisher}
        />
      </div>
    </>
  )
}
