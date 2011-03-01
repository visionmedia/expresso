var assert = require('assert');
var testserver = require('testserver');

exports['GET first page']  = function(beforeExit) {
    assert.response(testserver.server, 
        {url: '/b'},
	{status: 200, headers: {'Content-Type': 'application/json'}},
	function(res) {
	    var b = JSON.parse(res.body);
	    assert.ok('id' in b);
	    assert.response(testserver.server,
			    {url: '/b/'+b.id},
			    {status: 200});
            });  
};