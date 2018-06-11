gdpr-react-redux-starter
========================

#### Not ready to face the [GDPR🇪🇺](https://www.eugdpr.org/) yet? Use this starter app as a quick solution! Render different content to EU residents (or a simple "sorry, we're working on it" screen). This app knows from which IP address the user is coming and will render the component accordingly. All you have to do is fill up the component!

## Built with
* Node.js
* Express.js
* React.js/Redux
* ES6
* uses free [ipinfo.io API](https://ipinfo.io/). Consider getting the API token if you expect more than 1000 hits a day.
## Getting started
1. Clone and install
```
$ git clone https://github.com/Nukki/gdpr-react-redux-starter.git starter
$ cd starter
$ npm install
```
2. Run 
```
$ npm start 
```
In your browser go to `http://localhost:3000`.
Because you're running it on `localhost`, you will only be shown the "non-EU version", because 127.0.0.1 resolves as non-EU IP address. I'm working on a feasible way to test the "EU version" other than deploying it on heroku.

3. For development run each command in a **separate terminal window**
```
$ npm run start-watch
```

```
$ npm run build-watch
```
## About Components

There are three components in `app/components/` you should pay attention to.
* `<MainContainer />` in `MainContainer.js` decides which child to render. Feel free to style it
* `<EuropeanHome />` is rendered to users with EU IP address. `EuropeanHome.js` is where components(code) for EU residents will go
* `<Home />` is rendered to users with non-EU IP address. `RegularHome.js` is where components(code) for non-EU users will go


## Demo / PoC

### Here is what you will see after deplying this app on heroku:

1. Connect from IP address that belongs to EU
![alt text](screenshots/from_eu.png "Browser from EU")
***
***
2. Connect from IP address outside of EU 
![alt text](screenshots/not_from_eu.png "Browser from outside EU")
Feedback welcome!

## TODO
* Unit testing
* Refactor routing and redux, possibly with [`redux-little-router`](https://github.com/FormidableLabs/redux-little-router#wiring-up-the-boilerplate)

