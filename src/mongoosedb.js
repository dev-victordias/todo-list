const mongoose = require("mongoose");

const user = "admin";
const password = "LVluNWXAgTLR7KR8";
const database = "todo_sample";
const serverName = "cluster0.sqp4kp0.mongodb.net";

module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb+srv://${user}:${password}@${serverName}/${database}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then((res) => console.log(`Connection Successful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
};
