
exports.foo = function(msg){
    if (msg) {
        return msg;
    } else {
        return generateFoo();
    }
};

function generateFoo() {
    return 'foo';
}