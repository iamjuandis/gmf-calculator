"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, type ThemeMode } from "../styles/themes";
import { GlobalStyles } from "../styles/GlobalStyles";

const THEME_STORAGE_KEY = "gmf-theme-mode";

type ThemeModeContextValue = {
  mode: ThemeMode;
  setManualMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}

export default function ThemeModeProvider({
  children,
  initialMode,
}: {
  children: React.ReactNode;
  initialMode?: ThemeMode;
}) {
  const [mode, setMode] = useState<ThemeMode>(() => initialMode ?? "light");

  const setThemeCookie = useCallback((next: ThemeMode) => {
    // Ensure this only runs in the browser.
    if (typeof document === "undefined") return;

    const secureSuffix = window.location.protocol === "https:" ? "; Secure" : "";
    const maxAgeSeconds = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${THEME_STORAGE_KEY}=${next}; path=/; max-age=${maxAgeSeconds}; samesite=lax${secureSuffix}`;
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      return;
    }

    // If we got an SSR-provided initialMode from the cookie, treat it as the user's manual preference.
    if (initialMode === "light" || initialMode === "dark") {
      setMode(initialMode);
      setThemeCookie(initialMode);
      window.localStorage.setItem(THEME_STORAGE_KEY, initialMode);
      return;
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystemMode = () => setMode(mq.matches ? "dark" : "light");

    applySystemMode();

    const onChange = () => {
      // If the user has picked a manual override, stop following the OS.
      const manual = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (manual === "light" || manual === "dark") return;
      applySystemMode();
    };

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // Safari fallback
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, [initialMode, setThemeCookie]);

  const setManualMode = useCallback(
    (next: ThemeMode) => {
      setThemeCookie(next);
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      setMode(next);
    },
    [setThemeCookie]
  );

  const toggleMode = useCallback(() => {
    setManualMode(mode === "dark" ? "light" : "dark");
  }, [mode, setManualMode]);

  const theme = useMemo(() => {
    return mode === "dark" ? darkTheme : lightTheme;
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, setManualMode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

