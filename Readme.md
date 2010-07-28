
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
  - `assert.includes()`
  - `assert.isNull()`
  - `assert.isUndefined()`
  - `assert.isNotNull()`
  - `assert.isNotUndefined()`
  - `assert.match()`
  - `assert.length()`
  - light-weight

## Installation

To install both expresso _and_ node-jscoverage run:

    $ make install

To install expresso alone (no build required) run:

    $ make install-expresso

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


## HTTP Server Response Assertions

Expresso _0.3.0_ adds the

## Async Exports

Sometimes it is useful to postpone running of tests until a callback or event has fired,
currently the `exports.foo = function(){};` syntax is supported for this:
    
	setTimeout(function(){
	    exports['test async exports'] = function(assert){
	        assert.ok('wahoo');
	    };
	}, 100);

Dropbox fails lots but here is an image with the colored output :)

![node coverage](http://dl.dropbox.com/u/6396913/cov.png)