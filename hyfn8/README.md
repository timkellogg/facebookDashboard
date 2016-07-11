# Overview

This is my submission to Hyfn8 code challenge.

I took a bit of a different approach which consisted of three parts:

1. Facebook ad campaign.
2. Node.js server
3. React/Redux client

Instead of using the mocked data, I decided to run an actual Facebook ad campaign because I thought it would be interesting to see real data instead of using the mocked data. I also wanted more experience working with Facebook's API. Setting this up actually took more time than I thought because it required having a lot of permissions in place!

I ended up making a business account on Facebook, an ad account with a system user and running the ad campaign for a business page. I then built a node server that queried that data via the /insights and /ads Marketing API endpoints. (I couldn't find the ads_metrics API endpoint listed in the documentation). I read that data in the node server and cleaned out the relevant endpoints (which were slightly different because the /insights endpoint didn't provide some of the requested params). I also ended up putting more logic in the server because I didn't want to expose my API keys in the browser and on github. As such, I have a full suite of tests for the server because that does most of the heavy lifting.

(The server is hosted on heroku at https://sleepy-temple-18675.herokuapp.com/facebook).

The client portion of the app I wrote in React/Redux because I felt using Redux made the decisions around data more predictable and cleaner without adding much overhead. For example, Redux Promise enables a reducer to be called with just a line of code and the middleware will resolve it without actually needing to manually handle resolving it.

I didn't finish writing/fixing tests for the client portion. Right now, the specs fail because I'm not mocking my server data but I know that is valid because of the other tests I've written on the backend.

# Running the App

To run the app, you just need to get the client portion running because the server is already hosted. However, they can both run locally too.

## Client

### Running:
1. `cd client`
2. `npm install`
3. `npm start`
4. Navigate to `localhost:8080`

Now you should be able to read in my data from the node server.

### Testing (not finished):
1. `cd client`
2. `npm run test:watch`

## Server
If you want to run the server locally, you will have to setup the ad campaign access on Facebook with a valid business.

### Running:
1. `cd server`
2. `npm install`
3. make a `./secrets.js` file with something that looks like:

```javascript
exports.Credentials = {
  account_id: #############
  access_token: ############
  campaign_id: #############
}
```

4. `npm start`
5. Navigate to `localhost:3090/facebook` (don't need to but that's where the data is served from) where you should see some json

### Testing:
1. `cd server`
2. `npm run test`

Production Sites I've build recently:
* [Your State on Welfare](http://features.marketplace.org/yourstateonwelfare/)
* [Price of Profits](http://features.marketplace.org/priceofprofits/)

Repos I've pround of:
* [Node Twitterbot](https://github.com/timkellogg/tweetsec)
* [Rails Yelp clone](https://github.com/timkellogg/joerator-rails)

[Portfolio](http://kelloggwebstudio.com/)

Thanks!
Tim
