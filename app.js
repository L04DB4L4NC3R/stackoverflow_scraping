const {
    questions,
    latest
} = require("./functions");

const top = require("./top");

top()
.then(console.log)
.catch(console.log);
