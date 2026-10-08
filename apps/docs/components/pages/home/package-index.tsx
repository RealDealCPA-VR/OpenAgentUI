import Link from "next/link";
import {
  PACKAGE_CATEGORIES,
  PACKAGES,
  type PackageCategory,
} from "@/lib/traction";
import { packageSourceUrl } from "@/lib/package-source";

const ORDER: PackageCategory[] = [
  "core",
  "frameworks",
  "protocols",
  "platforms",
  "ui",
  "cloud",
  "tooling",
  "mcp",
  "observability",
  "effects",
];

export function PackageIndex() {
  const groups = ORDER.map((category) => ({
    category,
    ...PACKAGE_CATEGORIES[category],
    packages: PACKAGES.filter((pkg) => pkg.category === category),
  })).filter((group) => group.packages.length > 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="columns-1 gap-x-12 md:columns-2 xl:columns-3">
        {groups.map((group) => (
          <section
            key={group.category}
            aria-label={group.label}
            className="mb-8 break-inside-avoid"
          >
            <h3 className="text-sm font-medium">{group.label}</h3>
            <p className="text-muted-foreground mb-2 text-[13px]">
              {group.description}
            </p>
            <ul className="-mx-2 flex flex-col">
              {group.packages.map((pkg) => (
                <li key={pkg.name}>
                  <a
                    href={packageSourceUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-document hover:bg-foreground/[0.025] flex flex-col gap-0.5 px-2 py-1.5 transition-colors"
                  >
                    <span className="font-mono text-[12.5px] [font-variant-ligatures:none]">
                      {pkg.name}
                    </span>
                    <span className="text-muted-foreground text-[13px]">
                      {pkg.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Link
        href="/packages"
        className="text-muted-foreground hover:text-foreground font-mono text-[11px] transition-colors"
      >
        Package directory →
      </Link>
    </div>
  );
}
