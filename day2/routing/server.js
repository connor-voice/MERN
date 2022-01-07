const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const audiRoutes = require("./routes/audiRoutes.js");
const seatRoutes = require("./routes/seatRoutes.js");

app.use("/audiRoutes", audiRoutes);
app.use("/seatRoutes", seatRoutes);


const server_5015 = app.listen(5015, () => {
    console.log(`Server started on port: ${server_5015.address().port}`);
    console.log("Hello World!");
});