import React from "react";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

// component style 
const headerStyle = {
    display: "flex", 
    backgroundColor: "red",
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
export default function Header({ handleLanguageChange }) {

    return (
        <AppBar sx={headerStyle} >
            <Typography>This is the header</Typography>
            <Box>
                <Button sx={{ color: "#FFF" }}>Language</Button>
                <Button sx={{ color: "#FFF" }}>Theme</Button>
            </Box>
        </AppBar>
    )
}

