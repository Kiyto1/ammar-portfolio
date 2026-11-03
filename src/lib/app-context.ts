import { createContext, useContext } from "react";
import type { Dict, Lang } from "./translations";

export type Theme = "dark" | "light";

export type AppContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: Dict;
  theme: Theme;
  toggleTheme: () => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
};
