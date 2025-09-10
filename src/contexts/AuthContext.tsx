import { register as apiRegister, login as apiLogin, logout as apiLogout } from "api/authApi"
import type { LoginInput, RegisterInput } from "@schemas/auth.schema"
import { createContext, useContext, useState, type ReactNode } from "react"

type AuthContextValue = {
    isLoggedIn : boolean,
    register: (input: RegisterInput) => Promise<void>,
    login : (input: LoginInput) => Promise<void>,
    logout : () => Promise<void>
}

const LOGGEDIN = "auth:LoggedIn"

const defaultAuth: AuthContextValue = {
  isLoggedIn: false,
  register: async () => {},
  login: async () => {},
  logout: async () => {}
}

const AuthContext = createContext<AuthContextValue>(defaultAuth)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => localStorage.getItem(LOGGEDIN) === "1")

    const register = async (input: RegisterInput) => {
        await apiRegister(input)
    }

    const login = async (input: LoginInput) => {
        await apiLogin(input)
        setIsLoggedIn(true)
        localStorage.setItem(LOGGEDIN, "1")
    }

    const logout = async () => {
        await apiLogout()
        setIsLoggedIn(false)
        localStorage.removeItem(LOGGEDIN)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}