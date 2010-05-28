
exports.selectAsync = function(arr, fn, callback){
    process.nextTick(function(){
        var selected = [];
        for (var i = 0, len = arr.length; i < len; ++i) {
            if (fn.call(arr, arr[i], i, arr)) {
                selected.push(arr[i]);
            }
        }
        callback(selected);
    })
}