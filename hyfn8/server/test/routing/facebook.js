var request = require('supertest');
var express = require('express');

var app = require('../../server.js');

describe('routing:', () => {
  beforeEach((done) => {
    server = require('../../server.js');
    done();
  });

  describe('/facebook', () => {
    it('status 200', (done) => {
      request(server)
        .get('/facebook')
        .expect(200, done);
    });
  });
});