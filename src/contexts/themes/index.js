import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#FFA500"
      }
    }
});

export const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#E97451"
      }
    }
});