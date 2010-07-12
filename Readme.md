
# Expresso

  TDD framework for [nodejs](http://nodejs.org).
  
  Expresso is an extremely fast Test Driven Development framework for nodejs. I
  was frustrated with what was currently available, I wanted something
  fast (_not executed serially_), with reasonable reporting,
  drop-dead simple async support (_you dont have to do anything!_),
  and _code coverage_.

## Features

  - intuitive async support
  - intuitive test runner executable
  - test coverage support and reporting
  - uses the _assert_ module
  - `assert.eql()` alias of `assert.deepEqual()`
  - `assert.response()` http response utility
  - light-weight

## Installation

To install both expresso _and_ node-jscoverage run:

    $ make install

To install expresso alone (no build required) run:

    $ make install-expresso

Install via [kiwi](http://github.com/visionmedia/kiwi):

    $ kiwi install expresso

Install via npm:

	$ npm install expresso

## Examples

To define tests we simply export several functions:

    module.exports = {
      	'test String#length': function(assert){
        	assert.equal(6, 'foobar');
      	}
    }

Async example:

    exports['test async] = function(assert, beforeExit){
		var n = 0;
      	setTimeout(function(){
        	++n;
        	assert.ok(true);
      	}, 200);
      	setTimeout(function(){
        	++n;
        	assert.ok(true);
      	}, 200);
		beforeExit(function(){
			assert.equal(2, n, 'Ensure both timeouts are called');
		});
    }

## Executable Usage

To run a single test suite (file) run:

    $ expresso test/a.test.js

To run several suites we may simply append another:

    $ expresso test/a.test.js test/b.test.js

We can also pass a whitelist of tests to run within all suites:

    $ expresso --only "foo()" --only "bar()"

Or several with one call:

    $ expresso --only "foo(), bar()"

Globbing is of course possible as well:

    $ expresso test/*

When expresso is called without any files, _test/*_ is the default,
so the following is equivalent to the command above:

    $ expresso

If you wish to unshift a path to `require.paths` before
running tests, you may use the `-I` or `--include` flag.

    $ expresso --include lib test/*

The previous example is typically what I would recommend, since expresso
supports test coverage via [node-jscoverage](http://github.com/visionmedia/expresso) (bundled with expresso),
so you will need to expose an instrumented version of you library.

To instrument your library, simply run [node-jscoverage](http://github.com/visionmedia/expresso),
passing the _src_ and _dest_ directories:

    $ node-jscoverage lib lib-cov

Now we can run our tests again, using the _lib-cov_ directory that has been
instrumented with coverage statements:

    $ expresso -I lib-cov test/*

The output will look similar to below, depending on your test coverage of course :)

    Test Coverage
    +--------------------------------+----------+------+------+--------+
    | filename                       | coverage | LOC  | SLOC | missed |
    +--------------------------------+----------+------+------+--------+
    | a.js                           |    90.00 |   26 |   10 |      1 |
    | b.js                           |   100.00 |   12 |    5 |      0 |
    +--------------------------------+----------+------+------+--------+
                                     |    93.33 |   38 |   15 |      1 |
                                     +----------+------+------+--------+

    bar.js:
    
      1 |   | 
      2 | 1 | exports.bar = function(msg){
      3 | 1 |     return msg || 'bar';
      4 |   | };
    
    
    foo.js:
    
       1 |   | 
       2 | 1 | exports.foo = function(msg){
       3 | 2 |     if (msg) {
       4 | 0 |         return msg;
       5 |   |     } else {
       6 | 2 |         return generateFoo();
       7 |   |     }
       8 |   | };
       9 |   | 
      10 | 1 | function generateFoo() {
      11 | 2 |     return 'foo';
      12 |   | }
      13 |   | 
      14 | 1 | function Foo(msg){
      15 | 0 |     this.msg = msg || 'foo';
      16 |   | }

To make this process easier expresso has the `-c` or `--cov` which essentiall
does the same as the two commands above. The following two commands will
run the same tests, however one will auto-instrument, and unshift _lib-cov_,
and the other will run tests normally:

    $ expresso -I lib test/*
    $ expresso -I lib --cov test/*

Currently coverage is bound to the _lib_ directory, however in the
future `--cov` will most likely accept a path.

## HTTP Server Response Assertions

Expresso _0.3.0_ adds the `assert.response()` which accepts a
`Server` instance, followed by the `request` options, `response`
assertions, and final optional assertion `msg`. 

The `Server` passed should __NOT__ be bound to a port, `assert.response()` will
assign a dummy port ranging from `--port NUM` and up (defaults to 5000).

    assert.response(server, {
        url: '/',
        method: 'GET'
    },{
        body: '{"name":"tj"}',
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf8'
        }
    });
    
    assert.response(server, {
        url: '/foo',
        method: 'POST',
        data: 'bar baz'
    },{
        body: '/foo bar baz',
        status: 200
    }, 'Test POST');


    assert.response(server, {
        url: '/'
    }, function(res){
        assert.ok(res.body.indexOf('tj') >= 0, 'Test assert.response() callback');
    });

Dropbox fails lots but here is an image with the colored output :)

![node coverage](http://dl.dropbox.com/u/6396913/cov.png)