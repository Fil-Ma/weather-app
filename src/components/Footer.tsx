import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import FacebookIcon from "@assets/icons/facebook.svg?react";

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

const socialLinks = [
  {
    url: "#",
    Icon: TwitterIcon,
  },
  {
    url: "#",
    Icon: InstagramIcon,
  },
  {
    url: "#",
    Icon: FacebookIcon,
  },
];

/*
    HEADER COMPONENT
*/
export default function Footer() {
  return (
    <Box component="footer" sx={footerStyle}>
      <Typography>&#169; All right reserved</Typography>

      <Box className="social-container">
        {socialLinks.map(({ url, Icon }, index) => (
          <Link key={index} href={url} underline="none" sx={socialLinkStyle}>
            <Icon />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
