import { useCallback } from "react";
import {
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
} from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { languageOptions } from "@contexts/LanguageContext/languages";
import { TUserLanguage } from "@contexts/LanguageContext/types";

const ChangeLanguageDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  const { language, dictionary, changeUserLanguage } = useLanguageContext();

  const renderOptions = useCallback((languageKey: string, index: number) => {
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
  }, []);

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
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
              {Object.keys(languageOptions).map(renderOptions)}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        {[
          dictionary.header["dialog-cancel"],
          dictionary.header["dialog-accept"],
        ].map((label) => (
          <Button key={label} onClick={onClose}>
            {label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ChangeLanguageDialog;
