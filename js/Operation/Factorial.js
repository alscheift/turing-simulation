import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]0BB/00B,RRS[q0];
    [q0]1BB/BBB,LLS[q1];
    [q1]00B/0BB,SLR[q2];
    [q1]BBB/0BB,SSS[q2];
    [q2]00B/000,LSR[q2];
    [q2]000/000,LSR[q2];
    [q2]B0B/B0B,RLS[q3];
    [q2]0BB/0BB,SRS[q7];
    [q3]00B/000,RSR[q3];
    [q3]000/000,RSR[q3];
    [q3]B0B/B0B,LLS[q2];
    [q3]0BB/0BB,SRS[q4];
    [q4]00B/0BB,SRL[q5];
    [q5]000/000,RSL[q5];
    [q5]B00/000,RSL[q5];
    [q5]B0B/B0B,LRS[q6];
    [q5]0B0/0B0,SSS[q10];
    [q6]00B/00B,SRS[q6];
    [q6]0BB/0BB,SLR[q2];
    [q7]00B/0BB,SRL[q8];
    [q8]000/000,LSL[q8];
    [q8]B00/000,LSL[q8];
    [q8]B0B/B0B,RRS[q9];
    [q8]0B0/0B0,SSS[q10];
    [q9]00B/00B,SRS[q9];
    [q9]0BB/0BB,SLR[q9]
    `
);
console.log(Builder.get());
Builder.setFinalState("q10");

const Factorial = Builder.get();

export default Factorial;