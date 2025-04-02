import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute() {
  const { isUserAuthenticated } = useAuth();

  return isUserAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}
