import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]0BB/00B,RRS[q0];
    [q0]1BB/11B,RRS[q0];
    [q0]XBB/XBB,RLS[q1];
    [q1]1BB/1B0,RSR[q1];
    [q1]0BB/0B1,RSR[q1];
    [q1]11B/11B,RLS[q1];
    [q1]00B/00B,RLS[q1];
    [q1]B1B/B11,SLR[q1];
    [q1]B0B/B00,SLR[q1];
    [q1]01B/011,SSS[q2];
    [q1]10B/100,SSS[q2];
    [q1]BBB/BBB,SSS[q3];
    [q2]BBB/BBB,SSS[q3]
    `
);
console.log(Builder.get());
Builder.setFinalState("q3");

const Subtraction = Builder.get();

export default Subtraction;