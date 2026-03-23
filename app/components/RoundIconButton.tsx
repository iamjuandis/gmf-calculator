"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
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

export default function RoundIconButton({
  ariaLabel,
  title,
  onClick,
  children,
}: {
  ariaLabel: string;
  title?: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Button type="button" onClick={onClick} aria-label={ariaLabel} title={title}>
      {children}
    </Button>
  );
}

