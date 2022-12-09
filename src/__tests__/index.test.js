import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

// contexts
import ThemeContextProvider from "../contexts/ThemeContext";
import LanguageContextProvider from "../contexts/LanguageContext";

// components
import App from "../app/App";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBody from "../components/PageBody";
import SearchBar from "../components/SearchBar";

// providers wrapper
const AllTheProviders = ({children}) => {
    return (
        <ThemeContextProvider>
            <LanguageContextProvider>
                { children }
            </LanguageContextProvider>
        </ThemeContextProvider>
    )
}
// test suite
describe("App function component", () => {

    it("renders without errors", () => {
        render(<App />, { wrapper: AllTheProviders})
    })
})

describe("Header component", () => {

    it("renders withour errors", () => {
        render(<Header />, { wrapper: AllTheProviders})
    })

    
    describe("toggle theme button", () => {

        it("should be rendered", () => {
            render(<Header />, { wrapper: AllTheProviders})

            const toggleThemeButton = screen.getByLabelText("Change Theme", { selector: "button"});

            expect(toggleThemeButton).toBeInTheDocument()
            expect(toggleThemeButton).toBeVisible()
            expect(toggleThemeButton).toBeEnabled()
        })

        it("should change colors if clicked", () => {
            render(<App />, { wrapper: AllTheProviders})

            const toggleThemeButton = screen.getByLabelText("Change Theme", { selector: "button" })
            fireEvent.click(toggleThemeButton);
        })
    })

    describe("toggle language button", () => {

        it("should be rendered", () => {
            render(<Header />, { wrapper: AllTheProviders})

            const changeLanguageButton = screen.getByLabelText("Change Language", { selector: "button" });

            expect(changeLanguageButton).toBeInTheDocument()
            expect(changeLanguageButton).toBeVisible()
            expect(changeLanguageButton).toBeEnabled()
        })

        // it("should open dialog if clicked", () => {
        //     render(<App />, { wrapper: AllTheProviders})
            
        //     const changeLanguageButton = screen.getByLabelText("Change Language", { selector: "button" })
        //     fireEvent.click(changeLanguageButton);
            
        // })
    })
})

describe("PageBody component", () => {

    it("renders withour errors", () => {
        render(<PageBody />, { wrapper: AllTheProviders})
    })
})

describe("Footer component", () => {

    it("renders withour errors", () => {
        render(<Footer />, { wrapper: AllTheProviders})
    })
})