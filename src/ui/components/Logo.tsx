import { Box, Text } from "ink";
import { LOGO_LINES, SHACKLE_CELLS, BODY_CELLS, KEY_CELLS } from "../logo";
import { COLOR, lerpHex } from "../theme";

const HIGHLIGHT = "#ffffff";
const TOP = COLOR.bright;
const BASE = "#7c5cd6";
const SHADE = "#4c3a8a";

const SHACKLE_COLOR = "#c8d0d8"; // silver/steel
const BODY_COLOR = "#e5c07b";    // gold
const KEY_COLOR = "#e06c75";     // retro red

function getSheen(t: number): string {
  if (t < 0.15) return lerpHex(HIGHLIGHT, TOP, t / 0.15);
  if (t < 0.4) return lerpHex(TOP, COLOR.accent, (t - 0.15) / 0.25);
  if (t < 0.7) return lerpHex(COLOR.accent, BASE, (t - 0.4) / 0.3);
  return lerpHex(BASE, SHADE, (t - 0.7) / 0.3);
}

export function Logo() {
  const rows = LOGO_LINES.length;

  return (
    <Box flexDirection="column">
      {LOGO_LINES.map((line, row) => {
        const tY = row / (rows - 1 || 1);
        const chars = [...line];
        const last = Math.max(1, chars.length - 1);

        return (
          <Box key={row}>
            {chars.map((ch, i) => {
              if (ch === " ") return <Text key={i}> </Text>;

              const key = `${row},${i}`;

              if (SHACKLE_CELLS.has(key)) {
                return <Text key={i} bold color={SHACKLE_COLOR}>{ch}</Text>;
              }
              if (BODY_CELLS.has(key)) {
                return <Text key={i} bold color={BODY_COLOR}>{ch}</Text>;
              }
              if (KEY_CELLS.has(key)) {
                return <Text key={i} bold color={KEY_COLOR}>{ch}</Text>;
              }

              const tX = i / last;
              const factor = (tX + tY) / 2;
              return (
                <Text key={i} bold color={getSheen(factor)}>
                  {ch}
                </Text>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
