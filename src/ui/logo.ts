export const LOGO_LINES: readonly string[] = [
  "▐▀▌ █   █ █▄ █ █▄▀",
  "▐█▌ █▄▄ █ █ ▀█ █ █",
];

export const LOGO_WIDTH = Math.max(...LOGO_LINES.map((l) => [...l].length));

// Gold cells: the entire padlock icon (arch + body) at positions 0-2 on both rows
export const SPROUT_CELLS: ReadonlySet<string> = new Set([
  "0,0", "0,1", "0,2",
  "1,0", "1,1", "1,2",
]);
