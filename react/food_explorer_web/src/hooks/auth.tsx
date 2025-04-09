/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface AuthContextData {
  user: { id: string; name: string; email: string; is_admin: number } | null;
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => void;
  isUserAuthenticated: () => boolean;
  isLoading: boolean;
  isLoadingUser: boolean;
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
    user: { id: string; name: string; email: string; is_admin: number } | null;
    token: string | null;
  }>({
    user: null,
    token: null,
  });

  const [isLoading, setIsLoading] = useState(false); // usado no login
  const [isLoadingUser, setIsLoadingUser] = useState(true); // usado no carregamento inicial

  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = localStorage.getItem("user"); // Retrieve user from localStorage
        if (storedUser) {
          setData({ user: JSON.parse(storedUser), token: null });
        } else {
          const response = await api.get("/me"); // Fetch user from backend
          const user = response.data;
          setData({ user, token: null });
          localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
        }
      } catch (error) {
        console.error("Error fetching user data:", error); // Debug log
        setData({ user: null, token: null });
        localStorage.removeItem("user"); // Clear localStorage on error
      } finally {
        setIsLoadingUser(false);
      }
    }

    loadUser();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      setIsLoading(true);

      const response = await api.post("/sessions", { email, password });
      const { user } = response.data;

      if (!user) {
        throw new Error("Usuário não encontrado na resposta.");
      }

      setData({ user, token: null }); 
      localStorage.setItem("user", JSON.stringify(user)); 
      navigate("/home");
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
      localStorage.removeItem("user"); // Clear localStorage on logout
      navigate("/");
    });
  }

  function isUserAuthenticated() {
    const isAuthenticated = !!data.user;
    return isAuthenticated;
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        isUserAuthenticated,
        isLoading,
        isLoadingUser,
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
