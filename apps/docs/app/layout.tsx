import "@/styles/globals.css";
import type { ReactNode } from "react";
import { JetBrains_Mono, Public_Sans } from "next/font/google";
import { Provider } from "./provider";
import { SiteAssistant } from "@/components/pages/docs/assistant/site-assistant";
import { cn } from "@/lib/utils";
import { BASE_URL } from "@/lib/constants";
import { GenerativeUIStyle } from "@/components/generative-ui-style";
import { galleryStagingCss } from "@/components/gallery/gallery-staging";
import { AnalyticsGate } from "@/components/analytics-gate";
import { ConsentBanner } from "@/components/consent-banner";
import { OutsideRenderer } from "@/components/outside-renderer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const getMetadataBase = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrl) {
    return new URL(appUrl);
  }

  if (process.env.NODE_ENV === "production") {
    return new URL(BASE_URL);
  }
  return new URL("http://localhost:3000");
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: getMetadataBase(),
  alternates: { canonical: "./" },
  title: {
    template: "%s · OpenAgentUI",
    default: "OpenAgentUI · Open-source UI for AI agents",
  },
  description:
    "Open-source React components and runtimes for building AI chat. Streaming, tools, and persistence in TypeScript.",
  openGraph: {
    title: "OpenAgentUI",
    description:
      "Open-source React components and runtimes for building AI chat. Streaming, tools, and persistence in TypeScript.",
    siteName: "OpenAgentUI",
    type: "website",
    images: [
      {
        url: "/api/og?variant=home",
        width: 1200,
        height: 630,
        alt: "OpenAgentUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAgentUI",
    description:
      "Open-source React components and runtimes for building AI chat. Streaming, tools, and persistence in TypeScript.",
    images: ["/api/og?variant=home"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GenerativeUIStyle />
        <style>{galleryStagingCss}</style>
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          publicSans.variable,
          jetbrainsMono.variable,
        )}
      >
        <div aria-hidden="true" className="sr-only">
          For AI agents: a documentation index is available at{" "}
          <a href="/llms.txt" tabIndex={-1}>
            llms.txt
          </a>
          . Use .md for canonical markdown pages; .mdx is kept as a
          backwards-compatible alias on supported URL paths.
        </div>
        <Provider>
          <SiteAssistant>{children}</SiteAssistant>
        </Provider>
        <OutsideRenderer>
          <AnalyticsGate />
          <ConsentBanner />
        </OutsideRenderer>
      </body>
    </html>
  );
}
