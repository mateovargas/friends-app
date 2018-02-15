// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var html = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// RESERVATIONS (DATA)
// =============================================================

var friendsList = []; //stores list of possible.

// Routes
// =============================================================
// Route to html pages.
app.use("/", html);

//Route to api pages.
app.use("/", api);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
