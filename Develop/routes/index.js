// Create Router that grabs the APP instance 
const router = require('express').Router();

// reference to our dataset 
const db = require('../db/db.json');

// ALL of these routes have the '/api' as a prefix
router.get('/notes', (req, res) => {
   // res.send("Hit route '/api/notes' ");

    // we want to READ (fs module) in our dataset(db.json)

    // Possibly convert the data

    // RESPOND with that data (send the data to the client)
    res.json(db);
});

router.post('/notes', (req, res) => {
    console.log(req)
    console.log("Body: ", req.body);  // { title: "blah", text: "something"}
    res.send("Hit route '/api/notes' POST method");
});

router.delete('/notes', (req, res) => {
    console.log(req)
    console.log("Params: ", req.params);  // { title: "blah", text: "something"}
    res.send("Hit route '/api/notes' POST method");
});


module.exports = router;