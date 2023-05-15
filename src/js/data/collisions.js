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
    // 1f - Frame block 1
    // 2f - Frame block 2
// Empty:
    // ee - Empty block

export const collisionsLevel_1 = [
  ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'],
  ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'],
  ['ee', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', 'ee'],
  ['ee', '1p', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', '1p', 'ee'],
  ['ee', '1p', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', '1p', 'ee'],
  ['ee', '1p', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', '1p', 'ee'],
  ['ee', '1p', 'ee', 'ee', '2p', '', '', '', '', '', '', '', 'jp', 'sw', '1p', 'ee'],
  ['ee', '1p', 'ee', 'ee', 'ee', 'ee', '', '', '', '', '', '', '', '', '1p', 'ee'],
  ['ee', , 'ee', 'ee', '', '', '', '', '', '', '', '', '', '', '1p', 'ee'],
  ['ee', '1p', '1p', '', '', , '', '', , '', '', '', '', '', '1p', 'ee'],
  ['ee', '1p', 'ee', '', '', '', '', '', '', '', '', '', '', '', '1p', ''],
  ['', 'ee', , '', '', '', '1p', '', '3p', '', '2p', '', 'sk', '', , '1p'],
  ['', '1p', '', '', '', '', '1p', 'ee', '', 'ee', '', 'ee', 'ee', 'ee', '1p', ''],
  ['ee', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', '1p', 'ee', '1p', 'ee'],
  ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'],
  ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee']
];