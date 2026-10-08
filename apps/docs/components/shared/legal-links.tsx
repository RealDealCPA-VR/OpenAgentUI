import { REPO_URL } from "@/lib/constants";

const linkClassName = "hover:text-foreground transition-colors";

export function LegalLinks() {
  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <span>OpenAgentUI is free and open source.</span>
      <div className="flex items-center gap-2">
        <a
          href={`${REPO_URL}/blob/main/LICENSE`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          MIT License
        </a>
        <span aria-hidden>·</span>
        <a
          href={`${REPO_URL}/blob/main/NOTICE.md`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          Credits
        </a>
      </div>
    </div>
  );
}
