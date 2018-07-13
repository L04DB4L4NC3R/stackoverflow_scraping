const {
    questions,
    latest
} = require("./functions");


// questions("nodemon")
// .then(console.log)
// .catch(console.log);

latest("nodemon")
.then(console.log)
.catch(console.log);
