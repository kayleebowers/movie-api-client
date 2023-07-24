# myFlix

## Project Description
The Movie API client uses React to build the client-side for a Single Page Application called myFlix based on its [existing server-side code](https://github.com/kayleebowers/movie-api), which contains a REST API and MongoDB database.

### Key Features
* Users can register and log in to myFlix
* Users can view a list of all movies by visiting the app's homepage
* Users can search for any movie by title in the navigation bar
* Users can access different app views via the navigation bar
* By clicking on the Learn More button, users can see detailed information about a single movie
* Each single movie has similar movies recommended by the matching genre
* Users can add or remove movies from their favorites by clicking on the heart buttons in the movie cards
* Users can view their favorite movies in the profile view
* Users can update their user information in the profile view
* Users can delete their accounts in the profile view
* Users can log out of their accounts

## Getting the Project Running
The application is hosted on Netlify and can be [viewed there](https://myflix22.netlify.app/). 

The application files can also be downloaded and viewed by using the following command in the terminal: `parcel [Path to index.html]`. In this case, you would use the entry point `parcel src/index.html`. If the parcel command is not recognized, add  `npx parcel src/index.html`.

## Dependencies
* Bootstrap
* Prop-Types
* React
* React-Animated-Heart
* React-Bootstrap
* React-Dom
* React-Router

## Screenshots
### Homepage
[![Homepage.png](https://i.postimg.cc/CLxWqXw1/Homepage.png)](https://postimg.cc/BtRYWhL9)

### Single movie view with movies recommended by genre
[![Movie-View.png](https://i.postimg.cc/XYFxGkBq/Movie-View.png)](https://postimg.cc/JsrjSJqC)

### Profile view displaying favorite movies and user information
[![Profile-view.png](https://i.postimg.cc/C1KjNG5j/Profile-view.png)](https://postimg.cc/jWGwqJz5)
[![User-information.png](https://i.postimg.cc/GpXDH4K9/User-information.png)](https://postimg.cc/p9nrSXgt)
