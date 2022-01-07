const router = require("express").Router();

const clog = (req, res, next) => {
    console.log(req.params.name);
    next();
}

router.get("/getall", (req, res) => {
    res.status(202).send("connected");
})


router.get("/getByName/:name", clog, (req, res) => {
    res.status(202).send("connected");
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
