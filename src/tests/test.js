'use strict';

var expect = require('chai').expect;
var hop = require('../../index');

describe('#hop', function() {

	// Desktop tests
	describe('desktop', function() {

		beforeEach(function() {
			delete window.ontouchstart;
		});

		it('should return false from isTouchDevice', function() {
			var result = hop.isTouchDevice();
			expect(result).to.equal(false);
		});

	});

	// Mobile tests
	describe('mobile', function() {

		beforeEach(function() {
			window.ontouchstart = function(){};
		});

		it('should return true from isTouchDevice', function() {
			var result = hop.isTouchDevice();
			expect(result).to.equal(true);
		});

	});
});