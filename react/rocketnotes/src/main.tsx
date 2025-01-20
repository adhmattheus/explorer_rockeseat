import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";
import { Routes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </StrictMode>
);
