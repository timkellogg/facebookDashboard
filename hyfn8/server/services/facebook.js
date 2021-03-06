'use strict';

module.exports = {
  /**
    * Method that handles the merging of ads and campaign information
    * TODO: convert imperative style to functional
  */
  process: function(unprocessed_data) {
    if (unprocessed_data == null) return [];

    let processed_data = [];

    try {
      unprocessed_data.metrics.data.forEach(function(metric) {
        let metric_object = {};

        // TODO: refactor!
        for (let prop in metric) {
          if (prop == 'campaign_id') {
            unprocessed_data.ads.data.forEach(function(ad) {
              if (ad.campaign_id == metric[prop]) {
                return metric_object['ad_name'] = ad.name;
              }
            });
          } else if (prop == 'actions') {
            metric_object['actions:link_click'] = metric[prop][0].value;
          } else if (prop == 'cost_per_action_type') {
            metric_object['cost_per_action_type:link_click'] = metric[prop][0].value;
          } else if (prop == 'date_start' || prop == 'date_start') {
            break;
          } else {
            metric_object[prop] = metric[prop];
          }
        }

        processed_data.push(metric_object);
      });
    } catch(err) {
      return [];
    }

    return processed_data;
  }
}
