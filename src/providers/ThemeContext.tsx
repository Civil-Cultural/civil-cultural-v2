/* --- resources --- */
import { createContext, useContext, useEffect, useState } from "react";
import { useCookie } from "react-use";

/* ----------- TYPES ----------- */
import {
  CustomThemeContextProps,
  CustomThemeProviderProps,
  ThemeStateProps,
} from "Contracts/ThemeContext";

export const ThemeContext = createContext({} as CustomThemeContextProps);

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [cookieTheme, updateCookieTheme] = useCookie("civil_theme");
  const [theme, setTheme] = useState<ThemeStateProps>("dark");

  useEffect(() => {
    setTheme(cookieTheme as ThemeStateProps);
  }, []);

  const toggleTheme = (themeType: ThemeStateProps) => {
    setTheme(themeType);

    updateCookieTheme(themeType, {
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  };

  const themeProps: CustomThemeContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext)