import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

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
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/new/:id?" element={<NewDish />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
