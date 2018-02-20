var fs = require("fs");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");

var twitKeys = keys["twitterKeys"];
var spotKeys = keys["spotofyKeys"];
var twitter = new Twitter(twitKeys);
var spotify = new Spotify(spotKeys);
