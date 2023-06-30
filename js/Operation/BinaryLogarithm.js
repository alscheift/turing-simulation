import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
    `
    [q0]BBB/EEE,SSS[q14];
    [q0]1BB/1BB,RSS[q15];
    [q15]BBB/BBB,SSS[q12];
    [q15]1BB/1BB,LSS[q1];
    
    [q1]EEE/EEE,SRS[q2];
    [q2]EBE/EBE,RSS[q3];
    [q2]E1E/E1E,RSS[q3];
    [q3]1BE/1BE,RSS[q4];
    [q4]1BE/11E,RRS[q3];
    [q3]BBE/BBE,LLS[q5];
    [q5]EEE/EEE,SSS[q6];
    [q6]EEB/EE1,SSL[q7];
    [q7]EEE/EEE,SSS[q8];
    [q8]1BE/1BE,LLS[q9];
    [q8]BBE/BBE,LLS[q9];
    [q9]EEE/EEE,RSS[q10];
    [q10]1EE/1EE,RSS[q11];
    [q11]BEE/BEE,RSS[q12];
    [q11]1EE/1EE,RRS[q13];
    [q13]EEE/EEE,SSS[q1];


    [q1]1BB/1BB,LLL[q1];
    [q1]BBB/EEE,SSS[q1];

    [q5]1BE/BBE,LLS[q5];
    [q5]11E/B1E,LLS[q5];
    [q5]1EE/BEE,LSS[q5];

    [q6]EEE/EEE,SSR[q6];
    [q6]EE1/EE1,SSR[q6];

    [q7]EE1/EE1,SSL[q7];

    [q8]EEE/EEE,RRS[q8];
    [q8]B1E/1BE,RRS[q8];

    [q9]BBE/BBE,LLS[q9];
    [q9]B1E/B1E,LLS[q9];
    [q9]1BE/1BE,LLS[q9];
    [q9]11E/11E,LLS[q9];
    [q9]BEE/BEE,LSS[q9];
    [q9]1EE/1EE,LSS[q9];
    [q9]E1E/E1E,SLS[q9];
    [q9]EBE/EBE,SLS[q9];

    `
);

Builder.setFinalState("q10");

const BinaryLogarithm = Builder.get();

export default BinaryLogarithm;
