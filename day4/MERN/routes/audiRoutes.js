const router = require("express").Router();

const {Audi} = require("../persistence/models/audi.js");

router.get("/getAll", (req, res) => {
    Audi.find((error, audi) => {
        res.status(201).send(audi);
    });
});

router.get("/get/:id",(req, res) => {
    console.log(req.params.id);
    Audi.findById(req.params.id, (error, audi) => {
        res.status(200).send(audi);
    });
    
});

router.post("/post", (req, res, next) => {
    console.log(req.body);

    const audi = new Audi(req.body);
    const name = req.body.audiName;
    const colour = req.body.colour;
    const engine = req.body.engine;

    audi.save().then((result) => {
        res.status(201).send(`${result.audiName} added to the database.`);
    })
    .catch((error) => {
        if (typeof name === "undefined") {
            const nameErr = new Error("You need to enter a name for your audi");
            next(nameErr);
        } else if (typeof colour === "undefined") {
            const colourErr = new Error("You need to enter a colour for your audi");
            next(colourErr);
        } else if (typeof engine === "undefined") {
            const engineErr = new Error("You need to enter an engine for your audi");
            next(engineErr);
        } else {
            console.log (`${req.body.Audi} successfully created.`);
        }
    });
});


router.delete("/delete/:id", (req, res) => {
    Audi.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("audi deleted");
    });
});

router.put("/update/:id", (req, res) => {
    const body = req.body;
    const id   = req.params.id;
    console.log(body);
    console.log(id);
    res.status(201).send(`${id} was updated!`)
});

module.exports = router;