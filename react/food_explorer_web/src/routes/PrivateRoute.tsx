import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute() {
  const { isUserAuthenticated, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return null;
  }

  const isAuthenticated = isUserAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
