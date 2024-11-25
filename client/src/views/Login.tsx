import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from 'react-router-dom'
import { authenticateUser, saveSession } from '../services/UserServices'
import LoginForm from '../components/LoginForm'
import ErrorMessage from '../components/ErrorMessage'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  // Verificar campos vacíos
  let error = ''
  if (Object.values(formData).includes('')) {
    error = 'Todos los campos son obligatorios'
  }

  const user = authenticateUser(username, password)
  if (user) {
    console.log('user true')
    saveSession(user)
  } else {
    error = 'Credenciales incorrectas'
  }
  if (error.length) {
    return error
  }
  return redirect('/')
}

export default function Login() {
  const error = useActionData() as string

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-black text-slate-500">Login</h2>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST">
        <LoginForm />
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Login"
        />
      </Form>
    </>
  )
}
