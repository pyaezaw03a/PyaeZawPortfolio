import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyae Zaw | Portfolio",
  description:
    "Impact-focused digital marketing and technical writing portfolio for Pyae Zaw, featuring content, market analysis, AI, and creative work."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
