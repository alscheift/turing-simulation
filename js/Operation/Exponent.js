import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]1BB/111,LLL[q0];
    [q0]BBB/EEE,SSS[q0];
    [q0]EEE/EEE,RSS[q1];
    [q0]0BB/0BB,RSS[q9];
    [q9]1BB/BBB,SSS[q10];
    [q9]BBB/BB1,SSS[q10];

    [q1]1EE/1EE,RSS[q1];
    [q1]0EE/0EE,RSS[q2];

    [q2]EEE/EEE,RSS[q2];
    [q2]BEE/BBB,SSS[q10];

    [q2]1EE/EEE,LSS[q3];
    [q3]EEE/EEE,LSS[q3];
    [q3]0EE/0EE,LRR[q4];
    [q4]11B/111,SRR[q4];
    [q4]111/111,SRR[q4];
    [q4]1BB/1BB,LLS[q5];
    [q5]11B/11B,SLS[q5];
    [q5]1EB/1EB,SRS[q4];
    [q5]E1B/E1B,SLL[q6];
    [q6]E11/E11,SLL[q6];
    [q6]E1E/E1E,SLS[q6];
    [q6]EE1/EE1,SSL[q6];
    [q6]EEE/EEE,SRR[q7];
    [q7]E11/E11,SRR[q7];
    [q7]EB1/E11,SRR[q7];
    [q7]E1B/E1B,SLL[q8];
    [q7]EBB/EBB,SLL[q8];
    [q8]E11/E11,SLL[q8];
    [q8]E1E/E1E,SLS[q8];
    [q8]EE1/EE1,SSL[q8];
    [q8]EEE/EEE,RSS[q1]
    `
);

Builder.setFinalState("q10");

const Exponent = Builder.get();

export default Exponent;

// catatan :
// belum tepat ketika diberi input kasus x^0
// kasus lain sudah benar
