export const RENDERER_PATH = "/renderer";

/** Origins allowed to embed `/renderer`, from a comma-separated `NEXT_PUBLIC_RENDERER_ALLOWED_ORIGINS`. */
export const RENDERER_ALLOWED_ORIGINS = [
  ...(process.env.NEXT_PUBLIC_RENDERER_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3001"] : []),
];
