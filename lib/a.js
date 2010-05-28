
exports.upper = function(str){
    if (typeof str === 'string') {
        return str.toUpperCase();
    } else {
        return '';
    }
}

exports.lower = function(str){
    if (typeof str === 'string') {
        return str.toLowerCase();
    } else {
        return '';
    }
}

exports.lowerAsync = function(str, fn){
    process.nextTick(function(){
        if (typeof str === 'string') {
            fn(str.toLowerCase());
        } else {
            fn('');
        }
    })
}