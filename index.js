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

// reservation
// name, phone, email, id

// ROUTES 
// get table data
// set table data

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