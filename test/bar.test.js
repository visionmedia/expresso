
/**
 * Module dependencies.
 */

var assert = require('assert')
  , bar = require('../lib/bar');

module.exports = {
    'bar()': function(){
        assert.equal('bar', bar.bar());
    }
};