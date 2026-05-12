/**
 * Prefix for files under `public/` when the site is served from a subpath
 * (e.g. GitHub Pages: https://user.github.io/Panago/).
 */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
