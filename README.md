# Project 2

## Overview

This was a two-day paired hackathon project as part of the Software Engineering Immersive course at General Assembly London. 
The assignment was to build a React application that consumed a public API. 

We chose to create a Pokédex style app that consumed the Poke-API. 

## Built with 

- HTML 
- CSS 
- Bulma 
- JavaScript 
- React 
- Axios
- React-Loader-Spinner
- React-Notify-Toast
- React-Router-Dom
- Git 
- GitHub 

## Deployment 

You can view the deployed app here

## Process 

After searching for API's we decided to use the Poke-API as it contained a lot of nested data and we wanted to challenge ourselves. 
We decided to make a Pokédex-style app that would show all of the Pokémon as an index and then the user could look at each Pokémon in more detail. 

- We created a simple set of wireframes for each of our pages 
- Wrote out the pseudo code 
- Planned the router 
- Planned the styling with Bulma and SCSS 

## Homepage 

We decided to have a landing page that gave a simple but striking design. 
It allowed us to work more with Bulma on creating impactful visuals. 

## Index

The Poke-Api contains a vast amount of data, often nested several layers deep. 
For the index page we only needed the name and the image. However, the image link is not directly available from the GET endpoint for all Pokémon. So, we had to create a workaround that used data from the available data to pull an image from a separate Pokémon image hosting site. 

![Javascript-code](/readMeAssets/imageGrabber.png?raw=true)

Each card in the index is its own component that that links to the detail page of each Pokémon
lazy loading was added as there are 798 Pokémon currently available!

## Detail Page 

Due to the data structure of the api, two axios requested were needed to get all the information needed. 
![Javascript-code](/readMeAssets/doubAxio.png?raw=true)

Each Pokemon loads on a card - the background of which is dynamically coloured based on its primary typing. 
For the Pokédex entry, the api returns every Pokédex entry for that Pokemon available across all languages, and there is no set order to this. This required a bit of a fix to manipulate the returned data to always return an English option. 

![Javascript-code](/readMeAssets/englishOnlyFilter.png?raw=true)

### The Shiny Option 

Once of my favourite parts about playing Pokemon is finding their alternate coloured shiny Pokemon and we wanted to include this in our details page. 

Clicking this generates a random number between 1 - 4, if the number is 4 you gain access to the shiny version of the show page. This changes the sprite and name and allows a user to browse the shiny versions of the Pokemon by clicking the next button.

We used toast notifications here to improve the user experience for a failed attempt. 

![Javascript-code](/readMeAssets/shinyLuck.png?raw=true)

(The real shiny odds in the games are usually 1/4,096 - we considered this to be an uninviting prospect in terms of UX)


## Common Components 

### Nav Bar 

We wanted to include a nav bar component that allowed easy navigation. We also hope to add new features to the page in the future and the nav bar would be important for that. 

### Loading Screen

A pulsating red circle appears in the top corner of the page when it's loading to show users that it's not a broken page. Due to the small size of the data pulled onto the page, even with strong throttling this can be hard to keep on screen for a full animation cycle. 

![Javascript-code](/readMeAssets/loadingWidget.png?raw=true)


### Error Page 

We also built an error screen to compliment the loading screen. If there is an error in retrieving data from the api, the user is shown the error component. 

![Javascript-code](/readMeAssets/errorMessage.png?raw=true)

Both the error and loading components are set in state. This makes it impossible for the user to see more than one state at any one time. 

![Javascript-code](/readMeAssets/stateShow.png?raw=true)


## Challenges Encountered

- Managing the nested data and size of responses from the Poke Api
- Working with multiple axios requests on a single page 

## Wins 

- Mobile responsive design 
- Working with such a complicated api
- Working efficiently in a pair

## Known Bugs 
- Lazy loading doesn't work as well as hoped 

## Future Improvements 

We underestimated the challenges that a complex api threw at us so the improvements are largely based on that. 
- With more time we'd like to work out a more elegant solution for loading the images. 
- Adding Pokemon Forms route for the Pokemon with forms 

