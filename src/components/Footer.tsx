import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import FacebookIcon from "@assets/icons/facebook.svg?react";
import { styled } from "@mui/material";

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

export default function Footer() {
  return (
    <StyledFooter>
      <Typography color="textPrimary">&#169; All right reserved</Typography>

      <Box>
        {socialLinks.map(({ url, Icon }, index) => (
          <Link key={index} href={url} underline="none" color="textPrimary">
            <Icon />
          </Link>
        ))}
      </Box>
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "4rem",
  paddingInline: "4rem",

  div: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
