import { PaletteOptions } from "@mui/material";

const bluePalette = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#2ab7f6",
  500: "#04aaf4",
  600: "#049ce5",
  700: "#0289d1", //main
  800: "#0278bd",
  900: "#01589b",
};

const orangePalette = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcd80",
  300: "#ffb84d",
  400: "#ffa826",
  500: "#ff9900", // main
  600: "#fb8d00",
  700: "#f57d00",
  800: "#ef6d00",
  900: "#e65200",
};

export const lightThemePalette: PaletteOptions = {
  primary: {
    main: bluePalette[700],
    contrastText: "#ffffff",
  },
  secondary: {
    main: orangePalette[500],
    contrastText: "#ffffff",
  },
  background: {
    default: "#e3f2fd",
    paper: "#ffffff",
  },
};

export const darkThemePalette: PaletteOptions = {
  primary: {
    main: bluePalette[500],
    contrastText: "#ffffff",
  },
  secondary: {
    main: orangePalette[500],
    contrastText: "#ffffff",
  },
  background: {
    default: "#2e3b4e",
    paper: "#37475a",
  },
};
