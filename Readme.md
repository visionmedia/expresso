
coming soon...

## Installation

To install both expresso _and_ node-jscoverage run:

    $ make install

To install expresso alone (no build required) run:

    $ make install-expresso

## Usage

To run a single test suite (file) run:

    $ expresso test/a.test.js

To run several suites we may simply append another:

    $ expresso test/a.test.js test/b.test.js

Globbing is of course possible as well:

    $ expresso test/*.test.js

The test results for the command above will look similar to below,
displaying the test progress, suite name, passes, failures, and duration:

    %100 a.test 3 0 in 0.002 seconds
    %100 b.test 1 0 in 0.000 seconds

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

    $ express -I lib-cov test/*

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