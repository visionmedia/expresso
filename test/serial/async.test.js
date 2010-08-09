
var setup = 0;

module.exports = {
    setup: function(done){
        ++setup;
        done();
    },

    a: function(assert, done){
        assert.equal(1, setup);
        setTimeout(function(){
            done();
        }, 500);
    },
    
    b: function(assert, done){
        assert.equal(2, setup);
        setTimeout(function(){
            done();
        }, 200);
    },
    
    c: function(assert, done){
        assert.equal(3, setup);
        setTimeout(function(){
            done();
        }, 1000);
    }
};