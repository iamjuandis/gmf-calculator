"use client";

import { Moon, Sun } from "react-feather";
import styled from "styled-components";
import { useThemeMode } from "../theme/ThemeModeProvider";

const ToggleButton = styled.button<{ $variant: "fixed" | "inline" }>`
  position: ${({ $variant }) => ($variant === "inline" ? "relative" : "fixed")};
  bottom: ${({ $variant }) => ($variant === "inline" ? "auto" : "1rem")};
  right: ${({ $variant }) => ($variant === "inline" ? "auto" : "0.75rem")};
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.link};
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 30;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(96, 165, 250, 0.12)" : "rgba(53, 81, 136, 0.08)"};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusOutline};
    outline-offset: 2px;
  }
`;

export default function ThemeToggle({
  variant = "fixed",
}: {
  variant?: "fixed" | "inline";
}) {
  const { mode, toggleMode } = useThemeMode();

  const icon =
    mode === "dark" ? <Sun size={24} aria-hidden /> : <Moon size={24} aria-hidden />;

  return (
    <ToggleButton
      type="button"
      $variant={variant}
      className="theme-toggle"
      onClick={toggleMode}
      aria-label={mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={mode === "dark" ? "Modo claro" : "Modo oscuro"}
    >
      {icon}
    </ToggleButton>
  );
}

