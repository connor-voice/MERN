const { Audi } = require("../../persistence/models/audi");
const audi = require("../../persistence/models/audi");

const router = require("express").Router();

const clog = (req, res, next) => {
    console.log(req.params.name);
    next();
}

router.get("/getall", (req, res) => {
    Audi.find((error, audis) => {
        res.status(200).send(audis);
    });
})


router.get("/get/:id", (req, res) => {
    console.log(req.params.id);
    Audi.findById
})

router.get("/getByName/:name", clog, (req, res) => {
    res.status(202).send("connected");
})

router.get("/get/:id", (req, res) => {
    console.log(req.params.id);
    res.status(202).send(`document of ${req.params.id} requested`);
});


router.post("/post", (req, res) => {
    const body = req.body;
    console.log(body);

    const audi = new Audi(req.body);

    audi.save().then((result) => {
        res.status(201).send(`${result.audiName} added to database`);
    })
})

router.put("/put/:id", (req, res) => {
    
    console.log(req.params.id);
    console.log(req.body);
    res.status(202).send(`connected and sent with ID of ${req.params.id}`);
});


router.delete("/delete/:id", (req, res) => {
    res.status(202).send("File deleted");
    console.log(req.id);
});

router.delete("/delete/:id", (req, res) => {
    Audi.findByIdAndDelete(req.params.id, (error) => {
        res.status(204);
    });
});

module.exports = router;
