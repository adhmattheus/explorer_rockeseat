import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Cart } from "../pages/cart";
import { Detail } from "../pages/dish/detail";
import { NewDish } from "../pages/dish/new";
import Home from "../pages/home";
import { Orders } from "../pages/orders";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { Users } from "../pages/users";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/new/:id?" element={<NewDish />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
