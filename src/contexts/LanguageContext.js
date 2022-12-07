import React, { createContext, useContext, useState } from "react";

// language context
const LanguageContext = createContext();

// function context provider
export default function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState(
        localStorage.getItem("theme") || "en"
    );

    function changeLanguage() {
        // set new value of language
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            { children }
        </LanguageContext.Provider>
    )
}

// custom theme context hook
export function useLanguageContext() {
    return useContext(LanguageContext);
}