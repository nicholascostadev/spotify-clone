# Spotify Clone
![spotify-clone-img](https://user-images.githubusercontent.com/86835927/151836854-33f6201c-22b7-4d8e-a38d-63023834702a.png)


# What's this App and what does it do?

The app is what it means on the title, it's a Spotify clone web app made with react. It doesn't have the functionalities of the real Spotify, but it can connect to your own Spotify account and get your own discover weekly songs and show on the songs list. What it does in the background is connect to the Spotify public API, get all the information needed and display it on the web app.

# How to use Locally

You need to run `yarn install` to get all the project dependencies and `yarn start` to start your local server

# Files that need to be changed:

You need first to create a app inside the developer Spotify, setup your redirectUri(basically where you want it to be deployed), and put it inside the `redirectUri` variable inside `spotify.js`(I've already set up for you guys who want to use on your local server using yarn start, localhost:3000).You must also update the clientId putting the one you got inside the developer Spotify app settings.

