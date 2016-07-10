var service = require('../../services/facebook');
var chai = require('chai');
var stubs = require('../stubs/service_mocks');
var expect = chai.expect;

describe('service: facebook', () => {
  describe('#process', () => {
    it('returns a [] by default', () => {
      expect(service.process()).to.eql([]);
    });

    it('handles empty ads property', () => {
      const unprocessed_data = { ads: {}, metrics: { prop: 'asdf'} };
      expect(service.process(unprocessed_data)).to.eql([]);
    });

    it('handles empty metrics property', () => {
      const unprocessed_data = { ads: { prop: 'asdf'}, metrics: {} };
      expect(service.process(unprocessed_data)).to.eql([]);
    });

    it('returns new json object with appropriate fields', () => {
      const unprocessed_data = { ads: stubs.valid_ads_response, metrics: stubs.valid_metric_response };
      expect(service.process(unprocessed_data)).to.eql([stubs.valid_joined_response]);
    });
  });
});
