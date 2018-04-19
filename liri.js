
require("dotenv").config();


var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");


var Twitter = require('twitter');
var Spotify = require('node-spotify-api');;

var twitterKeys = (keys.twitter);
var spotifyKeys = (keys.spotify);


var userInput = process.argv[2];
var nodeArgs = process.argv;

var searchName = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        searchName = searchName + "+" + nodeArgs[i];
    }
    else {
        searchName += nodeArgs[i];
    }
}


function twitter() {
    if (userInput === "my-tweets") {
        var client = new Twitter(twitterKeys);

        var params = { screen_name: 'heyyo_mitch', count: 20 };

        client.get('statuses/user_timeline', params, function (error,
            tweets, response) {
            for (i = 0; i < tweets.length; i++) {
                if (error) {
                    throw error;
                }
                else if (tweets) {
                    console.log("--------------------");
                    console.log(tweets[i].created_at);
                    console.log(tweets[i].text);
                    console.log("--------------------");
                }

                else {
                    console.log("Enter a command to move forward!")
                }

            }
        });
    }
}
twitter();


function spotify() {
    var songName = searchName;

    if (userInput === "spotify-this-song" && songName) {
        var spotify = new Spotify(spotifyKeys);


        spotify.search({ type: 'track', query: songName }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {

                console.log("Song: " + data.tracks.items[0].name);
                console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                console.log("Album Name: " + data.tracks.items[0].album.name);
                console.log("Link from Spotify: " + data.tracks.items[0].album.external_urls.spotify);
            }

        });
    }
}
spotify();


function movieSearch() {
    var movieTitle = searchName;

    if (userInput === "movie-this" && movieTitle) {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                console.log("Movie Title: " + JSON.parse(body).Title);
                console.log("Released: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Produced in: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            } else {
                var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy";
            }
        })
    }
}
movieSearch();


function doCommand() {
    if (userInput === "do-what-it-says")

        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }

            var txtArray = data.split(",")
            userInput = txtArray[0];
            searchName = txtArray[1];
            spotify();

        })
}

doCommand();







