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
var params = { screen_name: 'DevToyosi', count: 20 };

function whatToDo(){
  switch(command){
    case "my-tweets":
    showTweets(params);
    break;

    case "spotify-this-song":
    spotifyPlay(title);
    break;

    case "move-this":
    showMovie(title);
  }
}

//Displays last twenty tweets
function showTweets(params) {
  twitter.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        var tweets = tweets[i].text;
        var when = tweets[1].created_at;
        var index = time.indexOf("+");
        var timeTrim = time.slice(0, index);
        console.log("--------------------");
        console.log("tweet: " + tweets);
        console.log("Time Created: " + timeTrim);
        console.log("--------------------");

      }
    }
  });
}

//Displays Song info
function spotifyPlay(songName) {
  if (songName != "") {
    spotify.search({ type: 'track', query: songName }, functon(error, data)
      if(error) {
        return console.log('Error Occured: ' + error);
      }
      var songInfo = data.tracks.items[0];
      console.log("-----------------------");
      console.log("Artist: " + songInfo.artists[0].name);
      console.log("Song: " + songInfo.name);
      console.log("Preiew Link " + songInfo.external_urls.spotify);
      console.log("Album " + songInfo.album.name);
      console.log("-----------------------");
    });
  }else{
    spotify.search({ type: 'track', query: "The+Sign+ace+of+base"}, functon (err, data)
      if(error) {
        return console.log('Error Occured: ' + error);
      }
      var songInfo = data.tracks.items[0];
      console.log("Oops Can't find your song! Check out this oldie but goddie!");
      console.log("-----------------------");
      console.log("Artist: " + songInfo.artists[0].name);
      console.log("Song: " + songInfo.name);
      console.log("Preiew Link " + songInfo.external_urls.spotify);
      console.log("Album " + songInfo.album.name);
      console.log("-----------------------");
    });



    function showMovie(movieInfo) {
      var queryUrl = "http://www.omdbapi.com/?apikey=" + movieInfo + "&y=&plot=short&apikey=40e9cece";
      request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var movieOutput = JSON.parse(body);
          console.log("--------------------");
          console.log("Title: " + movieOutput.Title);
          console.log("Year: " + movieOutput.Year);
          console.log("Ratings: " + movieOutput.imdbRating);
          console.log("Rotten Tomatoes Ratings: " + movieOutput.Ratings[1].Value);
          console.log("Produced in: " + movieOutput.Country);
          console.log("Language: " + movieOutput.Language);
          console.log("Plot: " + movieOutput.Plot);
          console.log("Cast: " + movieOutput.Actors);
        }
      });
    };


//Take text from random.txt and use it to call commands
function doWhatItSays() {
  fs.readFile("randon.txt", "uft8", function (err, data) {
    if (!error) {
      results = data.split(",");
      spotifyThisSong(results[0], doWhatItSaysResults[1]);
    } else {
      console.log("Error Occured" + error);
    }
  });
};

// Output data to log.txt
function logIt(logData) {
  fs.appentFile("log.txt", logData, (error) => {
    if (error) {
      throw error;
    }
  });
};
