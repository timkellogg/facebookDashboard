// 'use strict';

// module.exports = {
//   /**
//     * Method that handles the merging of ads and campaign information
//   */
//   process: function(unprocessed_data) {
//     let processed_data = [];

//     unprocessed_data.metrics.data.forEach(function(metric) {
//       let metric_object = {};

//       for (let prop in metric) {
//         if (prop === 'campaign_id') {
//           unprocessed_data.ads.data.forEach(function(ad) {
//             if (ad.campaign_id == metric[prop]) {
//               metric_object['name'] = ad.name;
//               return;
//             }
//           });
//         }

//         metric_object[prop] = metric[prop];
//       }

//       processed_data.push(metric_object);
//     });

//     return processed_data;
//   }
// }

'use strict';

module.exports = {
  /**
    * Method that handles the merging of ads and campaign information
  */
  process: function(unprocessed_data) {
    let processed_data = [];

    unprocessed_data.metrics.data.forEach(function(metric) {
      let metric_object = {};

      for (let prop in metric) {
        if (prop === 'campaign_id') {
          unprocessed_data.ads.data.forEach(function(ad) {
            if (ad.campaign_id == metric[prop]) {
              metric_object['name'] = ad.name;
              return;
            }
          });
        }

        metric_object[prop] = metric[prop];
      }

      processed_data.push(metric_object);
    });

    return processed_data;
  }
}
