
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
    
    'test lowerAsync()': function(assert){
        a.lowerAsync('FOO', function(str){
           assert.equal('foo', str);
        });
        
        a.lowerAsync({}, function(str){
           assert.equal('', str);
        });
    },
    
    'test failures': function(){
        assert.ok(false);
    }
}