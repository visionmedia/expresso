var print = require('util').debug;
var assert = require('assert');
var testserver = require('testserver');

exports['GET /a'] = function(beforeExit) {
    assert.response(testserver.server,
        {url: '/a'},
        {status: 200, headers: {'Content-Type': 'application/json'}});
};