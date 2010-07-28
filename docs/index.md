
[Expresso](http://github.com/visionmedia/expresso) is a JavaScript [TDD](http://en.wikipedia.org/wiki/Test-driven_development) framework written for [nodejs](http://nodejs.org). Expresso is extremely fast, and is packed with features such as additional assertion methods, code coverage reporting, CI support, and more.

## Features

  - light-weight
  - intuitive async support
  - intuitive test runner executable
  - test coverage support and reporting via [node-jscoverage](http://github.com/visionmedia/node-jscoverage)
  - uses and extends the core _assert_ module
  - `assert.eql()` alias of `assert.deepEqual()`
  - `assert.response()` http response utility
  - `assert.includes()`
  - `assert.isNull()`
  - `assert.isUndefined()`
  - `assert.isNotNull()`
  - `assert.isNotUndefined()`
  - `assert.match()`
  - `assert.length()`

## Installation

To install both expresso _and_ node-jscoverage run
the command below, which will first compile node-jscoverage:

    $ make install

To install expresso alone without coverage reporting run:

    $ make install-expresso

Install via npm:

	$ npm install expresso

## Assert Utilities

### assert.eql(a, b[, msg])

Assert that object _b_ is equal to object _a_. This is an
alias for the core _assert.deepEqual()_ method which does complex
comparisons, opposed to _assert.equal()_ which uses _==_.

    assert.eql('foo', 'foo');
    assert.eql([1,2], [1,2]);
    assert.eql({ foo: 'bar' }, { foo: 'bar' });

### assert.includes(a, b[, msg])

Checks if

## expresso(1)

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
supports test coverage via [node-jscoverage](http://github.com/visionmedia/node-jscoverage) (bundled with expresso),
so you will need to expose an instrumented version of you library.

To instrument your library, simply run [node-jscoverage](http://github.com/visionmedia/node-jscoverage),
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
