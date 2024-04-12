// Extracted from @paperdave/utils
// https://github.com/paperdave/various/blob/main/packages/utils/src/debounce.ts
// MIT License
/** Wrap a function and apply debounce logic to. */
export const debounce = <Args extends any[]>(func: (...args: Args) => void, waitTime: number) => {
  let timeout: Timer;

  return (...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(func as any, waitTime, ...args);
  };
}

// Extracted from @paperdave/utils
// https://github.com/paperdave/various/blob/main/packages/utils/src/string.ts
// MIT License
/**
 * Alias of Bun.escapeHTML, polyfilled for other platforms.
 *
 * Escape the following characters in a string:
 *
 * - `"` becomes `"&quot;"`
 * - `&` becomes `"&amp;"`
 * - `'` becomes `"&#x27;"`
 * - `<` becomes `"&lt;"`
 * - `>` becomes `"&gt;"`
 *
 * In bun, this function is optimized for large input. On an M1X, it processes 480 MB/s - 20 GB/s,
 * depending on how much data is being escaped and whether there is non-ascii text.
 */
export const escapeHTML =
  /* @__PURE__ */
  (string: string) => {
    return string
      .replaceAll('"', '&quot;')
      .replaceAll('&', '&amp;')
      .replaceAll("'", '&#x27;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  };

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const basename = (path: string) => path.split('/').pop()!;

export type Platform = 'windows' | 'linux' | 'macos';
export type Arch = 'x86_64' | 'aarch64' | 'x86_64_baseline';