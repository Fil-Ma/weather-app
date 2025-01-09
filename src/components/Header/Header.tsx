import { useState } from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
import { useThemeContext } from "@contexts/ThemeContext/ThemeContextProvider";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import ChangeLanguageDialog from "./ChangeLanguageDialog";
import LanguageIcon from "@assets/icons/language.svg?react";
import LightModeIcon from "@assets/icons/sun.svg?react";
import DarkModeIcon from "@assets/icons/moon.svg?react";

export default function Header() {
  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);

  const { theme, toggleTheme } = useThemeContext();
  const { dictionary } = useLanguageContext();

  // handle opening of language dialog
  function handleOpenLanguageDialog() {
    setIsLanguageDialogOpen(true);
  }

  // handle closing of language dialog
  function handleCloseLanguageDialog() {
    setIsLanguageDialogOpen(false);
  }

  const actions = [
    {
      tooltipTitle: dictionary.header["language-icon-hover"],
      onClick: handleOpenLanguageDialog,
      Icon: LanguageIcon,
    },
    {
      tooltipTitle: dictionary.header["theme-icon-hover"],
      onClick: toggleTheme,
      Icon: theme === "light" ? DarkModeIcon : LightModeIcon,
    },
  ];

  return (
    <CustomAppBar>
      <Typography sx={{ backgroundColor: "primary.main", color: "#FFF" }}>
        {dictionary.header.title}
      </Typography>

      <Toolbar>
        <ChangeLanguageDialog
          open={isLanguageDialogOpen}
          onClose={handleCloseLanguageDialog}
        />
        {actions.map(({ tooltipTitle, onClick, Icon }) => (
          <Tooltip key={tooltipTitle} title={tooltipTitle} arrow={true}>
            <Button
              onClick={onClick}
              sx={{
                color: "primary.contrastText",
                fontWeight: "bold",
              }}
            >
              <Icon />
            </Button>
          </Tooltip>
        ))}
      </Toolbar>
    </CustomAppBar>
  );
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  position: "relative",
  height: "4rem",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "4rem",

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
