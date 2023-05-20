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

// export const collisionsLevel_0 = {
//   margin: {
//     left: 60,
//     top: 60,
//   },
//   map: [
//     ["sl", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "sl", "sl", "sl", "sl", "sl", "sl", "ee", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "sl"],
//     ["dz", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ja", "ee", "2p", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "jp", "sw", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "fn", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b2", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ee", "1s", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "2p", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "3p", "ee", "2p", "ee", "sk", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "fp", "ee", "ee", "ee", "ee", "dz", "dz", "dz", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["b1", "sl", "sl", "sl", "sl", "sl", "sl", "sl", "dz", "dz", "dz", "dz", "dz", "sl", "dz", "sl", "sl", "sl", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
// ],
// }



  

export const collisionsLevel_1 = {
  margin: {
    left: 180,
    top: 216,
  },
  map: [
    ["b1", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "fp", "ee"],
    ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1p", "1p", "1p", "2p", "2p", "2p", "3p", "3p", "3p", "b1", "b1", "b1", "b1"],
    ["b1", "ee", "ee", "ee", "ee", "ee", "ee", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b1", "ee", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b1", "ee", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b1", "ee", "ee", "ee", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
    ["b1", "b1", "b1", "b1", "b1", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"]
  ],
}








//     map: [
//     ["ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "sl", "sl", "sl", "sl"],
//     ["dz", "sl", "sl", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "dz", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "dz", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "dz", "ee", "ee", "ee", "ee", "ee"],
//     ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "1s", "ja", "ee", "2p", "1p", "ee", "dz", "ee", "ee", "ee", "ee", "ee"]
// ],









// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "st", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
// ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],









  // console.log(collisionsLevel_1.map.length)
  // console.log(collisionsLevel_1.map[0].length)
  // debugger