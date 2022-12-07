import React, { createContext, useContext, useState } from "react";

// theme context
const ThemeContext = createContext();

// function context provider
export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light" 
    );
    
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

// custom theme context hook
export function useThemeContext() {
    return useContext(ThemeContext);
}