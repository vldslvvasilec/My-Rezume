const pathToFiles = require("path");

module.exports = {
    entry: "./js/oneFile.js",
    output: {
        filename: "OneFile.js",
        path: pathToFiles.resolve(__dirname, "JsCompilation"),
    },
};
