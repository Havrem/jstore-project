import type { LoginInput, RegisterInput } from "@schemas/auth.schema";
import { api } from "./api"

export const register = async (req: RegisterInput): Promise<void> => {
  await api.post("/api/auth/register", req)
}

export const login = async (body: LoginInput): Promise<void>=> {
  await api.post("/api/auth/login", body)
}

export const logout = async (): Promise<void> => {
  await api.post("/api/auth/logout");
}