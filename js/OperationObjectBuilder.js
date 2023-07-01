// class to build operation object easier
class OOB {
    ObjectDiagram = {};
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
    }

    setFinalState(finalState) {
        if (!this.ObjectDiagram.state[finalState]) {
            this.ObjectDiagram.state[finalState] = {
                transitions: [],
            };
        }
        this.ObjectDiagram.state[finalState]["isFinal"] = true;
    }

    get() {
        return this.ObjectDiagram;
    }
}

export default OOB;
