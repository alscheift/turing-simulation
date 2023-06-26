class Tape {
    constructor() {
        this.tape = ["B", "B", "C", "B", "B"];
        this.head = 2;
    }

    write(value) {
        this.tape[this.head] = value;
    }

    read() {
        return this.tape[this.head];
    }

    moveLeft() {
        if (this.head === 0) {
            this.tape.unshift("B");
        } else {
            this.head--;
        }
    }

    moveRight() {
        if (this.head === this.tape.length - 1) {
            this.tape.push("B");
        }
        this.head++;
    }

    print() {
        const tempVal = this.read();
        this.write(`>${tempVal}<`);
        console.log(this.tape);
        this.write(tempVal);
    }
}

export default Tape;
