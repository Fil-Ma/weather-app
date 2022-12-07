import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

// footer style 
const footerStyle = {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    height: "4rem",
    px: "4rem",
    width: "calc(100% - 8rem)"
}

const socialLinkStyle = {
    underline: "none",
    ml: "1rem",
    color: "#000"
}

/*
    HEADER COMPONENT
*/
export default function Footer() {

    return (
        <Box component="footer" sx={footerStyle} >
            <Typography>
                <CopyrightIcon sx={{ fontSize: "medium" }} /> All right reserved
            </Typography>

            <Box className="social-container">
                <Link href="#" underline="none" sx={socialLinkStyle}>
                    <TwitterIcon />
                </Link>

                <Link href="#" underline="none" sx={socialLinkStyle}>
                    <InstagramIcon />
                </Link>

                <Link href="#" underline="none" sx={socialLinkStyle}>
                    <FacebookIcon />
                </Link>
            </Box>
        </Box>
    )
}