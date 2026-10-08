import type { FC, ReactNode } from "react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github";
import { LegalLinks } from "@/components/shared/legal-links";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { DISCUSSIONS_URL, ISSUES_URL, REPO_URL } from "@/lib/constants";

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const FOOTER_LINKS: Record<string, FooterLinkItem[]> = {
  Library: [
    { label: "Docs", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
    { label: "Playground", href: "/playground" },
  ],
  Platforms: [
    { label: "React", href: "/docs" },
    { label: "React Native", href: "/native" },
    { label: "Ink", href: "/ink" },
    { label: "Vue", href: "/docs/vue" },
  ],
  Extend: [
    { label: "Elements", href: "/elements" },
    { label: "Design", href: "/design" },
    { label: "Examples", href: "/examples" },
  ],
  Primitives: [
    { label: "tw-shimmer", href: "/tw-shimmer" },
    { label: "Heat Graph", href: "/heat-graph" },
    { label: "Safe Content Frame", href: "/safe-content-frame" },
    { label: "react-o11y", href: "/react-o11y" },
  ],
  Resources: [
    { label: "Open source", href: "/oss" },
    { label: "Packages", href: "/packages" },
    { label: "llms.txt", href: "/llms.txt" },
  ],
  Community: [
    { label: "GitHub", href: REPO_URL, external: true },
    { label: "Discussions", href: DISCUSSIONS_URL, external: true },
    { label: "Issues", href: ISSUES_URL, external: true },
    {
      label: "Contributing",
      href: `${REPO_URL}/blob/main/CONTRIBUTING.md`,
      external: true,
    },
  ],
};

export function Footer(): React.ReactElement {
  return (
    <footer className="rounded-page py-10 md:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-muted-foreground text-xs font-medium">
                {category}
              </p>
              {links.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  {...(link.external && { external: true })}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>

        <div className="text-muted-foreground flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <LegalLinks />
          <div className="flex flex-wrap items-center gap-1.5">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex size-7 items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-4" />
            </a>
            <ThemeToggle className="hover:text-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink: FC<{
  href: string;
  external?: boolean;
  children: ReactNode;
}> = ({ href, external, children }) => {
  const isExternal = external ?? href.startsWith("http");

  if (isExternal) {
    return (
      <a
        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
};
