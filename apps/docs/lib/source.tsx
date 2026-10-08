import type { InferPageType, LoaderPlugin } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import {
  docs,
  examples as examplePages,
  design as designPages,
  elements as elementsMdx,
} from "fumadocs-mdx:collections/server";

/**
 * Propagates `platforms` from meta.json / page frontmatter onto the page tree
 * folder/page nodes so the docs sidebar can filter sections by selected
 * platform. Without this plugin custom meta fields are dropped when the page
 * tree is built (only `description`, `icon`, etc. are mapped natively).
 */
function platformsPlugin(): LoaderPlugin {
  return {
    name: "platforms",
    transformPageTree: {
      folder(node, _folderPath, metaPath) {
        if (!metaPath) return node;
        const file = this.storage.read(metaPath);
        if (file?.format !== "meta") return node;
        const platforms = (file.data as { platforms?: string[] }).platforms;
        if (platforms) (node as { platforms?: string[] }).platforms = platforms;
        return node;
      },
      file(node, filePath) {
        if (!filePath) return node;
        const file = this.storage.read(filePath);
        if (file?.format !== "page") return node;
        const platforms = (file.data as { platforms?: string[] }).platforms;
        if (platforms) (node as { platforms?: string[] }).platforms = platforms;
        return node;
      },
    },
  };
}

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin(), platformsPlugin()],
});

export const examples = loader({
  baseUrl: "/examples",
  source: toFumadocsSource(examplePages, []),
});

export type ExamplePage = InferPageType<typeof examples>;

export const elementsDocs = loader({
  baseUrl: "/elements",
  source: toFumadocsSource(elementsMdx, []),
});

export type ElementsDocsPage = InferPageType<typeof elementsDocs>;

export const design = loader({
  baseUrl: "/design",
  source: toFumadocsSource(designPages, []),
});

export type DesignPage = InferPageType<typeof design>;
