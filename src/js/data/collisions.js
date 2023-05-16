// Platforms:
    // sl - platform Solid
    // dz - platform One
    // 2p - platform Two
    // 3p - platform Three
    // ja - platform Jump-Toggle (active)
    // jd - platform Jump-Toggle (disabled)
    // 1s - platform One-Step
// Traps:
    // sw - Saw trap
    // sk - Spikes trap
    // fl - Flamethrower (left)
    // fr - Flamethrower (right)
    // fu - Flamethrower (up)
    // fd - Flamethrower (down)
    // dz - Dead signal zone
// Decorations:
    // 1b - Frame brick 1
    // 2b - Frame block 2
    // fn - Fan
// Empty:
    // ee - Empty block

export const collisionsLevel_1 = [
  ['dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz'],
  ['dz', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', 'jd', '', 'ja', '', 'sl', 'sl', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', '2p', '', '', '', 'fu', '', '', '', 'jp', 'sw', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', '', 'dz', 'sl'],
  ['sl', , 'sl', 'sl', '', '', '', '', '', '', 'fr', '', '1s', '', 'dz', 'sl'],
  ['sl', 'dz', 'dz', '', '', , '', '', , '1s', '1s', '', '1p', '', 'dz', 'sl'],
  ['sl', 'dz', 'sl', '', '', 'dz', '', 'fd', '', 'sl', '', '', '', '', '', ''],
  ['', 'sl', , 'dz', 'fl', 'dz', '', '', '3p', '', '2p', '', 'sk', '', , ''],
  ['', 'dz', '', 'sl', 'sl', '', 'sl', 'sl', 'dz', 'dz', 'dz', 'sl', 'sl', 'sl', 'dz', ''],
  ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl', 'dz', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl']
];