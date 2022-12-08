import React, { createContext, useContext, useState } from "react";
import { dictionaryList } from "./languages";

// language context
const LanguageContext = createContext();

// function context provider
export default function LanguageContextProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    function changeLanguage(event) {
        const newLanguage = event.target.value;
        setUserLanguage(newLanguage)
        localStorage.setItem("language", newLanguage)
    }

    const provider = {
        language: userLanguage,
        dictionary: dictionaryList[userLanguage],
        changeUserLanguage: changeLanguage
    }

    return (
        <LanguageContext.Provider value={provider}>
            { children }
        </LanguageContext.Provider>
    )
}

// custom theme context hook
export function useLanguageContext() {
    return useContext(LanguageContext);
}