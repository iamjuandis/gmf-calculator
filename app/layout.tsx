import type { Metadata } from "next";
import { cookies } from "next/headers";
import ThemeModeProvider from "./theme/ThemeModeProvider";
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Calculadora GMF",
  description: "Calculadora de escenarios del 4x1000 (GMF) en Colombia.",
};

const THEME_COOKIE_KEY = "gmf-theme-mode";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_KEY)?.value;
  const initialMode =
    themeCookie === "light" || themeCookie === "dark" ? themeCookie : undefined;

  return (
    <html lang="es-CO">
      <body>
        <StyledComponentsRegistry>
          <ThemeModeProvider initialMode={initialMode}>
            {children}
          </ThemeModeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

