// class to build operation object easier
class OOB {
    ObjectDiagram = {};
    constructor(query) {
        this.ObjectDiagram = {
            state: {},
        };
        query.split(";").forEach((transitionQuery) => {
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
            .split(/[\/,]/g)
            .filter((value) => value !== "");

        this.ObjectDiagram.state[stateFrom] = {
            transitions: [],
            isFinal: false,
        };

        this.ObjectDiagram.state[stateFrom]["transitions"].push({
            before: before.split(""),
            after: after.split(""),
            tapeHeads: moveTapeto.split(""),
            nextState: stateTo,
        });
    }

    setFinalState(state) {
        this.ObjectDiagram.state[state]["isFinal"] = true;
    }

    get() {
        return this.ObjectDiagram;
    }
}

export default OOB;
