const router = require("express").Router();

const cLog = (req, res, next) => {
    console.log(req.params.name);
}

router.get("/getall", (req, res) => {
    res.status(202).send("connected");
    console.log(req.params.name);
})

router.get("/getBy/:name", (req, res) => {
    res.status(202).send("connected");
    console.log(req.params.name);
})

// request
router.post("/post", (req, res) => {
    res.status(201).send("connected");
    const body = req.body;
    console.log(body);
})

router.put("/put/:id", (req, res) => {
    res.status(202).send("connected");
    console.log(req.params.id);
    console.log(req.body);
});


router.delete("/delete/:id", (req, res) => {
    res.status(202).send("File deleted");
    console.log(req.id);
});


module.exports = router;