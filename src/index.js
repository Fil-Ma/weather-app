import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeContextProvider from "./contexts/ThemeContext";

import App from "./app/App";

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(
    <StrictMode>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </StrictMode>
)