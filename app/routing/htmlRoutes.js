var express = require('express');
var path = require("path");
var htmlRouter = express.Router();

// define the home page route
htmlRouter.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
// define the survey route
htmlRouter.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports = htmlRouter;