// class to build operation object easier
class OOB {
    ObjectDiagram = {};
    tapeCount = -1;
    constructor(query) {
        this.ObjectDiagram = {
            state: {},
        };

        query
            .trim()
            .split(";")
            .forEach((transitionQuery) => {
                this.addState(transitionQuery);
            });
    }

    addState(transitionQuery) {
        // Extract values inside brackets [q0] and [q1], result is qn
        const regex = /\[(.*?)\]/g; // magic bruh

        const matches = transitionQuery.match(regex);

        const stateFrom = matches[0].substring(1, matches[0].length - 1);
        const stateTo = matches[1].substring(1, matches[1].length - 1);
        // Extract values separated by slashes and commas
        const [before, after, moveTapeto] = transitionQuery
            .replace(/\[.*?\]/g, "")
            .split(/[\/,]/)
            .map((value) => value.trim())
            .filter((value) => value !== "");
        // console.log(transitionQuery);
        if (!this.ObjectDiagram.state[stateFrom]) {
            this.ObjectDiagram.state[stateFrom] = {
                transitions: [],
                isFinal: false,
            };
        }
        // console.log(before);
        this.ObjectDiagram.state[stateFrom]["transitions"].push({
            before: before.split(""),
            after: after.split(""),
            tapeHeads: moveTapeto.split(""),
            nextState: stateTo,
        });

        if (this.tapeCount === -1) {
            this.tapeCount = moveTapeto.length;
        } else {
            if (this.tapeCount !== moveTapeto.length) {
                throw new Error("Tape count is not equal");
            }
        }
    }

    setFinalState(finalState) {
        if (!this.ObjectDiagram.state[finalState]) {
            this.ObjectDiagram.state[finalState] = {
                transitions: [],
            };
        }
        this.ObjectDiagram.state[finalState]["isFinal"] = true;
    }

    setFinalStates(finalStates) {
        finalStates.split(";").forEach((finalState) => {
            this.setFinalState(finalState);
        });
    }

    getMermaidDiagram() {
        let diagram = "stateDiagram-v2\n";
        let stateTrans = {};
        for (const state in this.ObjectDiagram.state) {
            diagram += state + "\n";
        }
        for (const state in this.ObjectDiagram.state) {
            let transitions = this.ObjectDiagram.state[state]["transitions"];
            transitions.forEach((transition) => {
                let before = transition["before"].join("");
                let after = transition["after"].join("");
                let tapeHeads = transition["tapeHeads"].join("");
                let nextState = transition["nextState"];
                let transitionString = `${before}/${after},${tapeHeads}`;
                if (!stateTrans[state]) {
                    stateTrans[state] = {};
                }
                if (!stateTrans[state][nextState]) {
                    stateTrans[state][nextState] = [];
                }
                stateTrans[state][nextState].push(transitionString);
            });
        }
        // map stateTrans to mermaid diagram
        for (const state in stateTrans) {
            for (const nextState in stateTrans[state]) {
                let transitions = stateTrans[state][nextState];
                diagram += `${state} --> ${nextState} : `;
                transitions.forEach((transition) => {
                    diagram += `${transition}\\n`;
                });
                diagram += "\n";
            }
        }

        return diagram;
    }

    get() {
        return this.ObjectDiagram;
    }
}

export default OOB;
