import Tape from "./Tape.js";
import Addition from "./Operation/Addition.js";

class Turing {
    Tapes = [];
    transitionDiagram = {};

    currentState = "q0";

    constructor(operation, jumlahTape, firstTapeInput) {
        this.transitionDiagram = operation.state;
        this.Tapes.push(new Tape(firstTapeInput));
        for (let i = 1; i < jumlahTape; i++) {
            this.Tapes.push(new Tape());
        }
    }

    printAllTape() {
        this.Tapes.forEach((tape) => {
            tape.print();
        });
    }
}

const a = new Turing(Addition, 2, "BB111X11BB".split(""));

a.printAllTape();
