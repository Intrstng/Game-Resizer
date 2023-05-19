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
    // b1 - Frame brick 1
    // b2 - Frame block 2
    // fn - Fan
// Empty:
    // ee - Empty block
// Player:
    // st - Start point
    // fp - Finish point

export const collisionsLevel_1 = [
  ["sl", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "sl", "sl", "sl", "sl", "sl", "sl", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
  ["dz", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ja", "ee", "2p", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "jp", "sw", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "1s", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "dz", "ee", "ee", "3p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "3p", "ee", "2p", "ee", "sk", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["b1", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "dz", "dz", "dz", "dz", "dz", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
 ["b2", "dz", "sl", "sl", "sl", "sl", "sl", "sl", "dz", "dz", "dz", "sl", "sl", "sl", "dz", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
];


const data = {
    "player": {
        "x": 200,
        "y": 300,
    },
    "map": [
        ["dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
        ["dz", "sl", "sl", "sl", "sl", "sl", "sl", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
        ["sl", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "sl"],
        ["sl", "dz", "sl", "sl", "sl", "sl", "ee", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "dz", "sl"],
        ["sl", "dz", "sl", "sl", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "sl", "dz", "sl"],
        ["sl", "dz", "sl", "sl", "sl", "sl", "ee", "ee", "1s", "ja", "ee", "2p", "1p", "sl", "dz", "sl"],
        ["sl", "dz", "sl", "sl", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "jp", "sw", "dz", "sl"],
        ["sl", "dz", "sl", "sl", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "sl"],
        ["sl", "ee", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "dz", "sl"],
        ["sl", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "sl", "1s", "1p", "ee", "dz", "sl"],
        ["sl", "dz", "sl", "ee", "ee", "dz", "ee", "ee", "3p", "2p", "ee", "ee", "ee", "ee", "ee", "ee"],
        ["ee", "sl", "ee", "dz", "ee", "ee", "ee", "ee", "3p", "ee", "2p", "ee", "sk", "ee", "ee", "ee"],
        ["ee", "dz", "ee", "sl", "sl", "ee", "ee", "ee", "dz", "dz", "dz", "sl", "sl", "sl", "dz", "ee"],
        ["sl", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "dz", "dz", "dz", "dz", "dz", "sl", "dz", "sl"],
        ["b1", "sl", "sl", "sl", "sl", "sl", "ee", "1s", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
        ["b2", "sl", "sl", "sl", "sl", "sl", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"]
      ],
}