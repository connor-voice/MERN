//Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//DB Connect
mongoose.connect("mongodb://localhost:27017/cars", {useNewUrlParser: true},
(error) => {
    if(error) {
        console.log("Can't connect to DB");
    } else {
        console.log("connected to DB");
    }
});

//Listen server
const server_5015 = app.listen(5015, () => {
    console.log(`Server started on port: ${server_5015.address().port}`);
});