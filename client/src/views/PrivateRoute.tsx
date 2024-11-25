import { Navigate, Outlet } from 'react-router-dom'
import { getSession } from '../services/UserServices'

const PrivateRoute = () => {
  const user = getSession() // Verifica la sesión
  if (!user) return <Navigate to="/login" /> // Redirige si no está autenticado
  return <Outlet /> // Renderiza las rutas protegidas
}

export default PrivateRoute
