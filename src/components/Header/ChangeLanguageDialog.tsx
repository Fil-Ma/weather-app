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
  styled,
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
    <StyledDialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>{dictionary.header["dialog-title"]}</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex" }}>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="select-language-dialog">
              {dictionary.header["dialog-input-label"]}
            </InputLabel>
            <Select
              labelId="select-language-dialog"
              value={language}
              onChange={(event) => changeUserLanguage(event)}
              input={<OutlinedInput label="Language" />}
              sx={{
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
          <Button key={label} onClick={onClose} color="primary">
            {label}
          </Button>
        ))}
      </DialogActions>
    </StyledDialog>
  );
};

export default ChangeLanguageDialog;

const StyledDialog = styled(Dialog)(({ theme }) => ({
  ".MuiDialog-container > *": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.contrastText,
  },
}));
