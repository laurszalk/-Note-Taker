const { Router } = require("express"); // vs code adds this line??
const router = require("express").Router();

const path = require("path");


// GET Route for feedback page
router.get("/notes", (req, res) =>
res.sendFile(path.join(__dirname, "../../public/notes.html"))
);

// GET Route for homepage
router.get("/", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//router.get("/api/notes", (req, res) => {});

//app.post()
//app.put(0)
//app.delete()

// Wildcard route to direct users to a 404 page
// use this last because they load in order
/*app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/404.html"))
);
*/

module.exports = router;
