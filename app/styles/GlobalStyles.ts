import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => theme.mode};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .page {
    min-height: 100dvh;
    padding: 1rem;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
  }

  .hero h1 {
    margin: 0;
    font-size: clamp(1.4rem, 5vw, 2rem);
    text-align: center;
  }

  .hero p {
    margin: 0.5rem 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .card {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radii.card};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    box-shadow: ${({ theme }) => theme.colors.cardShadow};
  }

  .field-grid {
    display: grid;
    gap: 0.75rem;
  }

  .field {
    display: grid;
    gap: 0.4rem;
  }

  .field--main {
    justify-items: center;
  }

  .field span {
    font-weight: 600;
  }

  .input-area {
    display: grid;
    justify-items: center;
    gap: 0.75rem;
  }

  .shortcut-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .shortcut-pill {
    border: 1px solid ${({ theme }) => theme.colors.shortcutPillBorder};
    background: ${({ theme }) => theme.colors.shortcutPillBg};
    color: ${({ theme }) => theme.colors.shortcutPillText};
    font-weight: 700;
    padding: 0.45rem 0.85rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: transform 120ms ease, background-color 120ms ease, border-color 120ms ease;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .shortcut-pill:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.shortcutPillHoverBg};
    border-color: ${({ theme }) => theme.colors.shortcutPillHoverBorder};
  }

  .shortcut-pill:active {
    transform: translateY(0);
  }

  .shortcut-pill:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusOutline};
    outline-offset: 2px;
  }

  .cases-title {
    margin: 0 0 0.75rem;
    font-size: 1.15rem;
  }

  .results-grid {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr;
  }

  .result p {
    margin: 0.2rem 0;
  }

  .highlight {
    margin-top: 0.45rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.highlight};
  }

  .value-pill {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    background: ${({ theme }) => theme.colors.pillBg};
    border-radius: ${({ theme }) => theme.radii.pill};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.pillText};
  }

  .value-pill.value-pill--green {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(52, 211, 153, 0.28)" : "rgba(11, 110, 79, 0.22)"};
    color: ${({ theme }) => theme.colors.highlight};
  }

  .result-collapsed {
    padding: 0;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.resultCollapsed};
  }

  .result-collapsed summary {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    padding: 1rem;
    font-weight: 600;
    min-height: 72px;
  }

  .result-collapsed summary:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusBorder};
    outline-offset: 2px;
    border-radius: 16px;
  }

  .summary-title {
    min-width: 0;
  }

  .summary-trailing {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .result-collapsed summary .chevron-icon {
    flex-shrink: 0;
    transition: transform 0.2s ease;
    color: ${({ theme }) => theme.colors.iconMuted};
  }

  .result-collapsed[open] summary .chevron-icon {
    transform: rotate(180deg);
  }

  .result-body {
    padding: 0 1rem 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  .result-collapsed .result-body {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transform: translateY(-4px);
    overflow: hidden;
    padding-top: 0;
    border-top-color: transparent;
    transition:
      grid-template-rows 240ms ease,
      opacity 180ms ease,
      transform 200ms ease,
      padding-top 240ms ease,
      border-top-color 180ms ease;
  }

  .result-collapsed[open] .result-body {
    opacity: 1;
    transform: translateY(0);
    grid-template-rows: 1fr;
    border-top-color: ${({ theme }) => theme.colors.divider};
    padding-top: 0.75rem;
  }

  .main-input {
    width: min(100%, 560px);
    border: none;
    border-radius: 14px;
    background: transparent;
    padding: 0.4rem 0.7rem;
    font-size: clamp(48px, 7vw, 3.8rem);
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: text;
    caret-color: ${({ theme }) => theme.colors.textPrimary};
    transition: box-shadow 150ms ease, background-color 150ms ease;
  }

  .main-input:focus-visible {
    outline: none;
    background: ${({ theme }) => theme.colors.focusBg};
    box-shadow: none;
  }

  .gmf-info-trigger {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;
    font: inherit;
    padding: 0;
    justify-self: start;
    cursor: pointer;
  }

  .gmf-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.95rem;
    width: 100%;
    text-align: center;
  }

  .gmf-footer-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    width: 100%;
  }

  .gmf-footer-theme {
    display: flex;
    justify-content: center;
    width: auto;
    flex: 0 0 auto;
  }

  .gmf-share {
    display: flex;
    width: auto;
    flex: 0 0 auto;
  }

  .gmf-footer-sep {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .gmf-footer-text {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .gmf-footer-link {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;
  }

  .gmf-footer-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 16px;
    width: 100%;
  }

  .share-toast {
    position: fixed;
    left: 50%;
    bottom: 1.1rem;
    transform: translateX(-50%);
    background: rgba(20, 33, 61, 0.92);
    color: #ffffff;
    padding: 0.55rem 0.85rem;
    border-radius: 12px;
    font-weight: 700;
    z-index: 60;
    box-shadow: 0 8px 20px rgba(20, 33, 61, 0.15);
    animation: toastIn 180ms ease-out both;
    text-align: center;
    max-width: calc(100vw - 2rem);
  }

  @keyframes toastIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  .sheet-overlay {
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.colors.overlayBg};
    display: grid;
    align-items: end;
    justify-items: center;
    z-index: 20;
    animation: sheetOverlayIn 180ms ease-out both;
    will-change: opacity;
  }

  .sheet {
    background: ${({ theme }) => theme.colors.sheetBackground};
    width: 100%;
    border-radius: 24px 24px 0 0;
    padding: 1rem 1rem 1.2rem;
    max-height: 75vh;
    overflow: auto;
    will-change: transform, opacity;
    animation: sheetIn 220ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
  }

  .sheet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
  }

  .sheet-header h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  .sheet-content p {
    margin: 0 0 0.7rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  @keyframes sheetOverlayIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes sheetIn {
    from {
      opacity: 0;
      transform: translateY(48px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 720px) {
    .page {
      padding: 2rem;
    }

    .sheet-overlay {
      align-items: center;
    }

    .sheet {
      max-width: 760px;
      width: 100%;
      margin: 0 auto;
      border-radius: 24px;
    }
  }
`;

