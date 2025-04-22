"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar/>
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
