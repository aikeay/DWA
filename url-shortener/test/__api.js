var expect = require('expect');
var request = require('supertest');

describe('API', function () {
    var server;
   beforeEach(function () {
       server = require('../src/server.js');
   });

   afterEach(function () {
       server.close();
   });


});
