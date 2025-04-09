import { api } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
}

export interface UpdateUser {
  name?: string;
  email?: string;
  password?: string;
  old_password?: string;
  is_admin?: boolean;
}

export class UsersService {
  static async getUsers(): Promise<User[]> {
    try {
      const response = await api.get<User[]>("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw error;
    }
  }

  static async createUser(userData: CreateUser): Promise<void> {
    try {
      await api.post("/users", userData);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
  }

  static async updateUser(userData: UpdateUser): Promise<void> {
    try {
      await api.put("/users", userData);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      throw error;
    }
  }
}
