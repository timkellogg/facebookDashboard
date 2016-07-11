'use strict';

const request = require('request-promise');
const FacebookService = require('./services/facebook');
const fs = require('fs');

let Credentials;

// handle environmental var loading better
try {
  Credentials = require('./secrets').Credentials;
} catch (err) {
  Credentials = process.env;
}

const errorMessage = 'Something went wrong with Facebook credentials';
const ROOT_URL = 'https://graph.facebook.com/v2.6/';

module.exports = function(app) {
  app.get('/facebook', function(req, res) {
    request(ROOT_URL + Credentials.account_id + '/ads?fields=name%2Cstatus%2Ccampaign_id&access_token=' + Credentials.access_token, function(err, response, body) {
      const ads_response = response.body;

    }).then(function(ads_response) {
      request(ROOT_URL + Credentials.campaign_id + '/insights?fields=campaign_id%2Cimpressions%2Creach%2Cfrequency%2Ccpm%2Cspend%2Cctr%2Ccost_per_inline_link_click%2Cactions%2Ccost_per_action_type%2Ccall_to_action_clicks&access_token=' + Credentials.access_token, function(err, response, body) {

        if (!err && response.statusCode == 200) {
          const metrics_response = JSON.parse(response.body);

          const joined_response = FacebookService.process({
            ads: JSON.parse(ads_response),
            metrics: metrics_response
          });

          res.status(200).send({ data: joined_response });
        } else {
          res.status(500).send({ error: errorMessage });
        }
      });
    }).catch(function(err) {
      res.status(500).send({ error: err });
    });
  });
}
