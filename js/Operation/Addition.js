const Addition = {
    state: {
        q0: {
            isFinal: false,
            transitions: [
                {
                    before: ["0", "B"],
                    after: ["0", "0"],
                    tapeHeads: ["R", "R"],
                    nextState: "q0",
                },
                {
                    before: ["1", "B"],
                    after: ["1", "1"],
                    tapeHeads: ["R", "R"],
                    nextState: "q0",
                },
                {
                    before: ["X", "B"],
                    after: ["X", "B"],
                    tapeHeads: ["R", "L"],
                    nextState: "q1",
                },
            ],
        },
        q1: {
            isFinal: false,
            transitions: [
                {
                    before: ["0", "1"],
                    after: ["0", "B"],
                    tapeHeads: ["R", "L"],
                    nextState: "q1",
                },
                {
                    before: ["1", "0"],
                    after: ["1", "B"],
                    tapeHeads: ["R", "L"],
                    nextState: "q1",
                },
                {
                    before: ["0", "B"],
                    after: ["0", "0"],
                    tapeHeads: ["R", "R"],
                    nextState: "q1",
                },
                {
                    before: ["1", "B"],
                    after: ["1", "1"],
                    tapeHeads: ["R", "R"],
                    nextState: "q1",
                },
                {
                    before: ["0", "0"],
                    after: ["0", "0"],
                    tapeHeads: ["S", "R"],
                    nextState: "q1",
                },
                {
                    before: ["1", "1"],
                    after: ["1", "1"],
                    tapeHeads: ["S", "R"],
                    nextState: "q1",
                },
                {
                    before: ["B", "B"],
                    after: ["B", "B"],
                    tapeHeads: ["S", "S"],
                    nextState: "q2",
                },
                {
                    before: ["B", "0"],
                    after: ["B", "0"],
                    tapeHeads: ["R", "S"],
                    nextState: "q2",
                },
                {
                    before: ["B", "1"],
                    after: ["B", "1"],
                    tapeHeads: ["R", "S"],
                    nextState: "q2",
                },
                {
                    before: ["1", "1"],
                    after: ["1", "1"],
                    tapeHeads: ["S", "R"],
                    nextState: "q2",
                },
            ],
        },
        q2: {
            isFinal: true,
            transitions: [
                {
                    before: ["0", "B"],
                    after: ["0", "0"],
                    tapeHeads: ["R", "R"],
                    nextState: "q0",
                },
                {
                    before: ["1", "B"],
                    after: ["1", "1"],
                    tapeHeads: ["R", "R"],
                    nextState: "q0",
                },
                {
                    before: ["X", "B"],
                    after: ["X", "B"],
                    tapeHeads: ["R", "L"],
                    nextState: "q1",
                },
            ],
        },
    },
};

export default Addition;
