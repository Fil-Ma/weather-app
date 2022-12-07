import React from "react";
import {
    AppBar,
    Typography,
    Button,
    IconButton,
    Toolbar,
    Tooltip, 
} from "@mui/material";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useThemeContext } from "../contexts/ThemeContext";
import { useLanguageContext } from "../contexts/LanguageContext";

// component style 
const headerStyle = {
    display: "flex", 
    position: "relative",
    height: "4rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    px: "4rem"
}

/*
    HEADER COMPONENT
*/
export default function Header() {
    const { theme, toggleTheme } = useThemeContext();
    const { language, changeLanguage } = useLanguageContext();

    return (
        <AppBar sx={headerStyle} >
            <Typography sx={{ color: "#FFF" }}>This is the header</Typography>

            <Toolbar>
                <Button 
                    sx={{ color: "#FFF" }} 
                >Language</Button>

                <Tooltip title="Change Theme" arrow={true}>
                    <IconButton onClick={toggleTheme}>
                        { 
                            theme === "light"
                                ? <DarkModeIcon />
                                : <LightModeIcon />
                        }
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

