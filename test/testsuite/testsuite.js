var http = require('http');
var testserver = require('testserver');

exports.setup = function(fn) {
    testserver.init('unique_id_1');
    fn();
};

exports.teardown = function() {
    testserver.fini();
};