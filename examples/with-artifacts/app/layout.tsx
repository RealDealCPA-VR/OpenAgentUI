import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "openagentui Artifacts Example",
  description: "Example using openagentui with HTML artifact rendering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh">{children}</body>
    </html>
  );
}
