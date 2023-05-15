// Platforms:
    // sl - platform Solid
    // 1p - platform One
    // 2p - platform Two
    // 3p - platform Three
    // jp - platform Jump-Toggle
    // 1s - platform One-Step
// Traps:
    // sw - Saw trap
    // sk - Spikes trap
    // ft - Flamethrower
    // dz - Dead signal zone
// Decorations:
    // 1b - Frame brick 1
    // 2b - Frame block 2
// Empty:
    // ee - Empty block

export const collisionsLevel_1 = [
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', 'sl'],
  ['sl', '1p', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', '1p', 'sl'],
  ['sl', '1p', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', 'sl', '1p', 'sl'],
  ['sl', '1p', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', 'sl', 'sl', 'sl', '1p', 'sl'],
  ['sl', '1p', 'sl', 'sl', '2p', '', '', '', '', '', '', '', 'jp', 'sw', '1p', 'sl'],
  ['sl', '1p', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', '', '1p', 'sl'],
  ['sl', , 'sl', 'sl', '', '', '', '', '', '', '', '', '1s', '', '1p', 'sl'],
  ['sl', '1p', '1p', '', '', , '', '', , '1s', '1s', '', '', '', '1p', 'sl'],
  ['sl', '1p', 'sl', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', 'sl', , '', '', '1s', '', '', '3p', '', '2p', '', 'sk', '', , ''],
  ['', '1p', '', 'sl', 'sl', '', '1p', 'sl', '', 'sl', '', 'sl', 'sl', 'sl', '1p', ''],
  ['sl', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', 'sl', '1p', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl']
];