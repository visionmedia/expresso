
module.exports = {
    a: function(assert, done){
        setTimeout(function(){
            console.log('a');
            done();
        }, 500);
    },
    
    b: function(assert, done){
        setTimeout(function(){
            console.log('b');
            done();
        }, 200);
    }
};