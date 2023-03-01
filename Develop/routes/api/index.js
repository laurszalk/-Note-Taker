// Create Router that grabs the APP instance
const router = require("express").Router();
//const uuid = require('uuid');
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// reference to our dataset

// ALL of these routes have the '/api' as a prefix
// This route is looking for "/api/notes" w/ GET HTTP Method
router.get("/notes", (req, res) => {
  //readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));

  const db = require("../../db/db.json");

  fs.readFile("./db/db.json", "utf-8", function (error, data) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(data);
    console.log(typeof data);
    res.json(db);
  });

  /*fs.readFile("./db/db.json").then((data) => {
    console.log(data);
    res.json(JSON.parse(data))
  });
  */
  // res.json(db);
});

router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data); // this data is JSON

    // CONVERT THE DATA OBJECT TO A JS ARRAY
    let storedData = JSON.parse(data);

    console.log(storedData); // this is an JS ARRAY
    console.log(typeof storedData);

    // create temp data object
    let newData = {
      id: 12,
      title: req.body.title,
      text: req.body.text,
    };
    // ADD DATA to
    storedData.push(newData);

    fs.writeFile("./db/db.json", JSON.stringify(storedData), function (err) {
      if (err) throw err;

      console.log("Success");
      // JUST SEND AN EMPTY RESPONSE --> THE CLIENT SIDE SHOULD THEN RETRIGGER A PAGE RELOAD AUTOMATICALLY
      res.json();
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  // console.log(req);
  console.log("Params: ", req.params); // { id: "blah", text: "something"}

  // we do simlar to POST route
  // BRING in the dataset

  // Filter through and remove the matching ID (req.params.id) (UDPATE DATASET)

  // SAVE the new dataset without the deleted record
  res.send("Hit route '/api/notes' POST method");
});

module.exports = router;
