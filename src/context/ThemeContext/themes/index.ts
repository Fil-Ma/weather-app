export const lightTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#43a047",
      contrastText: "#000",
    },
    headerButton: {
      main: "rgba(0, 0, 0, 0.54)",
    },
    background: {
      default: "#eeffee",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
};

export const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#66bb6a",
      contrastText: "#FFF",
    },
    positionHoverButton: {
      main: "",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
};
