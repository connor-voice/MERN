//Imports
const express = require("express");
const cors = require("cors");

//Initialising
const app = express();
app.use(express.json());

//Middleware
app.use(cors());

const audiRoutes = require("./routes/audiRoutes.js");
const seatRoutes = require("./routes/seatRoutes.js");

//non nested middleware
app.use((req, res, next) => {
    console.log(new Date());
    next();
});

app.use("/audiRoutes", audiRoutes);
app.use("/seatRoutes", seatRoutes);


//Listen server
const server_5015 = app.listen(5015, () => {
    console.log(`Server started on port: ${server_5015.address().port}`);
    console.log("Hello World!");
});