import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "openagentui Interactables Example",
  description:
    "Example using openagentui interactable components with a task board",
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
