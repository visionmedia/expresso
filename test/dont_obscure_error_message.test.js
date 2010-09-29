sys = require ('sys')

function stack_overflow(){
	return stack_overflow();
}

exports.test_stackoverflow_error = function(assert){
	try {
		stack_overflow();
	} catch (e){
		assert.equal('RangeError',e.name);
		//some errors have no stack trace, which was causing a TypeError on at line 699 in ../bin/expresso
	}
}
