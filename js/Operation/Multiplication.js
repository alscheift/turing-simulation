import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]0BB/B0B,RRS[q1];
    [q0]1BB/B1B,RRS[q1];

    [q1]0BB/0BB,RSS[q1];
    [q1]1BB/1BB,RSS[q1];

    [q1]XBB/XBB,RLS[q2];

    [q2]0BB/0B0,RSR[q2];
    [q2]1BB/1B1,RSR[q2];
    [q2]01B/010,RSR[q2];
    [q2]11B/111,RSR[q2];
    [q2]00B/001,RSR[q2];
    [q2]10B/100,RSR[q2];

    [q2]XBB/XBB,LRS[q3];
    [q2]X1B/X1B,LRS[q3];
    [q2]X0B/X0B,LRS[q3];

    [q3]1BB/1BB,LSS[q3];
    [q3]XBB/XBB,LSS[q3];
    [q3]0BB/0BB,LSS[q3];

    [q3]BBB/BBB,RSS[q0];

    [q0]XBB/XBB,SSS[q5]
    `
);
// console.log(Builder.get());
Builder.setFinalState("q5");

const Multiplication = Builder.get();

export default Multiplication;