import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// import CopyrightIcon from "@mui/icons-material/Copyright";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";

// footer style
const footerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "4rem",
  pl: "4rem",
  pr: "5.5rem",
  width: "100%",
  color: "primary.contrastText",
};

const socialLinkStyle = {
  underline: "none",
  ml: "1rem",
  color: "primary.contrastText",
};

/*
    HEADER COMPONENT
*/
export default function Footer() {
  return (
    <Box component="footer" sx={footerStyle}>
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
  );
}
