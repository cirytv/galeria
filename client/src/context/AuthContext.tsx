import React, { createContext, useContext, useState } from 'react'
import { User } from '../types/index'
import { getSession } from '../services/UserServices'

interface AuthContextType {
  user: User | null // Permitir null
  setUser: (user: User | null) => void // Permitir null también aquí
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(() => {
    const session = getSession()
    return session
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
