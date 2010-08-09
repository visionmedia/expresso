
module.exports = {
    a: function(assert, done){
        setTimeout(function(){
            done();
        }, 500);
    },
    
    b: function(assert, done){
        setTimeout(function(){
            done();
        }, 200);
    },
    
    c: function(assert, done){
        setTimeout(function(){
            done();
        }, 1000);
    }
};