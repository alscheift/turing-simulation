const cellStyle = {
    head: "border-blue-500 bg-red-500 hover:bg-blue-500 text-white",
    standard: "border-blue-500 bg-blue-600 hover:bg-red-500 text-white",

    defaultAll:
        "border-2 px-6 py-2 font-mono font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg",

    getStyle(isHead) {
        const def = this.defaultAll + " ";
        return isHead ? def + this.head : def + this.standard;
    },
};

export default cellStyle;
