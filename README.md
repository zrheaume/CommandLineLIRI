# CommandLineLIRI
Unit 10 Homework - Command line program that takes parameters to make different types of API calls to return information based on user input 

## Get Started:

To use the Command Line LIRI, clone this repository to to a directory and add a file named named .env

In the .env file, add the following lines:

    SPOTIFY_ID=< your spotify API ID >
    SPOTIFY_SECRET=< your spotify API Secret >

That's it! 
To use the command line LIRI, you must have node.js installed. In you command line, navigate to the directory to which you cloned this repository. Then, type:

    node liri {command} {query}

## Commands: 

### concert-this

The concert-this LIRI command accepts a band name and returns the band's next upcoming show, the venue name, and the location of the venue.

Enter:
    node liri concert-this "{band}"

Example: 
    ![ LIRI concert-this Example ](/images/concert-this-example.png)



### spotify-this-song

The spotify-this-song LIRI command accepts a song title and, assuming the title is known to spotify, returns the artist, a link to the track on spotify, and the album name.

Enter:
    node liri spotify-this-song "{song title}"

Example: 
    ![ LIRI spotify-this-song Example ](/images/spotify-this-example.png)


### movie-this

The movie-this LIRI command accepts a movie title and, assuming the movie has been catalogued in the Open Movie Database (OMDB), returns the release year, ratings, country of shooting, plot, and actors.

Enter:
    node liri movie-this "{movie title}"

Example:
    ![ LIRI movie-this Example ](/images/movie-this-example.png)










Find the secret command!