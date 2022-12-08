import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBody from "../components/PageBody";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from "../contexts/themes";
import { useThemeContext } from "../contexts/ThemeContext";

export default function App() {
    const { theme } = useThemeContext();

    return (
        <>  
            <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
                <CssBaseline />
                <Header />
                <PageBody />
                <Footer />
            </ThemeProvider>
        </>
    )
}