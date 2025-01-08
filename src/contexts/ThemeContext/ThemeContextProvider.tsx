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
import { lightTheme, darkTheme } from "./themes";

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
  }, []);

  const muiTheme = useMemo(() => {
    // return createTheme(theme === "light" ? lightTheme : darkTheme);
    return createTheme(lightTheme);
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
