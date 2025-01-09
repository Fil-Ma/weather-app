import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ApplicationTheme, IThemeContext } from "./types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightThemePalette, darkThemePalette } from "./themes";

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => undefined,
});

const getLocalTheme = (): ApplicationTheme => {
  const localTheme = localStorage.getItem("theme");

  if (localTheme === "dark") {
    return "dark";
  } else {
    return "light";
  }
};

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ApplicationTheme>(getLocalTheme);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const muiTheme = useMemo(() => {
    return createTheme({
      palette: theme === "light" ? lightThemePalette : darkThemePalette,
      typography: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
      },
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
