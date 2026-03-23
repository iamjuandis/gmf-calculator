import "styled-components";

declare module "styled-components" {
  // This is intentionally broad while we migrate files. We will tighten types as
  // the token system is introduced.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: Record<string, string>;
    radii: Record<string, string>;
    shadows: Record<string, string>;
    space: Record<string, string>;
    typography: Record<string, string>;
  }
}

