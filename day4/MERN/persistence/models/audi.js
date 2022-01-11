const mongoose = require("mongoose");

const {Schema, model} = mongoose;


const audiSchema = new Schema({
    audiName: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    engine: { 
        type: Number,
        requires: true
    }
});

const Audi = model("Audi", audiSchema);

module.exports = {"Audi": Audi};