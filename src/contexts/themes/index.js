import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: '#43a047',
            contrastText: '#000'
        },
        background: {
            default: '#eeffee',
            paper: '#fff'
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif'
        ]
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
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif'
        ]
    }
});