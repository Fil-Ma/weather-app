import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeContextProvider from "@context/ThemeContext/ThemeContextProvider.tsx";
import LanguageContextProvider from "@context/LanguageContext/LanguageContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
