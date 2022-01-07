const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.get("/get", logger, (req, res) => {
    console.log("Request away");
    res.send("see if the logger worked");
});



const server_5015 = app.listen(5015, () => {
    console.log(`Server started on port: ${server_5015.address().port}`);
    console.log("Hello World!");
});