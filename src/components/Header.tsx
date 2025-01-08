import { useState } from "react";
import {
  AppBar,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Toolbar,
  Tooltip,
} from "@mui/material";

import LanguageIcon from "@assets/icons/language.svg?react";
import LightModeIcon from "@assets/icons/sun.svg?react";
import DarkModeIcon from "@assets/icons/moon.svg?react";

import { useThemeContext } from "@contexts/ThemeContext/ThemeContextProvider";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { languageOptions } from "@contexts/LanguageContext/languages";
import { TUserLanguage } from "@contexts/LanguageContext/types";

// component style
const headerStyle = {
  display: "flex",
  position: "relative",
  height: "4rem",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  px: "4rem",
};

/*
    HEADER COMPONENT
*/
export default function Header() {
  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);

  const { theme, toggleTheme } = useThemeContext();
  const { language, dictionary, changeUserLanguage } = useLanguageContext();

  // handle opening of language dialog
  function handleOpenLanguageDialog() {
    setIsLanguageDialogOpen(true);
  }

  // handle closing of language dialog
  function handleCloseLanguageDialog() {
    setIsLanguageDialogOpen(false);
  }

  return (
    <AppBar sx={headerStyle}>
      <Typography sx={{ backgroundColor: "primary.main", color: "#FFF" }}>
        {dictionary.header.title}
      </Typography>

      <Toolbar>
        <Dialog
          open={isLanguageDialogOpen}
          fullWidth
          maxWidth="xs"
          onClose={handleCloseLanguageDialog}
        >
          <DialogTitle sx={{ color: "primary.contrastText" }}>
            {dictionary.header["dialog-title"]}
          </DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex" }}>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel
                  id="select-language-dialog"
                  sx={{ color: "primary.contrastText" }}
                >
                  {dictionary.header["dialog-input-label"]}
                </InputLabel>
                <Select
                  labelId="select-language-dialog"
                  value={language}
                  onChange={(event) => changeUserLanguage(event)}
                  input={<OutlinedInput label="Language" />}
                  sx={{
                    color: "primary.contrastText",
                    borderColor: "primary.contrastText",
                  }}
                >
                  {Object.keys(languageOptions).map((languageKey, index) => {
                    return (
                      <MenuItem
                        value={languageKey}
                        sx={{
                          color: "primary.contrastText",
                        }}
                        key={index}
                      >
                        {languageOptions[languageKey as TUserLanguage]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLanguageDialog}>
              {dictionary.header["dialog-cancel"]}
            </Button>
            <Button onClick={handleCloseLanguageDialog}>
              {dictionary.header["dialog-accept"]}
            </Button>
          </DialogActions>
        </Dialog>

        <Tooltip title={dictionary.header["language-icon-hover"]} arrow={true}>
          <Button
            onClick={handleOpenLanguageDialog}
            sx={{
              color: "headerButton.main",
              fontWeight: "bold",
            }}
          >
            <LanguageIcon />
          </Button>
        </Tooltip>

        <Tooltip title={dictionary.header["theme-icon-hover"]} arrow={true}>
          <Button
            onClick={toggleTheme}
            sx={{
              color: "headerButton.main",
              fontWeight: "bold",
              ml: "1rem",
            }}
          >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
