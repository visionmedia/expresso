var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/a' || req.url === '/b') {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({id: 1}));
    } else if (req.url == '/b/1') {
	res.writeHead(200);
	res.end();
    }
});

exports.init = function(id) {
    server.uniqueid = id;
    exports.server = server;
};

exports.fini = function() {
    exports.server = null;
};