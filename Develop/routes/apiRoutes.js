const router = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");

router.get('/notes', (req, res) => {
    var db = JSON.parse(fs.readFileSync("db/db.json"));
    console.log(db);
    //return res.json(db);

    res.json(db);
});

router.post('/notes', (req, res) => {
    var db = JSON.parse(fs.readFileSync("db/db.json"));
    console.log(db);

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }

    db.push(newNote);

    fs.writeFileSync("db/db.json", JSON.stringify(db));
    res.json(db);
    //return res.json(db);
});


module.exports = router;