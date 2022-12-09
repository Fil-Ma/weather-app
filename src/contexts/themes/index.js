import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: '#43a047',
            contrastText: '#FFF'
        },
        background: {
            default: '#eeffee',
            paper: '#eeffee'
        },
    }
});

export const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#66bb6a",
            contrastText: '#FFF'
        },
        background: {
            default: '#303030',
            paper: '#424242'
        },
    }
});