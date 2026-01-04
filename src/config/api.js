export const API_BASE = (import.meta.env?.VITE_API_BASE || "http://localhost:3000").replace(/\/$/, "");

export function buildApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
}

export function buildAssetUrl(path = "") {
  if (!path) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
}
