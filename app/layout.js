import "./globals.css";

export const metadata = {
  title: "Calculadora GMF",
  description: "Calculadora de escenarios del 4x1000 (GMF) en Colombia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
