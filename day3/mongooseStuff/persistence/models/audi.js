const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const favFoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: Number,
    typeOfFood: String
});

const audiSchema = new Schema({
    name: String,
    colour: String,
    rating: Number,
    isScary: Boolean,
    length: Number,

    favFood: [favFoodScheme],
    favToy: {
        name: String,
        cost: {
            type: Number,
            required: true,
            max: 15
        }
    },
    favNumbers: [Number]
});

const Audi = model("audi", audiSchema);

module.exports = {"Audi": Audi};