// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// restuarant variables
const reservationArr = [
    {
        name: "Name",
        phone: "123",
        email: "a@a.com",
        id: 123
    }
];

const waitListArr = [
    {
        name: "Hungry",
        phone: "456",
        email: "a@a.com",
        id: 456
    }
];

// display home
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// enter a new reservation request
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// enter a new reservation request
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/reserved", function(req, res){
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservationArr.push(newReservation);
  
    res.json(newReservation);
  });

// display views: waitlist
app.get("/api/wait", function (req, res) {
    return res.json(waitListArr);
});

// display views: current reservations
app.get("/api/reserved", function (req, res) {
    return res.json(reservationArr);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});