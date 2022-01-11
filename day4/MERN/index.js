const express = require("express");
const cors = require("cors");
const audiRoutes = require("./routes/audiRoutes.js");

const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/car" , {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log("Cant connect to DB :( ");
    } else if (!error) {
        console.log("Connected to DB :D ");
    }
});

// Use routes
app.use("/audi", audiRoutes);


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});



// Listen server
const server = app.listen(5015, () => {
    console.log(`Server started! on port ${server.address().port}`);
});

module.exports = server;