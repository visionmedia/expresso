
module.exports = {
    'assert.eql()': function(assert){
        assert.equal(assert.deepEqual, assert.eql);
    },
    
    'assert.includes()': function(assert){
        assert.includes('some random string', 'random');
        assert.includes('some random string', 'dom');
    }
};