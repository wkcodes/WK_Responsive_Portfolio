// *** Dependencies
// =============================================================
var express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware that looks for files that match a route 
app.use(express.static("public/build"));

// Route
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Listen 
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });