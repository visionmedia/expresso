
/**
 * Module dependencies.
 */

var foo = require('../lib/foo');

module.exports = {
    'foo()': function(assert){
        assert.equal('foo', foo.foo());
        assert.equal('foo', foo.foo());
    }
};
