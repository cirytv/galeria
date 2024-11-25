import { usersDb } from '../data/users'
import type { User } from '../types'

// auth function
export function authenticateUser(username: string, password: string) {
  return (
    usersDb.find(
      (user) => user.username === username && user.password === password
    ) || null
  )
}

// save session
export const saveSession = (user: User) => {
  sessionStorage.setItem('authUser', JSON.stringify(user))
}

// get session
export const getSession = (): User | null => {
  const session = sessionStorage.getItem('authUser')
  return session ? JSON.parse(session) : null
}

// delete sesion
export const clearSession = () => {
  sessionStorage.removeItem('authUser')
}
