export type ApplicationTheme = "light" | "dark";

export interface IThemeContext {
  theme: ApplicationTheme;
  toggleTheme: VoidFunction;
}
