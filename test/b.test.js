
var b = require('b'),
    arr = [],
    n = 5000;

while (n--) arr.push(n);

exports['test select()'] = function(assert){
    b.selectAsync(arr, function(val){
        return val > 500;
    }, function(arr){
        assert.equal(4999, arr[0]);
        assert.equal(501, arr[arr.length-1]);
    })
}

exports['test exception'] = function(assert){
    assert.equal('foo', 'bar');
}

exports['test exception again'] = function(assert){
    throw new Error('oh no!');
}