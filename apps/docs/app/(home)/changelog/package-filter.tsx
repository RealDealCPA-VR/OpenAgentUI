"use client";

import { useRouter } from "next/navigation";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  Select,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select";

const ALL = "__all__";

type PackageGroup = {
  label: string;
  packages: string[];
};

function groupPackages(packages: string[]): PackageGroup[] {
  const core: string[] = [];
  const integrations: string[] = [];
  const other: string[] = [];

  for (const pkg of packages) {
    if (
      pkg === "@openagentui/react" ||
      pkg === "@openagentui/core" ||
      pkg === "@openagentui/store" ||
      pkg === "@openagentui/tap" ||
      pkg === "@openagentui/styles" ||
      pkg === "@openagentui/ui" ||
      pkg === "openagentui-stream" ||
      pkg === "openagentui"
    ) {
      core.push(pkg);
    } else if (pkg.startsWith("@openagentui/react-")) {
      integrations.push(pkg);
    } else {
      other.push(pkg);
    }
  }

  const groups: PackageGroup[] = [];
  if (core.length > 0) groups.push({ label: "Core", packages: core });
  if (integrations.length > 0)
    groups.push({ label: "Integrations", packages: integrations });
  if (other.length > 0) groups.push({ label: "Other", packages: other });
  return groups;
}

export function PackageFilter({
  packages,
  value,
}: {
  packages: string[];
  value: string | undefined;
}) {
  const router = useRouter();
  const groups = groupPackages(packages);

  return (
    <Select
      value={value ?? ALL}
      onValueChange={(v) => {
        const nextValue = v ?? ALL;
        router.push(
          nextValue === ALL ? "/changelog" : `/changelog/${nextValue}`,
        );
      }}
      items={[
        { value: ALL, label: "All packages" },
        ...packages.map((pkg) => ({ value: pkg, label: pkg })),
      ]}
    >
      <SelectTrigger size="sm" className="w-56 font-mono text-xs">
        <span className="truncate">{value ?? "All packages"}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL}>All packages</SelectItem>
        {groups.map((group, i) => (
          <SelectGroup key={group.label}>
            {i > 0 && <SelectSeparator />}
            <SelectLabel>{group.label}</SelectLabel>
            {group.packages.map((pkg) => (
              <SelectItem key={pkg} value={pkg} className="font-mono text-xs">
                {pkg}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
