var expect = require('chai').expect;
var functions = require('../functions.js');

describe('concatenateArrays', function() {
    it('should exist', function() {
        expect(functions.concatenateArrays).not.to.be.undefined;
    });

    it('should return an array if the values are both arrays', function() {
        expect(functions.concatenateArrays([1,2,3],[4,5,6])).to.be.an('array');
    });

    it('should be the length of the sum of its two arguments', function() {
        expect(functions.concatenateArrays([1,2,3],[4,5,6]).length).to.equal([1,2,3].length+[4,5,6].length);
    });
});