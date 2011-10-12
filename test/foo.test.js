
/**
 * Module dependencies.
 */

var assert = require('assert')
  , foo = require('../lib/foo');

module.exports = {
    'foo()': function(){
        assert.equal('foo', foo.foo());
        assert.equal('foo', foo.foo());
    }
};