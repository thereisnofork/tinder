"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const theme = createTheme({
  direction: "rtl",
});

const RtlThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <AppRouterCacheProvider
    options={{ stylisPlugins: [prefixer, rtlPlugin], key: "muirtl" }}
    key="muirtl"
  >
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppRouterCacheProvider>
);

export { RtlThemeProvider };
