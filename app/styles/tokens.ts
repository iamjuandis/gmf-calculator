export type ThemeMode = "light" | "dark";

export type AppTheme = {
  mode: ThemeMode;
  colors: {
    pageBackground: string;
    textPrimary: string;
    textMuted: string;
    surface: string;
    cardBorder: string;
    cardShadow: string;
    inputBorder: string;
    focusOutline: string;
    focusBorder: string;
    focusBg: string;
    divider: string;
    highlight: string;
    pillBg: string;
    pillText: string;
    link: string;
    overlayBg: string;
    sheetBorder: string;
    sheetBackground: string;
    sheetCloseBg: string;
    sheetCloseBorder: string;
    textEquals: string;
    iconMuted: string;

    shortcutPillBg: string;
    shortcutPillBorder: string;
    shortcutPillHoverBg: string;
    shortcutPillHoverBorder: string;
    shortcutPillText: string;
  };
  radii: {
    card: string;
    input: string;
    pill: string;
    shortcutPill: string;
    sheet: string;
    sheetClose: string;
    resultCollapsed: string;
  };
  shadows: Record<string, string>;
  space: Record<string, string>;
  typography: Record<string, string>;
};

