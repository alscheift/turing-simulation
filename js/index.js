import Tape from "./Tape.js";
import Addition from "./Operation/Addition.js";

class Turing {
    Tapes = [];
    transitionDiagram = {};

    currentState = "q0";

    constructor(operation, jumlahTape, firstTapeInput) {
        this.transitionDiagram = operation.state;
        this.Tapes.push(new Tape());
        for (let i = 1; i < jumlahTape; i++) {
            this.Tapes.push(new Tape());
        }
    }

    getCurrentTape() {}
}

const a = new Tape();

a.print();
