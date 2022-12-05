import React from "react";
import Button from "@mui/material/Button";

export default function Header() {
    
    function handleClickLogin() {

    }

    function handleClickRegister() {

    }

    return (
        <header>
            <div className="logo">
                Logo
            </div>

            <Button 
                variant="outlined"
                onClick={handleClickLogin}
            >Login</Button>

            <Button 
                variant="contained"
                onClick={handleClickRegister}
            >Register</Button>
        </header>
    )
}