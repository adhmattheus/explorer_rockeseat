/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthContextData {
  user: { id: string; name: string; email: string } | null;
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => void;
  isUserAuthenticated: () => boolean;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    user: { id: string; name: string; email: string } | null;
    token: string | null;
  }>({
    user: null,
    token: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: SignInProps) {
    try {
      setIsLoading(true);
      const response = await api.post("/sessions", { email, password });

      const user = response.data.user;
      if (!user) {
        throw new Error("Usuário não encontrado na resposta.");
      }

      setData({ user, token: null }); // Token via cookies

      navigate("/home"); // 🔄 Redireciona
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Erro no servidor.");
      } else {
        alert("Não foi possível entrar.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function signOut() {
    api.post("/logout").then(() => {
      setData({ user: null, token: null });
      navigate("/");
    });
  }

  function isUserAuthenticated() {
    return !!data.user;
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        isUserAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
