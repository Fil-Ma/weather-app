import React from "react";
import { render } from "@testing-library/react";

import ThemeContextProvider from "../contexts/ThemeContext";
import LanguageContextProvider from "../contexts/LanguageContext";
import App from "../app/App";

describe("App function component", () => {

    it("renders without errors", () => {
        render(
            <ThemeContextProvider>
                <LanguageContextProvider>
                    <App />
                </LanguageContextProvider>
            </ThemeContextProvider>
        );
    })
})