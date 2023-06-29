import Tape from "./Tape.js";

class Turing {
    Tapes = [];
    transitionDiagram = {};

    currentState = "q0";
    isFinished = false;
    constructor(operation, jumlahTape, firstTapeInput) {
        this.transitionDiagram = operation.state;
        this.Tapes.push(new Tape(firstTapeInput.split("")));
        for (let i = 1; i < jumlahTape; i++) {
            this.Tapes.push(new Tape());
        }
    }

    printAllTape() {
        this.Tapes.forEach((tape) => {
            tape.print();
        });
    }

    // return in array [tape1, tape2, ... ] =>['B', 'B', ... ]
    readAllTape() {
        return this.Tapes.map((tape) => tape.read());
    }

    runUntilFinish() {
        while (this.isFinished === false) {
            this.nextMove();
        }
    }

    nextMove() {
        // Tape Saat ini misal [tape1, tape2] = ['1','B'].
        const currentTape = this.readAllTape();

        // Transisi saat ini, dari Operasi yang dipilih, misal q0
        const currentTransition = this.transitionDiagram[this.currentState];

        // Membandingkan value before[...] transisi saat ini dengan tape[...] saat ini
        const currentTransitionIndex = currentTransition.transitions.findIndex(
            (transition) => {
                return transition.before.every((val, index) => {
                    return val === currentTape[index];
                });
            }
        );
        // console.log(currentTransitionIndex + " of " + this.currentState);
        // Kalau transisi yang ditemukan adalah final, maka selesai
        if (
            currentTransition.isFinal === true &&
            currentTransitionIndex === -1
        ) {
            this.isFinished = true;
            return;
        }

        if (currentTransitionIndex === -1) {
            // error handling kalau tidak nemu transisi
            console.log("Error: No transition found");
        }

        // Mendapatkan perubahan tape dan state selanjutnya
        const currentTransitionData =
            currentTransition.transitions[currentTransitionIndex];
        currentTransitionData.after.forEach((val, index) => {
            this.Tapes[index].write(val);
        });
        currentTransitionData.tapeHeads.forEach((val, index) => {
            if (val === "R") {
                this.Tapes[index].moveRight();
            } else if (val === "L") {
                this.Tapes[index].moveLeft();
            }
        });
        this.currentState = currentTransitionData.nextState;
    }
}

export default Turing;