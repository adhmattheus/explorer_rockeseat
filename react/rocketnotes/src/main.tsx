import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Details } from "./pages/Details/index.tsx";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </StrictMode>
);
