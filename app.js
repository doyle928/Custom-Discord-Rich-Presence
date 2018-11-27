const client = require("discord-rich-presence")("CLIENT ");
const http = require('http');

let currentLocation = "Main Menu";
const startDate = Date.now();
const locations = [
    "Night City - South Night City",
    "Night City - Heywood",
    "Night City - Westbrook",
    "Night City - Pacifica",
    "Night City - North Oak",
    "Night City - Rancho Coronado",
    "Night City - Underground",
    "Dynalar Technologies - Cyberware Department",
    "Night City - Police Department",
    "Coronado City Relic",
    "Network News 54 - Lobby",
    "Arasaka - Main Floor",
    "Gang Hideout",
    "First Contact",
    "Ripperdoc Lobby"
]

function randomInt() {
    return (Math.floor(Math.random() * 14) + 1);
}

function randomTime() {
    return (Math.floor(Math.random() * 600001) + 300000);
}

function test() {
    setInterval(function () {
        currentLocation = locations[randomInt()];
        console.log(currentLocation);
        client.updatePresence({
            details: currentLocation,
            startTimestamp: startDate,
            largeImageKey: "main",
            instance: true
        });
    }, randomTime());
    return currentLocation;
}

test();

client.updatePresence({
    details: currentLocation,
    startTimestamp: startDate,
    largeImageKey: "main",
    instance: true
});

http.createServer(function (req, res) {

}).listen(8080);