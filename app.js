const {
    questions,
    latest
} = require("./functions");

const top = require("./top");

// questions("nodemon")
// .then(console.log)
// .catch(console.log);

// latest("http error 404")
// .then(console.log)
// .catch(console.log);

top()
.then(console.log)
.catch(console.log);