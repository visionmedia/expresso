
/**
 * Module dependencies.
 */

var bar = require('../lib/bar');

module.exports = {
    'bar()': function(assert){
        assert.equal('bar', bar.bar());
    }
};
