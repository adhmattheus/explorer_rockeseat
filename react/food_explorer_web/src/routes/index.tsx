import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.route";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
