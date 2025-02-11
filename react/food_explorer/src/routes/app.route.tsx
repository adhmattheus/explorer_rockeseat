import { Navigate, Route, Routes } from "react-router-dom";
import { FoodDetail } from "../pages/FoodDetail";
import Home from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<FoodDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
