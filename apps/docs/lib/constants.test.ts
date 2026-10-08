import { DISCUSSIONS_URL, NAV_ITEMS, REPO_URL } from "./constants";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("NAV_ITEMS", () => {
  it("opens with Docs and ends with the Components gallery", () => {
    expect(NAV_ITEMS[0]).toEqual({
      type: "link",
      label: "Docs",
      href: "/docs",
    });
    expect(NAV_ITEMS.at(-1)).toEqual({
      type: "link",
      label: "Components",
      href: "/elements",
    });
  });

  it("never links a removed commercial page", () => {
    const hrefs = NAV_ITEMS.flatMap((item) =>
      item.type === "link"
        ? [item.href]
        : [
            ...(item.featured
              ? [
                  item.featured.item.href,
                  ...(item.featured.extraItems ?? []).map((i) => i.href),
                ]
              : []),
            ...item.groups.flatMap((group) => group.items.map((i) => i.href)),
          ],
    );
    for (const removed of [
      "/pricing",
      "/blog",
      "/careers",
      "/brand",
      "/traction",
      "/showcase",
      "/components",
    ]) {
      expect(hrefs).not.toContain(removed);
    }
    expect(hrefs.some((href) => href.includes("assistant-ui.com"))).toBe(false);
  });

  it("ships only existing products", () => {
    const products = NAV_ITEMS.find(
      (item) => item.type === "mega" && item.label === "Products",
    );
    expect(products?.type).toBe("mega");
    if (products?.type !== "mega") return;

    expect(products.featured?.label).toBe("Extend");
    expect(products.featured?.item.label).toBe("Elements");
    expect(products.featured?.extraItems?.map((item) => item.label)).toEqual([
      "Design",
    ]);

    expect(products.groups.map((group) => group.label)).toEqual([
      "Platforms",
      "Try",
      "Primitives",
    ]);
    expect(
      products.groups.flatMap((group) => group.items.map((item) => item.label)),
    ).toEqual([
      "React",
      "React Native",
      "Ink",
      "Vue",
      "Playground",
      "tw-shimmer",
      "Heat Graph",
      "Safe Content Frame",
      "react-o11y",
    ]);
  });

  it("points Resources at learning material and the community", () => {
    const resources = NAV_ITEMS.find(
      (item) => item.type === "mega" && item.label === "Resources",
    );
    if (resources?.type !== "mega")
      throw new Error("Resources is not a mega item");

    expect(resources.groups.map((group) => group.label)).toEqual([
      "Learn",
      "Community",
    ]);
    const community = resources.groups.find(
      (group) => group.label === "Community",
    );
    expect(community?.items.map((item) => item.href)).toEqual([
      REPO_URL,
      DISCUSSIONS_URL,
      `${REPO_URL}/blob/main/CONTRIBUTING.md`,
    ]);
    expect(community?.items.every((item) => item.external)).toBe(true);
  });
});
