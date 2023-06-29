import OOB from "../OperationObjectBuilder.js";

const Builder = new OOB(
   `
   [q0]1BB/11B,RRS[q0];
   [q0]0BB/00B,RRS[q0];

   [q0]XBB/XBB,RSS[q1];

   [q1]1BB/1BB,SLS[q2];
   [q1]0BB/0BB,SLS[q2];

   [q1]BBB/BBU,SSR[q6];

   [q2]11B/11B,RLS[q2];
   [q2]10B/10B,RLS[q2];
   [q2]01B/01B,RLS[q2];
   [q2]00B/00B,RLS[q2];

   [q2]B1B/B1B,LSS[q3];
   [q2]B0B/B0B,LSS[q3];

   [q2]1BB/1BB,SSS[q6];
   [q2]0BB/0BB,SSS[q6];
   [q2]BBB/BBB,LRS[q6];

   [q3]11B/111,SSR[q4];
   [q3]10B/100,SSR[q4];
   [q3]01B/010,SSR[q4];
   [q3]00B/001,SSR[q4];
   
   [q4]11B/11B,LLS[q4];
   [q4]10B/10B,LLS[q4];
   [q4]01B/01B,LLS[q4];
   [q4]00B/00B,LLS[q4];

   [q4]1BB/1BB,SSS[q6];
   [q4]0BB/0BB,SSS[q6];
   [q4]XBB/XBB,RRS[q6];

   [q4]X1B/X1B,RSS[q5];
   [q4]X0B/X0B,RSS[q5];

   [q5]11B/111,SSR[q2];
   [q5]10B/100,SSR[q2];
   [q5]01B/010,SSR[q2];
   [q5]00B/001,SSR[q2];

   [q6]1BB/1BB,SSS[q7];
   [q6]0BB/0BB,SSS[q7];
   [q6]BBB/BBB,SSS[q7];
   [q6]11B/111,SSS[q7];
   [q6]10B/100,SSS[q7];
   [q6]01B/010,SSS[q7];
   [q6]00B/001,SSS[q7]
   `
);

Builder.setFinalState("q7");

const Division = Builder.get();

export default Division;
