import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeContextProvider from "./contexts/ThemeContext";
import LanguageContextProvider from "./contexts/LanguageContext";

import App from "./app/App";

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(
    <StrictMode>
        <ThemeContextProvider>
            <LanguageContextProvider>
                <App />
            </LanguageContextProvider>
        </ThemeContextProvider>
    </StrictMode>
)