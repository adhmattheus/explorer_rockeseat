import { Navigate, Route, Routes } from "react-router-dom";

import { Detail } from "../pages/dish/detail";
import { NewDish } from "../pages/dish/new";
import Home from "../pages/home";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
