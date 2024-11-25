import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from './layouts/Layout'
import Images, { loader as imagesLoader } from './views/Images'
import NewImage, { action as newImageAction } from './views/NewImage'
import { action as deleteImageAction } from './components/ImageDetails'
import Login, { action as loginAction } from './views/Login'
import { clearSession } from './services/UserServices'
import PrivateRoute from './views/PrivateRoute'

export async function logoutAction() {
  clearSession() // Elimina la sesión del usuario
  return redirect('/login')
}

export const router = createBrowserRouter([
  {
    path: '/', // Layout principal
    element: <Layout />,
    children: [
      // Ruta pública para Login
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      // Rutas protegidas
      {
        path: '/',
        element: <PrivateRoute />, // Valida la sesión antes de acceder
        children: [
          {
            index: true,
            element: <Images />,
            loader: imagesLoader,
          },
          {
            path: 'images/create',
            element: <NewImage />,
            action: newImageAction,
          },
          {
            path: 'images/:id/delete',
            action: deleteImageAction,
          },
          {
            path: 'logout',
            action: logoutAction, // Ruta para logout
          },
        ],
      },
    ],
  },
])
