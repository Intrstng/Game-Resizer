//Platforms:
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

export const collisionsLevel_1 = {
  margin: {
    left: 60,
    top: 60,
  },
  map: [
    ["sl", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "sl", "sl", "sl", "sl", "sl", "sl", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
    ["dz", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ja", "ee", "2p", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "jp", "sw", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "fn", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "1s", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "ee", "2p", "ee", "sk", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["ee", "dz", "ee", "fp", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b1", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "dz", "dz", "dz", "dz", "dz", "sl", "dz", "sl", "sl", "sl", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
],
}



  

// export const collisionsLevel_1 = {
//   margin: {
//     left: 180,
//     top: 216,
//   },
//   map: [
//     ["b1", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp", "ee"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "1p", "1p", "2p", "2p", "2p", "3p", "3p", "3p", "b1", "b1", "b1", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ],
// }

// export const collisionsLevel_2 = {
//   margin: {
//     left: 144,
//     top: 108,
//   },
//   map: [
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "st", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "1p", "1p", "1p", "1p", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "2p", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "3p", "3p", "3p", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "ee", "1p", "1p", "1p", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "fp", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "2p", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ],
// }


// export const collisionsLevel_3 = {
//   margin: {
//     left: 180,
//     top: 216,
//   },
//   map: [
//     ["b1", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "b2", "b2", "b2", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "ee", "ee", "2p", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "b2", "b2", "b2", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp", "b1"],
//     ["b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "b1", "b1"]
//    ],
// }


// export const collisionsLevel_4 = {
//   margin: {
//     left: 430,
//     top: 36,
//   },
//   map: [
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp"],
//     ["b1", "3p", "3p", "3p", "b1", "b1", "b1", "b1", "b1"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "2p", "2p", "2p", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "1p", "1p", "1p", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "3p", "3p", "3p", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "2p", "2p", "2p", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "1p", "1p", "1p", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "st", "ee", "b1", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee"]
//   ],
// }

// export const collisionsLevel_5 = {
//   margin: {
//     left: 108,
//     top: 72,
//   },
//   map: [
//     ["fp", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "3p", "3p", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "1p", "1p", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "3p", "3p"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "sl", "sl", "sl", "ee", "ee", "1p", "1p", "1p", "ee", "ee", "ee", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ],
// }

// export const collisionsLevel_6 = {
//   margin: {
//     left: 144,
//     top: 108,
//   },
//   map: [
//     ["ee", "ee", "fp", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "fn", "fn", "dz", "dz", "dz", "ee", "b2", "dz", "dz", "dz", "b2", "ee", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "ee", "b2", "dz", "dz", "dz", "dz", "dz", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "3p", "b2", "dz", "dz", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "1p", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "1p", "1p", "1p", "1p", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "1p", "1p"],
//     ["ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "b2", "ee", "st", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "1p", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee"]
//   ]
// }

// export const collisionsLevel_7 = {
//   margin: {
//     left: 36,
//     top: 36,
//   },
//   map: [
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "st", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "st", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "1s", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "1s", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "3p", "1p", "2p", "ee", "2p", "ee", "2p", "3p", "ee", "1p", "ee", "ee", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "b1", "b1", "ee", "ee", "b2", "ee", "ee", "ee", "b2", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee"],
//     ["ee", "b1", "b1", "ee", "ee", "b1", "b2", "ee", "ee", "ee", "1p", "3p", "2p", "3p", "1p", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "ee", "ee", "b1", "b1", "b2", "ee", "ee", "ee", "b2", "3p", "2p", "3p", "3p", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "b1", "b1", "ee", "b2", "2p", "1p", "3p", "b2", "b1", "b1", "b1", "sk", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp"],
//     ["b1", "ee", "b1", "b1", "ee", "ee", "b2", "sw", "sw", "sw", "b2", "b1", "ee", "b1", "b1", "b1", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "sl", "sl"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "1p", "2p", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "b1", "2p", "1p", "3p", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ]
// }

// export const collisionsLevel_LOL = {
//   margin: {
//     left: 108,
//     top: 72,
//   },
//   map: [
//     ["ee", "st", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "2p", "2p", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["fn", "fn", "fn", "ee", "1p", "1p", "1p", "1p", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "2p", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "fp"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "2p", "2p", "2p", "2p", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "fn", "fn"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "3p", "3p", "3p", "ee", "ee", "ee", "ee"]
//  ]
// }



// export const collisionsLevel_8 = {
//   margin: {
//     left: 144,
//     top: 180,
//   },
//   map: [
//     ["sl", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz"],
//     ["sl", "fp", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
//     ["sl", "ee", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "st"],
//     ["dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
//     ["dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
//     ["dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
//     ["2p", "2p", "2p", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz"],
//     ["ee", "ee", "ee", "ee", "ee", "1p", "1p", "1p", "ee", "ee", "ee", "3p", "3p", "3p", "ee", "ee", "ee", "ee", "sl", "sl", "sl", "sl"]
//   ]
// }

// export const collisionsLevel_9 = {
//   margin: {
//     left: 144,
//     top: 144,
//   },
//   map: [
//     ["fp", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["fn", "fn", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ja", "ja", "ja", "ee", "ee", "ee", "1p", "1p", "1p", "ee", "ee", "ee", "ja", "ja", "ja", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "3p", "3p"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "ja", "ja", "ja", "ee", "ee", "ee", "2p", "2p", "2p", "ee", "ee", "ee", "ee", "ee"]
//   ]
// }


// export const collisionsLevel_10 = {
//   margin: {
//     left: 144,
//     top: 72,
//   },
//   map: [
//     ["ee", "ee", "ee", "ee", "ee", "jd", "jd", "jd", "jd", "ja", "ja", "jd", "jd", "jd", "jd", "ee", "ee", "ee", "b2", "ee", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "1p", "b2", "ee"],
//     ["ee", "ja", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "2p", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "jd", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "3p", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "1p", "b2", "ee"],
//     ["ee", "ja", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ja", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "jd", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "fp", "b2", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "ee"],
//     ["ee", "ja", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ]
// }

// export const collisionsLevel_11 = {
//   margin: {
//     left: 144,
//     top: 72,
//   },
//   map: [
//     ["b1", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "3p", "3p", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "jd", "jd", "b1", "ee", "ee", "ee", "ja", "ja", "ee", "ee", "ee", "ee", "jd", "jd", "ee", "ee", "ee", "b1", "ee", "b1"],
//     ["b1", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "3p", "b1"],
//     ["b1", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ja", "b1"],
//     ["b1", "ja", "ja", "b1", "ee", "sk", "sk", "sk", "sk", "sk", "sk", "sk", "sk", "sk", "sk", "ee", "ee", "ee", "b1", "ee", "b1"],
//     ["b1", "ee", "ee", "b1", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "b1", "ee", "b1"],
//     ["b1", "ee", "ee", "b1", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "sk", "sk", "sk", "b1", "2p", "b1"],
//     ["b1", "jd", "jd", "b1", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "ja", "b1"],
//     ["b1", "ee", "ee", "b1", "sk", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "st", "ee", "ee", "ee", "b1"],
//     ["b1", "ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1"],
//     ["b1", "ee", "ee", "1p", "ee", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp", "b1", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "b1", "b1", "b1", "b1", "jd", "jd", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ]
// }


// export const collisionsLevel_12 = {
//   margin: {
//     left: 144,
//     top: 0,
//   },
//   map: [
//     ["b2", "ee", "st", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "1p", "1p", "1p", "1p", "1p", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "2p", "2p", "2p", "2p", "2p", "b2"],
//     ["b2", "sw", "sw", "ee", "sw", "sw", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "sw", "sw", "sw", "ee", "sw", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ja", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "2p", "2p", "2p", "2p", "2p", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "3p", "3p", "3p", "3p", "3p", "b2"],
//     ["b2", "ee", "sw", "sw", "sw", "sw", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "sw", "ee", "sw", "sw", "sw", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "jd", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "b2"],
//     ["b2", "3p", "3p", "3p", "3p", "3p", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "1p", "1p", "1p", "1p", "1p", "b2"],
//     ["b2", "sw", "sw", "sw", "sw", "ee", "b2", "ee", "ee", "ee", "ja", "ja", "ee", "b2", "sw", "sw", "ee", "sw", "sw", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "fp"],
//     ["ee", "ee", "ee", "ee", "ee", "1p", "1p", "b1", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2", "b2", "b2", "b2"]
//  ]
// }


// export const collisionsLevel_13 = {
//   margin: {
//     left: 240,
//     top: 0,
//   },
//   map: [
//     ["fp", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["fn", "fn", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//     ["ee", "ee", "ee", "1s", "1s", "1s", "ee", "ee", "ee", "1s", "1s", "ee", "ee", "ee", "eef", "1s", "1s", "b1"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee"],
//     ["ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "b1", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//   ]
// }

// export const collisionsLevel_14 = {
//   margin: {
//     left: 72,
//     top: 36,
//   },
//   map: [
//     ["fp", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "b2"],
//     ["b1", "3p", "ee", "ee", "ee", "ja", "ja", "ee", "ee", "1s", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "1p", "ee", "ee", "ee", "b1", "b1", "dz", "dz", "dz", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "3p", "3p", "3p", "b2"],
//     ["b1", "b1", "b1", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "1p", "fn", "fn", "b2"],
//     ["ee", "ee", "ee", "ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "1p", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "1s", "dz", "dz", "1p", "dz", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "1p", "st", "dz", "b2"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "b2"]
//   ]
// }


// export const collisionsLevel_15 = {
//   margin: {
//     left: 108,
//     top: 36,
//   },
//   map: [
//     ["ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "ee", "ee"],
//     ["ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "ee", "st", "b1", "ee", "ee"],
//     ["ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "ee", "ee"],
//     ["ee", "ee", "fr", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "b1", "ee", "ee"],
//     ["ee", "ee", "b1", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "2p", "ee", "ee", "2p", "ee", "ee", "2p", "ee", "ee", "2p", "ee", "ee", "2p", "ee", "fl", "ee"],
//     ["ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "ee"],
//     ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "b1", "ee", "b1", "ee", "ee", "b1", "ee", "b1", "ee", "ee", "b1", "3p", "ee", "b1", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "b1", "ee", "b1", "ee", "ee", "b1", "ee", "b1", "ee", "ee", "b1", "ee", "b1", "b1", "ee", "ee", "ee"],
//     ["ee", "b1", "b1", "b1", "b1", "3p", "3p", "b1", "b1", "b1", "3p", "3p", "b1", "b1", "b1", "3p", "3p", "b1", "ee", "b1", "b1", "b1", "ee", "ee"],
//     ["ee", "b1", "ee", "2p", "dz", "dz", "dz", "dz", "1p", "dz", "dz", "dz", "dz", "2p", "dz", "dz", "dz", "dz", "dz", "dz", "fl", "b1", "ee", "ee"],
//     ["ee", "b1", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee", "ee"],
//     ["ee", "b1", "fp", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
//  ]
// }


// export const collisionsLevel_1 = {
//     margin: {
//       left: 72,
//       top: 0,
//     },
//     map: [     
//       ["ee", "ee", "b2", "fd", "b2", "b2", "fd", "b2", "b2", "b2", "fd", "b2", "b2", "b2", "fd", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2"],
//       ["ee", "ee", "b2", "ee", "ee", "b2", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "1s", "ee", "ee", "2p", "ee", "ee", "ee", "3p", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "b2", "b2", "ee", "ee", "ee", "ee", "fl", "b2"],
//       ["ee", "ee", "1s", "ee", "ee", "2p", "ee", "ee", "ee", "3p", "ee", "ee", "ee", "1p", "ee", "ee", "ee", "b2", "ee", "1p", "1p", "ee", "ee", "b1", "b2"],
//       ["ee", "ee", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "3p", "ee", "ee", "1p", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "3p", "ee", "ee", "1p", "ee", "b2", "ee", "ee", "3p", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "2p", "ee", "ee", "ee", "3p", "ee", "sk", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "sw", "ee", "ee", "ee", "sk", "ee", "ee", "ee", "sw", "ee", "ee", "b1", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "fl", "b2"],
//       ["ee", "ee", "ee", "b2", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "b1", "b2", "b2", "b2", "ee", "ee", "b2", "ee", "ee", "2p", "ee", "ee", "b1", "b2"],
//       ["jd", "jd", "jd", "b2", "ja", "ja", "ja", "b2", "1s", "1s", "1s", "b2", "ee", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "fp", "ee", "ee", "ee", "ee", "b2", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "b2", "b2", "2p", "2p", "2p", "b2", "ee", "ee", "1p", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "fr", "ee", "ee", "ee", "ee", "ee", "ee", "b2"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b2", "b1", "ee", "ee", "st", "ee", "ee", "ee", "ee"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee"]
//     ]
//   }






// export const collisionsLevel_17 = {
//     margin: {
//       left: 72,
//       top: -72,
//     },
//     map: [
//       ["st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//       ["dz", "dz", "dz", "dz", "sk", "sk", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],  
//       ["dz", "dz", "dz", "b2", "b2", "b2", "b2", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1", "ee"],
//       ["dz", "dz", "dz", "fd", "fd", "fd", "fd", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee"],
//       ["dz", "dz", "dz", "dz", "dz", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee"],
//       ["dz", "dz", "dz", "ee", "1p", "2p", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee"],
//       ["b1", "b1", "b1", "b1", "b1", "b1", "b1", "3p", "3p", "3p", "3p", "1s", "1s", "1p", "1s", "1s", "2p", "1s", "1s", "3p", "3p", "b1", "ee", "b1", "ee"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "sk", "sk", "sk", "sk", "b1", "sk", "sk", "sk", "sk", "b1", "sk", "sk", "sk", "sk", "b1", "ee", "b1", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fl", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "3p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fl", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "1p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fl", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "b1", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "b1", "ee", "b1", "b1", "b1", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "fd", "fd", "b1", "3p", "b1", "fd", "fd", "b1", "2p", "b1", "fd", "fd", "b1", "1p", "b1", "ee", "ee", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "sw", "ee", "ee", "ee", "ee", "sw", "ee", "ee", "ee", "ee", "sw", "ee", "ee", "fp", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fn", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "b1"],
//       ["ee", "ee", "ee", "ee", "b1", "b1", "b1", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "b1"],
//       ["ee", "ee", "ee", "ee", "ee", "ee", "b1", "1p", "1p", "1p", "b1", "2p", "2p", "2p", "2p", "b1", "3p", "3p", "3p", "3p", "b1", "ee", "1s", "ee", "b1"]
//     ]
//   }