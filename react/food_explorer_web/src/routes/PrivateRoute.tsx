import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute() {
  const { isUserAuthenticated, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return null;
  }

  return isUserAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}
