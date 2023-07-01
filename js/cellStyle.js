const cellStyle = {
    head: "bg-purple-500 hover:bg-indigo-500 text-white -translate-y-0.5",
    standard: "bg-indigo-600 hover:bg-indigo-500 text-white",

    defaultAll:
        "px-6 py-2 font-mono font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg",

    getStyle(isHead) {
        const def = this.defaultAll + " ";
        return isHead ? def + this.head : def + this.standard;
    },
};

export default cellStyle;
