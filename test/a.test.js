
var a = require('a')

module.exports = {
    'test upper()': function(assert){
        assert.equal('FOO', a.upper('foo'));
        assert.equal('', a.upper({}));
    },
    
    'test lower()': function(assert){
        assert.equal('foo', a.lower('FOO'));
        // we dont test the other path here,
        // run `make test-cov` to see the coverage
    },
    
    'test lowerAsync()': function(assert, done){
        // when the second argument is accepted,
        // the test is assumed to be async
        a.lowerAsync('FOO', function(str){
           assert.equal('foo', str);
           done(); 
        });
        
        // full coverage
        a.lowerAsync({}, function(str){
           assert.equal('', str);
           done(); 
        });
        
        // return the number of expected calls
        // to done(), defaults to 1.
        return 2;
    }
}