# Movie Rating Finder

## What is the use of this Repo

This Project demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Semantic UI along with React
5. Creating Reusable Components

The project Template can be used to build bigger projects

## Live Application URL

### https://movies-rating-finder.netlify.app/
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://movies-rating-finder.netlify.app/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **App** Component : This Component displays a list of movies when the user searches for movies. This Component gets the data from a pubic api https://www.themoviedb.org/

2. **Movie** Component : This Component creates the movie card that is displayed on App Component. It gives rating it fetches from the public api. This Component is the Child Component of *App* Component

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
