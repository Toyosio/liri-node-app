//required Modules
var fs = require("fs");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api")
var tokens = require("./keys.js");
var output = require("./log.txt");
var log = require("log")

//tokens from keys file
var twitToken = keys["twitterToken"];
var spotToken = keys["spotofyToken"];
var twitter = new Twitter(twitToken);
var spotify = new Spotify(spotToken);

//commands
var command = process.argv[2];
var argument = process.argv.slice(3);
var title = args.join("+");
var params = {screen_name: 'DevToyosi', count: 20};

function whatToDo(){
  switch(command){
    case "my-tweets":
    myTweets(params);
    break;

    case "spotify-this-song":
    spotifyPlay(title);
    break;

    case "move-this":
    moveThis(title);
  }

}

//Take text from random.txt and use it to call commands
function doWhatItSays() {
  fs.readFile("randon.txt", "uft8", function(err, data){
    if (!error) {
      results = data.split(",");
      spotifyThisSong(results[0], results[1]);
    } else {
      console.log("Error Occured" + error);
    }
  });
};

// Output data to log.txt
function logIt(logData) {
  fs.appentFile("log.txt", logData, (error) => {
    if(error) {
      throw error;
    }
  });
};

//Displays last twenty tweets 
function showTweets(params) {
  twitter.get('statuses/user_timeline', params, function(error,tweets, response) {
    if(!error) {
      for (var i = 0; i < tweets.length; i++) {
        var tweets = tweets[i].text;
        var when = tweets[1].created_at;
        var index = time.indexOf("+");
        var timeTrim = time.slice(0, index);
        console.log("--------------------");
        console.log("tweet: "+tweets);
        console.log("Time Created: "+timeTrim);

      }
    }
  });
}
