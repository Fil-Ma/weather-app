import React, { useState } from "react";
import {
    AppBar,
    Typography,
    IconButton,
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

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';

import { useThemeContext } from "../contexts/ThemeContext";
import { useLanguageContext } from "../contexts/LanguageContext";
import { languageOptions } from "../contexts/languages";

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
        <AppBar sx={headerStyle} >
            <Typography>
                {dictionary.header.title}
            </Typography>

            <Toolbar>
                <Tooltip title={dictionary.header["language-icon-hover"]} arrow={true}>
                    <IconButton onClick={handleOpenLanguageDialog}>
                        <LanguageIcon />
                    </IconButton>
                </Tooltip>

                <Dialog 
                    open={isLanguageDialogOpen} 
                    fullWidth
                    maxWidth="xs"
                    onClose={handleCloseLanguageDialog}>
                        <DialogTitle >{dictionary.header["dialog-title"]}</DialogTitle>
                        <DialogContent>
                            <Box component="form" sx={{ display: 'flex' }}>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <InputLabel id="select-language-dialog">
                                        {
                                            dictionary.header["dialog-input-label"]
                                        }
                                    </InputLabel>
                                    <Select 
                                        labelId="select-language-dialog"
                                        value={language}
                                        onChange={changeUserLanguage}
                                        input={<OutlinedInput label="Language" />}
                                    >
                                        {
                                            Object.keys(languageOptions).map((languageKey, index) => {
                                                return (
                                                    <MenuItem value={languageKey} key={index}>
                                                        {languageOptions[languageKey]}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseLanguageDialog}>
                                {
                                    dictionary.header["dialog-cancel"]
                                }
                            </Button>
                            <Button onClick={handleCloseLanguageDialog}>
                                {
                                    dictionary.header["dialog-accept"]
                                }
                            </Button>
                        </DialogActions>
                </Dialog>

                <Tooltip title={dictionary.header["theme-icon-hover"]} arrow={true}>
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

