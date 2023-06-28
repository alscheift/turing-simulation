import Tape from "./Tape.js";

class Diagram {}

class Turing {
    Tapes = [];
    transitionDiagram = {};

    currentState = "q0";

    constructor(jumlahTape) {
        for (let i = 0; i < jumlahTape; i++) {
            this.Tapes.push(new Tape());
        }
    }

    getCurrentTape() {}
}

const a = new Tape();

a.print();
a.moveLeft();
a.print();
a.moveLeft();
a.moveLeft();
a.moveLeft();
a.print();
a.moveRight();

/*
const e = {
    state: {
        q0: [
            {
                before: ["0", "B"],
                after: ["0", "0"],
                tapeHeads: ["R", "R"],
                nextState: "q0",
            },

            {
                before: ["X", "B"],
                after: ["X", "B"],
                tapeHeads: ["R", "L"],
                nextState: "q1",
            },

            isFinal = true,
        ],
        q1: [
            {
                before: ["E", "E", "E"],
                after: ["E", "B", "B"],
                tapeHeads: ["R", "S", "S"],
                nextState: "q1",
            },
        ],
    },
};
Gambaran diagram transisi dalam (JSON)
*/
