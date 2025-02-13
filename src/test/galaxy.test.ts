import { MotorBool } from "../types/bool.type";
import { MotorFloat } from "../types/float.type";
import { MotorInteger } from "../types/integer.type";
import { MotorNull } from "../types/null.type";
import { MotorPointer } from "../types/pointer.type";
import { MotorList } from "../types/references/list.ref";
import { MotorString } from "../types/references/string.ref";
import { MotorStruct } from "../types/struct.type";

const Vector3 = MotorStruct.define({
    x: MotorFloat,
    y: MotorFloat,
    z: MotorFloat
})

const Struct = MotorStruct.define({
    name: MotorString,
    type: MotorInteger,
    pos: Vector3,
    mass: MotorFloat,
    isGate: MotorBool,
    jumpTo: MotorPointer.define(MotorNull)
})

const Star = MotorStruct.define({
    name: MotorString,
    pos: Vector3,
    mass: MotorFloat,
    structs: MotorList.define(Struct),
})

const Galaxy = MotorStruct.define({
    name: MotorString,
    pos: Vector3,
    stars: MotorList.define(Star)
})

const Ship = MotorStruct.define({
    name: MotorString,
    galaxy: MotorPointer.define(Galaxy),
    star: MotorPointer.define(Star),
    struct: MotorPointer.define(Struct),
    mass: MotorFloat,
    pos: Vector3,
    captain: MotorString
})

const Space = MotorStruct.define({
    galaxy: MotorList.define(Galaxy),
    ships: MotorList.define(Ship)
});

const space = new Space();

const milkyWay = new Galaxy({
    name: new MotorString('Milky Way'),
    pos: {
        x: 0,
        y: 0,
        z: 0
    },
});
space.get('galaxy').pushBack(milkyWay);

const sun = new Star({
    name: new MotorString('Sun'),
    pos: {
        x: 0,
        y: 0,
        z: 0
    },
    mass: 1,
});
milkyWay.get('stars').pushBack(sun);

const earth = new Struct({
    name: new MotorString('Earth'),
    type: 1,
    pos: {
        x: 0.8,
        y: 0,
        z: 0.4,
    },
    mass: 1,
    isGate: false,
});
sun.get('structs').pushBack(earth);

const mars = new Struct({
    name: new MotorString('Mars'),
    type: 1,
    pos: {
        x: 0.6,
        y: 0,
        z: 1.2,
    },
    mass: 1,
    isGate: false,
});
sun.get('structs').pushBack(mars);

const voyager = new Ship({
    name: new MotorString('Voyager'),
    galaxy: MotorPointer.getPointer(milkyWay),
    star: MotorPointer.getPointer(sun),
    struct: MotorPointer.getPointer(earth),
    mass: 1,
    pos: new Vector3({
        x: 1.2,
        y: 0,
        z: 5.4,
    }),
    captain: new MotorString('Voyager')
});
space.get('ships').pushBack(voyager);


