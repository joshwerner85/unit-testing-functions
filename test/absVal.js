var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return the absolute value of an integer', function() {
		expect(functions.absVal(-15)).to.equal(15);
	});
	it('should return the absolute value of a positive integer', function() {
		expect(functions.absVal(3)).to.equal(3);
	});
	 
});