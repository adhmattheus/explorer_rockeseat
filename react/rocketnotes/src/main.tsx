import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";
import { SignIn } from "./pages/SignIn/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </StrictMode>
);
