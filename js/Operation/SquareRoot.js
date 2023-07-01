import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
   `
   [q0]1BBB/1111,RSSR[q1];

   [q1]111B/111B,RSSS[q2];
   [q1]B11B/B11B,SRRS[q4];

   [q2]111B/111B,RSSS[q3];
   [q2]B11B/B11B,SRRS[q4];

   [q3]111B/111B,SSSS[q5];
   [q3]B11B/B11B,SRRS[q4];

   [q5]111B/111B,LLLS[q5];
   [q5]1BBB/1BBB,LSSS[q5];

   [q5]BBBB/BBBB,RRRS[q6];

   [q6]111B/111B,RSRS[q6];

   [q6]11BB/11BB,SRLS[q7];

   [q6]1BBB/1BBB,SSSS[q8];
   [q6]1B1B/1B1B/SSRS[q8];

   [q6]BBBB/BBBB,SSSS[q9];
   [q6]B11B/B11B,SSSS[q9];
   [q6]B1BB/B1BB,SSSS[q9];
   [q6]BB1B/BB1B,SSSS[q9];

   [q7]111B/111B,RSLS[q7];

   [q7]11BB/11BB,SRRS[q6];

   [q7]1BBB/1BBB,SSSS[q8];
   [q7]1B1B/1B1B/SSRS[q8];

   [q7]BBBB/BBBB,SSSS[q10];
   [q7]B11B/B11B,SSSS[q10];
   [q7]B1BB/B1BB,SSSS[q10];
   [q7]BB1B/BB1B,SSSS[q10];

   [q8]1B1B/1B1B,SSRS[q8];
   [q8]1BBB/1111,SSSR[q5];

   [q9]BBBB/BBBB,SSSS[q11];
   [q9]B11B/B11B,SSSL[q11];
   [q9]B1BB/B1BB,SRSL[q11];
   [q9]BB1B/BB1B,SSRL[q11];

   [q10]BBBB/BBBB,SSSS[q12];
   [q10]B11B/B11B,SSSL[q12];
   [q10]B1BB/B1BB,SRSL[q12];
   [q10]BB1B/BB1B,SSRL[q12];

   [q11]BBBB/BBBB,SSSS[q13];
   [q11]BBB1/BBB1,SSSS[q13];
   [q11]B111/B11B,SSSS[q13];
   [q11]B1B1/B1BB,SSSS[q13];
   [q11]BB11/BB1B,SSSS[q13];

   [q12]BBBB/BBBB,SSSS[q13];
   [q12]BBB1/BBB1,SSSS[q13];
   [q12]B111/B11B,SSSS[q13];
   [q12]B1B1/B1BB,SSSS[q13];
   [q12]BB11/BB1B,SSSS[q13]
   `
);

Builder.setFinalState("q4");
Builder.setFinalState("q13");

const SquareRoot = Builder.get();

export default SquareRoot;
