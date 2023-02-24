const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", api); // configures all the routes

// GET Route for homepage
app.get("/", (req, res) => {
  console.log(req)
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET Route for feedback page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get('/api/notes', (req, res) => {
  
})

//app.post()
//app.put(0)
//app.delete()

// Wildcard route to direct users to a 404 page
// use this last because they load in order
/*app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/404.html"))
);
*/

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
