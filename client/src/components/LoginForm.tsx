export default function LoginForm() {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800 font-bold" htmlFor="username">
          username
        </label>
        <input
          id="username"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre de usuario"
          name="username"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800 font-bold" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Contraseña"
          name="password"
        />
      </div>
    </>
  )
}
