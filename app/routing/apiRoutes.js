app.get("/api/friends", function (req, res) {
    res.json(friendsList);
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    console.log(req.body);
    var newFriend = req.body;

    console.log(newFriend);
});
