export const LOGO_LINES: readonly string[] = [
  "▐▀▌ █▄▀ █   █ █▄ █ █▄▀",
  "▐█▌ █ █ █▄▄ █ █ ▀█ █ █",
];

export const LOGO_WIDTH = Math.max(...LOGO_LINES.map((l) => [...l].length));

// Silver/steel: padlock shackle (the arch on top)
export const SHACKLE_CELLS: ReadonlySet<string> = new Set([
  "0,0", "0,1", "0,2",
]);

// Gold: padlock body
export const BODY_CELLS: ReadonlySet<string> = new Set([
  "1,0", "1,1", "1,2",
]);

// Red: the K letter (top: █▄▀ = cols 4,5,6 | bottom: █ █ = cols 4 & 6)
export const KEY_CELLS: ReadonlySet<string> = new Set([
  "0,4", "0,5", "0,6",
  "1,4", "1,6",
]);

// Legacy alias so any other import still compiles
export const SPROUT_CELLS: ReadonlySet<string> = BODY_CELLS;
