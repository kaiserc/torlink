export const LOGO_LINES: readonly string[] = [
  "   ▄▀▀▄             ",
  "   █  █             ",
  " █▄▀ █   █ █▄ █ █▄▀ ",
  " █ █ █▄▄ █ █ ▀█ █ █ ",
];

export const LOGO_WIDTH = Math.max(...LOGO_LINES.map((l) => [...l].length));

export const SPROUT_CELLS: ReadonlySet<string> = new Set([
  "0,3", "0,4", "0,5", "0,6",
  "1,3", "1,6",
]);
