module.exports = {
    'assert.eql()': function(assert){
        assert.equal(assert.deepEqual, assert.eql);
    },
    
    'assert.includes()': function(assert){
        assert.includes('dom', 'some random string');
        assert.throws(function(){
           assert.include('foobar', 'some random string');
        });

        assert.includes('bar', ['foo', 'bar']);
        assert.includes('foo', ['foo', 'bar']);
        assert.includes(3, [1,2,3]);
        assert.includes(2, [1,2,3]);
        assert.includes(1, [1,2,3]);
        assert.throws(function(){
            assert.includes('baz', ['foo', 'bar']);
        });
        
        assert.throws(function(){
            assert.includes('baz', { wrong: 'type' });
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
    
    'assert.match()': function(assert){
        assert.match('foobar', /foo(bar)?/);
        assert.throws(function(){
            assert.match('something', /rawr/);
        });
    },
    
    'assert.length()': function(assert){
        assert.length('test', 4);
        assert.length([1,2,3,4], 4);
        assert.throws(function(){
            assert.length([1,2,3], 4);
        });
    }
};