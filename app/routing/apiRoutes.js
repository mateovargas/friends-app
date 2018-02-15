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
    console.log('Adding: \n');
    console.log(newFriend);
    

    var totalDifferenceMin = 10000;
    var closestFriend = "";

    friendsList.forEach(function(friend){
        console.log('Friend is currently: \n');
        console.log(friend);
        console.log('\n');
        var totalDifference = 0;

        for(var i = 0; i < friend.scores.length; i++){
            console.log('totalDifference is ' + totalDifference.toString() + '\n');
            totalDifference = totalDifference + Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
            console.log('totalDifference is now: ' + totalDifference.toString() + '\n');
        }

        if(totalDifference < totalDifferenceMin){

            totalDifferenceMin = totalDifference;
            closestFriend = friend;
            console.log('Closest friend is: ' + closestFriend + '\n');
        }
        

    });

    console.log('Sending back: ' + closestFriend+ '\n');
    friendsList.push(newFriend);
    res.json(closestFriend);
    
});

module.exports = apiRouter;
