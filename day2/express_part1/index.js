const express = require('express');
const { clearScreenDown } = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const app = express();
app.use(express.json());

// get request
app.get("/hello", () => {
    console.log("item added");
    return console.log("site found");
});

app.get("/get/:name", (req, res) => {
    res.status(202).send("connected");
    console.log(req.params.name);
})

// query 
app.get("/search/", (req, res) => {
    res.status(200).send("connected");
    console.log(req.query);
}); 


// request
app.post("/post", (req, res) => {
    res.status(201).send("connected");
    const body = req.body;
    console.log(body);
})

app.put("/put/:id", (req, res) => {
    res.status(202).send("connected");
    console.log(req.params.id);
    console.log(req.body);
});


app.delete("/delete/:id", (req, res) => {
    res.status(204).send("connected");
    console.log(req.id);
});














const server_5015 = app.listen(5015, () => {
    console.log(`Server started on port: ${server_5015.address().port}`);
    console.log("Hello World!");
});

const server_5016 = app.listen(5016, () => {
    console.log(`Server started on port: ${server_5016.address().port}`);
    console.log("Hello World!");
});

const server_5017 = app.listen(5017, () => {
    console.log(`Server started on port: ${server_5017.address().port}`);
    console.log("Hello World!");
});