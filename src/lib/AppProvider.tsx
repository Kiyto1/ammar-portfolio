import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AppContext, type Theme } from "./app-context";
import { dictionaries, type Lang } from "./translations";

const read = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage can be blocked; the choice just won't persist */
  }
};

// Arabic unless the visitor chose English before.
const initialLang = (): Lang => (read("lang") === "en" ? "en" : "ar");

// Light unless the visitor chose dark before.
const initialTheme = (): Theme => (read("theme") === "dark" ? "dark" : "light");

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Keep <html> in sync: language, direction and theme class.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.classList.toggle("light", theme === "light");
    document.title = dictionaries[lang].pageTitle;
  }, [lang, theme]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      write("lang", next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      write("theme", next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, toggleLang, t: dictionaries[lang], theme, toggleTheme }),
    [lang, toggleLang, theme, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
