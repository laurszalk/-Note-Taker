// Create Router that grabs the APP instance
const router = require("express").Router();
//const uuid = require('uuid');
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// reference to our dataset
const db = require("../../db/db.json");

// ALL of these routes have the '/api' as a prefix
// This route is looking for "/api/notes" w/ GET HTTP Method
router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  // console.log(req);
  console.log("Body: ", req.body); // { title: "blah", text: "something"}
  // The req.body is our DATA ({ })

  // we can add important addtional info in a TEMP object
  let newData = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  //   console.log("new Data Object: ", newData);
  //   // What do we do with our new data?
  //   console.log("Current Data in DB: ", db);
  //   //console.log(typeof db)
  // add the new data
  db.push(newData);

  console.log("Added Data in DB: ", db);

  // save the updated DB.json file
  fs.writeFileSync("../../db/db.json", JSON.stringify(newData));

  //console.log(db)
  res.send("Hit route '/api/notes' POST method");
});

router.delete("/notes/:id", (req, res) => {
  // console.log(req);
  console.log("Params: ", req.params); // { id: "blah", text: "something"}
  res.send("Hit route '/api/notes' POST method");
});

module.exports = router;
