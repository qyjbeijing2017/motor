// import { MotorFloat } from "../type/float.type.js";
// import { MotorPointer } from "../type/pointer.type.js";
// import { MotorList } from "../type/references/list.ref.js";
// import { MotorString } from "../type/references/string.ref.js";
// import { MotorStruct } from "../type/struct.type";

// const Vector3 = MotorStruct.define({
//     x: MotorFloat,
//     y: MotorFloat,
//     z: MotorFloat,
// });

// const Struct = MotorStruct.define({
//     name: MotorString,
//     position: Vector3,
//     mass: MotorFloat,
// });

// const Star = MotorStruct.define({
//     name: MotorString,
//     position: Vector3,
//     mass: MotorFloat,
//     structs: MotorList.define(Struct),
// });

// const Galaxy = MotorStruct.define({
//     name: MotorString,
//     position: Vector3,
//     stars: MotorList.define(Star),
// });

// const Ship = MotorStruct.define({
//     name: MotorString,
//     galaxy: MotorPointer.define(Galaxy),
//     star: MotorPointer.define(Star),
//     struct: MotorPointer.define(Struct),
//     position: Vector3,
//     mass: MotorFloat,
//     captain: MotorString,
// });

// const Space = MotorStruct.define({
//     name: MotorString,
//     galaxies: MotorList.define(Galaxy),
//     ships: MotorList.define(Ship),
// });

// const space = new Space({
//     name: "Space",
//     galaxies: [
//         {
//             name: "Milky Way",
//             position: { x: 0.872, y: 0.3, z: 0.1 },
//             stars: [
//                 {
//                     name: "Sun",
//                     position: { x: 0.88, y: 0.72, z: 0.01 },
//                     mass: 1.989e30,
//                     structs: [
//                         {
//                             name: "Earth",
//                             position: { x: 0.4, y: 0.6, z: 0.03 },
//                             mass: 5.972e24,
//                         },
//                     ],
//                 },
//                 {
//                     name: "Alpha Centauri",
//                     position: { x: 4.367, y: 0, z: 0 },
//                     mass: 2.447e30,
//                     structs: [
//                         {
//                             name: "Proxima Centauri",
//                             position: { x: 0, y: 0, z: 0 },
//                             mass: 2.447e30,
//                         },
//                     ],
//                 }
//             ],
//         },
//     ],
//     ships: [],
// });

// const ship = new Ship({
//     name: "Enterprise",
//     galaxy: space.get('galaxies').at(0).address,  // Milky Way
//     star: space.get('galaxies').at(0).get('stars').at(0).address,  // Sun
//     struct: space.get('galaxies').at(0).get('stars').at(0).get('structs').at(0).address,  // Earth
//     position: { x: 0.4, y: 0.6, z: 0.03 },
//     mass: 5.972e24,
//     captain: "Kirk",
// });

// ship.get('star').value.get('mass').set(1);  // Sun

// space.get('ships').pushBack(ship);

// console.log(space.toString());