
var assert = require('assert')
  , order = []
  , exec = require('child_process').exec;

module.exports = {
    'test single tag': function (done) {
        exec('./bin/expresso -I lib/ -T tagOne lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/1 tests/.test(stderr));
                done();
        });
    },

    'test conditional or of tags': function (done) {
        exec('./bin/expresso -I lib/ -T "tagOne || tagTwo" lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/2 tests/.test(stderr));
                done();
        });
    },

    'test conditional and of tags': function (done) {
        exec('./bin/expresso -I lib/ -T "tagThree && tagFour" lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/1 tests/.test(stderr));
                done();
        });
    },

    'test complex conditional tags': function (done) {
        exec('./bin/expresso -I lib/ -T "tagThree && tagFour || tagOne" lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/2 tests/.test(stderr));
                done();
        });
    },

    'test ignoring @tags that are not at the end but in the middle': function (done) {
        exec('./bin/expresso -I lib/ -T invalidTag lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/0 tests/.test(stderr));
                done();
        });
    },

    'test ignoring @tags that are not at the end but at the beginning': function (done) {
        exec('./bin/expresso -I lib/ -T misplacedTag lib/taggedTests.js',
            function (err, stdout, stderr) {
                assert.ok(/0 tests/.test(stderr));
                done();
        });
    }
};
