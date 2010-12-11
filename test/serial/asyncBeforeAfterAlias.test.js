var assert = require('assert')
  , before = -3
  , after = -14
  , order = [];


/**
 * NOTE: It is bad practice to use any class/instance variables in 
 *       test fixtures. The side effects are intentional in this
 *       test fixture to ensure the life cycle methods work as 
 *       intended.
 *
 *       Test methods should be stateless to not have any side-effects.
 */
module.exports = {
 
    before: function(done){
        order.push('before');
        ++before;
        done();
    },

    after: function(done) {
        order.push('after');
        ++after;
        done();
    },

    beforeAll: function(done) {
        order.push('beforeAll');
        assert.equal(-3, before);
        assert.equal(-14, after);
        setTimeout(function(){
            before = 0;
            after = 0;
            done();
        }, 250);
    },

    afterAll: function(done) {
        order.push('afterAll');
        assert.equal(before, 5);
        assert.equal(after, 5);
        assert.eql(order, [
          'beforeAll', 
          'before', 'before_prefix', 'after',
          'before', 'suffix_before', 'after',
          'before', 'a', 'after',
          'before', 'b', 'after',
          'before', 'c',  'after',
          'afterAll'
        ]);
        setTimeout(function(){
            done();
        }, 325);
    },

    // ensure pattern matching does not treat a prefix as life cycle
    before_prefix: function() {
        assert.equal(1, before);
        order.push('before_prefix');
    },

    // ensure pattern matching does not treat a suffix as life cycle
    suffix_before: function() {
        assert.equal(2, before);
        order.push('suffix_before');
    },

    a: function(done){
        assert.equal(3, before);
        order.push('a');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 500);
    },
    
    b: function(done){
        assert.equal(4, before);
        order.push('b');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 200);
    },
    
    c: function(done){
        assert.equal(5, before);
        order.push('c');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 1000);
    }
};
