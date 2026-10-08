import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "openagentui × Pi",
  description: "Pi coding-agent runtime adapter for openagentui",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-dvh">
      <body className="h-dvh overflow-hidden">{children}</body>
    </html>
  );
}
