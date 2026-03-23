import type { AppTheme, ThemeMode } from "./tokens";

export type { ThemeMode };

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    pageBackground: "#f6f8fb",
    textPrimary: "#14213d",
    textMuted: "#33415c",
    surface: "#ffffff",
    cardBorder: "#e7edf4",
    cardShadow: "0 2px 10px rgba(20, 33, 61, 0.04)",
    inputBorder: "#c8d2e1",
    focusOutline: "#b7cdfd",
    focusBorder: "#6a8fde",
    focusBg: "rgba(106, 143, 222, 0.07)",
    divider: "#eef3f9",
    highlight: "#0b6e4f",
    pillBg: "rgba(53, 81, 136, 0.12)",
    pillText: "#1e3a5f",
    link: "#355188",
    overlayBg: "rgba(0, 0, 0, 0.28)",
    sheetBorder: "#d4dde9",
    sheetBackground: "#ffffff",
    sheetCloseBg: "#f8fafc",
    sheetCloseBorder: "#d4dde9",
    textEquals: "#a8b4c4",
    iconMuted: "#5b6880",

    shortcutPillBg: "rgba(53, 81, 136, 0.08)",
    shortcutPillBorder: "rgba(53, 81, 136, 0.32)",
    shortcutPillHoverBg: "rgba(53, 81, 136, 0.12)",
    shortcutPillHoverBorder: "rgba(53, 81, 136, 0.5)",
    shortcutPillText: "#1e3a5f",
  },
  radii: {
    card: "12px",
    input: "10px",
    pill: "8px",
    sheet: "18px",
    sheetClose: "999px",
    resultCollapsed: "24px",
    shortcutPill: "9999px",
  },
  shadows: {},
  space: {},
  typography: {
    fontFamily:
      '"SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, sans-serif',
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    pageBackground: "#0b1220",
    textPrimary: "#e5e7eb",
    textMuted: "#94a3b8",
    surface: "#0f172a",
    cardBorder: "#1f2937",
    cardShadow: "0 2px 14px rgba(0, 0, 0, 0.35)",
    inputBorder: "#334155",
    focusOutline: "rgba(96, 165, 250, 0.55)",
    focusBorder: "#60a5fa",
    focusBg: "rgba(96, 165, 250, 0.14)",
    divider: "#1f2a3c",
    highlight: "#34d399",
    pillBg: "rgba(59, 130, 246, 0.16)",
    pillText: "#bfdbfe",
    link: "#60a5fa",
    overlayBg: "rgba(0, 0, 0, 0.6)",
    sheetBorder: "#334155",
    sheetBackground: "#0f172a",
    sheetCloseBg: "#111827",
    sheetCloseBorder: "#334155",
    textEquals: "#64748b",
    iconMuted: "#94a3b8",

    shortcutPillBg: "rgba(96, 165, 250, 0.10)",
    shortcutPillBorder: "rgba(96, 165, 250, 0.28)",
    shortcutPillHoverBg: "rgba(96, 165, 250, 0.16)",
    shortcutPillHoverBorder: "rgba(96, 165, 250, 0.42)",
    shortcutPillText: "#bfdbfe",
  },
  radii: {
    card: "12px",
    input: "10px",
    pill: "8px",
    sheet: "18px",
    sheetClose: "999px",
    resultCollapsed: "24px",
    shortcutPill: "9999px",
  },
  shadows: {},
  space: {},
  typography: {
    fontFamily:
      '"SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, sans-serif',
  },
};

