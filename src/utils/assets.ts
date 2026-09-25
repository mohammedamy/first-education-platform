/**
 * Utility to resolve public asset URLs accurately in both local dev (root '/')
 * and GitHub Pages subpath deployment ('/first-education-platform/').
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
