var assert = require('assert')
  , before = -3
  , after = -14
  , order = [];


module.exports = {
  
    before: function(done){
        ++before;
        done();
    },

    after: function(done) {
        ++after;
        done();
    },


    beforeAll: function(done) {
        assert.equal(-3, before);
        assert.equal(-14, after);
        setTimeout(function(){
            before = 0;
            after = 0;
            done();
        }, 250);
    },

    afterAll: function(done) {
        assert.equal(before, 4);
        assert.equal(after, 4);
        setTimeout(function(){
            done();
        }, 325);
    },

    a: function(done){
        assert.equal(1, before);
        order.push('a');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 500);
    },
    
    b: function(done){
        assert.equal(2, before);
        order.push('b');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 200);
    },
    
    c: function(done){
        assert.equal(3, before);
        order.push('c');
        setTimeout(function(){
            var current = after;
            done();
            assert.ok(current < after);
        }, 1000);
    },

    d: function(){
        assert.eql(order, ['a', 'b', 'c']);
    }
};
