This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Daniel's Weather App

## Setup Instructions

### Requirements

1. Node v10 or later;
2. NPM or Yarn
3. API Key from [apixu](https://www.apixu.com/)

### Installation

1. `git clone https://github.com/danielmarcgardner/weather-app.git`
2. `cd weather-app`
3. `npm install`
4. `touch .env`
5. Add `REACT_APP_API_KEY= API KEY HERE` to .env
6. `npm start`
7. Visit app at [localhost:8000](http://localhost:8000/) (with the new React scripts on occasion it is necessary to reload the page in development mode when it first loads)

### Scripts

`npm start` - Start the application in development mode

`npm run build` - Build a production version of the application

`npm run lint` - Run the linter

`npm run lint:sass` - Run the SASS linter

`npm run lint:all` - Runs all the linters

`npm test` - Run the application tests

`npm run test:coverage` - Run the test coverage


### Usage

When a user visits the application they are met with a welcome page. The user can enter in the zip code for as many zips they would like to see the weather for. Each zip code will update its weather every 5 minutes. The user can click on a zip code to be taken to another page where they will see the 5 day forecast. On any of those 5 days the user can click on them and see more information about the day.
