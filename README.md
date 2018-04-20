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

#Running Application Test

You can run a test for the Twitter API by typing the command: node liri.js my-tweets. This will return the latest 20 tweets from specified account. It will look like this:





