require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const Spotify = require("node-spotify-api");
const moment = require("moment");
const keys = require("/Users/zrheaume/Documents/02 Homework/LIRI/keys.js");
const spotify = new Spotify(keys.spotify);

// Declaring the action selector as being the first argument following the filepath in process.argv
// and the action target as being the second argument following the filepath.

//The action selector will be used in a switch to determine which function to call,
//and the action target is what will be passed into that function

var actionSelector = process.argv[2];
var actionTarget = process.argv[3]


var concertThis = function (artist) {
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL)
        .then(function (response) {
            let data = response.data[0];
            if (data === undefined) {
                console.log("Hmmm... That band name doesn't ring a bell.");
            }
            else {
                console.log("Date:      " + moment(data.datetime).format("MM/DD/YYYY"));
                console.log("Venue:     " + data.venue.name);
                console.log("Location:  " + data.venue.city + ", " + data.venue.region + ", " + data.venue.country);
            };
        })
        .catch(function (error) {
            console.log(error);
        })
};

var spotifyThis = function (song) {
    spotify.search({ type: "track", query: song })
        .then(function (res) {
            console.log("");
            console.log("=============================================================");
            console.log("");
            console.log("Track Name :          " + res.tracks.items[0].name);
            console.log("Artist Name :         " + res.tracks.items[0].artists[0].name);
            console.log("Spotify Track Link :  " + res.tracks.items[0].external_urls.spotify);
            console.log("Album Name :          " + res.tracks.items[0].album.name);
            console.log("");
            console.log("=============================================================");
            console.log("");

        })
        .catch(function (err) {
            console.log(err);
        });
};

var movieThis = function (title) {
    let queryURL = 'https://www.omdbapi.com/?apikey=trilogy&t=' + title;
    axios
        .get(queryURL)
        .then( function (response){
            console.log("");
            console.log("=============================================================");
            console.log("");
            console.log("Title:         " + response.data.Title);
            console.log("-------------------------------------------------------------")
            console.log("Release year:  " + response.data.Year);
            console.log("Ratings:");
            for (var a in response.data.Ratings){
            console.log("               " + response.data.Ratings[a].Value + " - " + response.data.Ratings[a].Source)
            };
            console.log("Country:       " + response.data.Country);
            console.log("Plot:          " + response.data.Plot);
            console.log("Actors:        " + response.data.Actors);
            console.log("");
            console.log("=============================================================");
            console.log("");
        })
        .catch(function(err){
            console.log(err);
        });
};

var defaultAction = function () {
    fs.readFile("random.txt","UTF8",function(err,res){
        if(err){
            console.log(err);
        }
        let resArr = res.split(",");
        actionSwitch(resArr[0],resArr[1]);
    })
};

var actionSwitch = function (actSel, actTar){
    switch (actSel) {
        case "concert-this":
            concertThis(actTar);
            break;
        case "spotify-this-song":
            spotifyThis(actTar);
            break;
        case "movie-this":
            movieThis(actTar);
            break;
        case "do-what-it-says":
            defaultAction();
            break;
    }
}

actionSwitch(actionSelector,actionTarget);

