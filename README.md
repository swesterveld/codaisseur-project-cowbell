# Project Cowbell

Cowbell is the working title of the project we've been working on during Codaisseur Academy's 1st project week.
The assignment was to collaborate in a team to design and build a Tinder-like web-app with React and Redux.
Our team consisted of one designer from Codaisseur Design Academy and two developers from Codaisseur Code Academy.
As a team we came up with the idea to create a solution for matching of musicians and bands.

## Scope of the project

Due to time-constraints, and limited experience, we have decided to limit the scope of our project and limit the amount of features to implement.
Besides that, for the sake of simplicity we've taken into account a couple of assumptions to prevent for ballooning scope.

1. A musician can be part of one band at max. Meaning:
    * A musician with no bands is *looking for a band*.
    * A musician with one band is *not looking for a band*.
2. A musician who is looking for a band will get recommendations for bands to (dis)like.
3. A musician who is already part of a band will get recommendations for musicians to (dis)like as a new member of his/her band.
    * The musician will (dis)like other musicians *on behalf of* his/her band
    * ...

## Demo

![gif-1](readme-images/cowbell-1.gif)

# Technical notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
