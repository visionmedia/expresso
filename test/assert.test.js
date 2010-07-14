module.exports = {
    'assert.eql()': function(assert){
        assert.equal(assert.deepEqual, assert.eql);
    },
    
    'assert.includes()': function(assert){
        assert.includes('some random string', 'random');
        assert.includes('some random string', 'dom');
        assert.throws(function(){
           assert.include('some random string', 'foobar'); 
        });
    },
    
    'assert.isNull()': function(assert){
        assert.isNull(null);
        assert.throws(function(){
            assert.isNull(undefined);
        });
        assert.throws(function(){
            assert.isNull(false);
        });
    },
    
    'assert.isUndefined()': function(assert){
        assert.isUndefined(undefined);
        assert.throws(function(){
            assert.isUndefined(null);
        });
        assert.throws(function(){
            assert.isUndefined(false);
        });
    },
    
    'assert.isNotNull()': function(assert){
        assert.isNotNull(false);
        assert.isNotNull(undefined);
        assert.throws(function(){
            assert.isNotNull(null);
        });
    },
    
    'assert.isNotUndefined()': function(assert){
        assert.isNotUndefined(false);
        assert.isNotUndefined(null);
        assert.throws(function(){
            assert.isNotUndefined(undefined);
        });
    },
    
    'assert.isUndefinedOrNull()': function(assert){
        assert.isUndefinedOrNull(null);
        assert.isUndefinedOrNull(undefined);
        assert.throws(function(){
            assert.isUndefinedOrNull(false);
        });
    },
    
    'assert.isNotUndefinedNorNull()': function(assert){
        assert.isNotUndefinedNorNull(false);
        assert.throws(function(){
            assert.isNotUndefinedNorNull(null);
        });
        assert.throws(function(){
            assert.isNotUndefinedNorNull(undefined);
        });
    },
    
    'assert.match()': function(assert){
        assert.match('foobar', /foo(bar)?/);
        assert.throws(function(){
            assert.match('something', /rawr/);
        });
    },
    
    'assert.length()': function(assert){
        assert.length(4, 'test');
        assert.length(4, [1,2,3,4]);
        assert.throws(function(){
            assert.length(4, [1,2,3])
        });
    }
};