var assert = require('assert');

// Using a localized version of assert.
exports['first'] = function(beforeExit, assert) {
    process.nextTick(function() {
        assert.equal(assert.suiteTitle, 'local-assert.test.js');
        assert.equal(assert.testTitle, 'first');
    });
};

// Using the broken global version of assert.
exports['second'] = function(beforeExit) {
    process.nextTick(function() {
        assert.equal(assert.suiteTitle, 'local-assert.test.js');
        assert.equal(assert.testTitle, 'third');
    });
};

// Overwrite the testTitle in assert.
exports['third'] = function() {};
