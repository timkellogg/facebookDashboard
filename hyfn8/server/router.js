const request = require('request-promise');
const FacebookService = require('./services/facebook');
const Secrets = require('./secrets');
const access_token = Secrets.access_token;
const account_id = Secrets.account_id;
const campaign_id = Secrets.campaign_id;
const errorMessage = 'Something went wrong with Facebook credentials';
const ROOT_URL = 'https://graph.facebook.com/v2.6/';

module.exports = function(app) {
  app.get('/facebook', function(req, res) {
    request(ROOT_URL + account_id + '/ads?fields=name%2Cstatus%2Ccampaign_id&access_token=' + access_token, function(err, response, body) {
      const ads_response = response.body;

    }).then(function(ads_response) {
      request(ROOT_URL + campaign_id + '/insights?fields=impressions%2Creach%2Cfrequency%2Ccpm%2Cspend%2Cctr%2Ccost_per_inline_link_click%2Cactions%2Cunique_actions%2Ccost_per_action_type%2Ccampaign_id&access_token=' + access_token, function(err, response, body) {

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
