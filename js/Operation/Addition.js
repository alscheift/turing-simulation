import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]0B/00,RR[q0];
    [q0]1B/11,RR[q0];

    [q0]XB/XB,RL[q1];

    [q1]01/0B,RL[q1];
    [q1]10/1B,RL[q1];
    [q1]0B/00,RR[q1];
    [q1]1B/11,RR[q1];
    [q1]00/00,SR[q1];
    [q1]11/11,SR[q1];

    [q1]BB/BB,SS[q2];
    [q1]B0/B0,RS[q2];
    [q1]B1/B1,RS[q2]
    `
);
Builder.setFinalState("q2");

const Addition = Builder.get();

/*
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
*/

export default Addition;
