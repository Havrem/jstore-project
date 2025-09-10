import type { LoginInput, RegisterInput } from "@schemas/auth.schema";
import { api } from "./api"

export const register = async (req: RegisterInput): Promise<void> => {
  await api.post("/api/auth/register-app-user", req)
}

export const login = async (body: LoginInput): Promise<void>=> {
  await api.post("/api/auth/login-app-user", body)
}

export const logout = async (): Promise<void> => {
  await api.post("/api/auth/logout");
}