class Tape {
    constructor(defaultTape = ["B", "B", "B", "B", "B"], defaultHead = 2) {
        this.tape = defaultTape;
        this.head = defaultHead;
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

    getHead() {
        return this.head;
    }

    print() {
        const tempVal = this.read();
        this.write(`[${tempVal}]`);
        console.log(this.tape.join(""));
        this.write(tempVal);
    }
}

export default Tape;
