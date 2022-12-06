import React, { useState, useEffect } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageBody from "../components/page-body/PageBody";

export default function App() {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    return (
        <>
            <Header />
            <PageBody />
            <Footer />
        </>
    )
}