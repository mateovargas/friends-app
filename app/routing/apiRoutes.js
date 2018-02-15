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
    var newFriend = req.body;
    

    var totalDifferenceMin = 10000;
    var closestFriend = "";

    friendsList.forEach(function(friend){

        var totalDifference = 0;

        for(var i = 0; i < friend.scores.length; i++){
            totalDifference = totalDifference + Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
        }

        if(totalDifference < totalDifferenceMin){

            totalDifferenceMin = totalDifference;
            closestFriend = friend;

        }
        

    });

    friendsList.push(newFriend);
    res.json(closestFriend);
    
});

module.exports = apiRouter;
