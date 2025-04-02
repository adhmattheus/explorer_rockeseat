import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
