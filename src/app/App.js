import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBody from "../components/PageBody";

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from "../contexts/themes";
import { useThemeContext } from "../contexts/ThemeContext";

export default function App() {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );
    const { theme } = useThemeContext();

    return (
        <>  
            <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
                <Header />
                <PageBody />
                <Footer />
            </ThemeProvider>
        </>
    )
}