var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var friendsList = require('../data/friends.js');
var apiRouter = express.Router();

apiRouter.use(bodyParser.urlencoded({ extended: false }));
apiRouter.use(bodyParser.json());

apiRouter.get("/api/friends", function (req, res) {
    res.json(friendsList);
});

apiRouter.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    console.log(req.body);
    var newFriend = req.body;
    console.log(newFriend);
    res.json(friendsList)
    
});

module.exports = apiRouter;
