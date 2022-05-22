import { ten_print } from "./print";
import { chaos } from "./chaos";
import { packing } from "./packing";
import { truchet } from "./truchet";

export function generate_cover(width, height) {
    let rnd;

    rnd = ~~(Math.random() * 4);
    switch (rnd) {
        case 0:
            return ten_print(width, height);
        case 1: 
            return chaos(width, height);
        case 2:
            return packing(width, height);
        case 3: 
            return truchet(200, 200);
    }
}