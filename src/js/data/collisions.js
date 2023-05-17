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
  ['dz', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'ee', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'fd', 'ee', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'ee', 'ee', 'ee', 'ja', 'ee', '2p', '1p', 'sl', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', '2p', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'jp', 'sw', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'dz', 'sl'],
  ['sl', 'ee', 'sl', 'sl', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', '1s', 'ee', 'dz', 'sl'],
  ['sl', 'dz', 'dz', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', '1s', 'sl', '1s', '1p', 'ee', 'dz', 'sl'],
  ['sl', 'dz', 'sl', 'fr', 'ee', 'dz', 'ee', '1p', '3p', '2p', 'ee', 'ee', 'ee', 'ee', 'ee', 'fl'],
  ['ee', 'sl', 'ee', 'dz', 'ee', 'ee', 'ee', '2p', '3p', 'ee', '2p', 'fu', 'sk', 'ee', 'ee', 'ee'],
  ['ee', 'dz', 'ee', 'sl', 'sl', 'ee', 'ee', 'sl', 'dz', 'dz', 'dz', 'sl', 'sl', 'sl', 'dz', 'ee'],
  ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl', 'dz', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'],
  ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl']
];