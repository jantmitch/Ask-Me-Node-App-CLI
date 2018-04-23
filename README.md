# liri-node-app

This application works in node.js. It is similar to siri, but instead of being a speech-based application, it is language-based. It operates with Twitter, Spotify, and OMDB movie API's. Liri will return information based on user input after specific commands. 

# Getting Started

You will need to clone the repo to your local drive by going to this url: https://github.com/jantmitch/liri-node-app
Once the repo is cloned, you will be running all of the commands in your Mac terminal or Windows command line.

# Prerequisites

There are a few things you will need to get the application running. You will need to install a few npm packages to run the commands. When you have the repo cloned to your local drive, and you are in the git directory, these are the packages you will need to install:

npm install twitter
npm install node-spotify-api
node install request
node install dotenv

You will also need to create your own .env file with API keys for twitter, spotify, and OMDB.

# Running Application Test

You can run a test for the Twitter API by typing the command: node liri.js my-tweets. This will return the latest 20 tweets from specified account. It will look like this:

![image](https://user-images.githubusercontent.com/32659410/39075291-fb320bbc-44c2-11e8-83d8-d533a8136984.png)

You can run a test for the Spotify API by typing the command: node liri.js spotify-this-song followed by any song name. This will return the song name, artist, album, and a link to Spotify. It will look like this: 

![image](https://user-images.githubusercontent.com/32659410/39075400-68c6287a-44c3-11e8-98a3-1292ee4488fb.png)

You can run a test for the OMDB movie API by typing the command: node liri.js movie-this followed by the title of any movie. This will return the name of the movie, the year it was released, IMDB rating, Rotten Tomatoes rating, country it was produced in, the language of the movie, and the actors/actresses in the movie. It will look like this: 

![image](https://user-images.githubusercontent.com/32659410/39075496-ed51368e-44c3-11e8-8c4c-1e190d35d52f.png)

There is also a test that can be run to make sure that the 'random.txt' file is linked to the application. When at the command line the user can type: node liri.js do-what-it-says . This will apply the text in the 'random.txt' file and run it through one of the aforementioned tasks. It will look like this:




