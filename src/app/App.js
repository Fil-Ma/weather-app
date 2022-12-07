import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBody from "../components/PageBody";

export default function App() {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    function handleSelectLanguage(event) {
        event.preventDefault();
        const newLanguageSelection = event.target.value;

        // set language state variable
        setLanguage(newLanguageSelection);

        // set entry in local storage for future logins
        localStorage.setItem("language", newLanguageSelection)
    }

    return (
        <>
            <Header handleLanguageChange={handleSelectLanguage} />
            <PageBody />
            <Footer />
        </>
    )
}