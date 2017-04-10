'use strict';

var expect = require('chai').expect;
var hop = require('../../index');

describe('#Hop', function() {

	// Desktop tests
	describe('Desktop', function() {

		beforeEach(function() {
			delete window.ontouchstart;
		});

		it('should return false from isTouchDevice', function() {
			var result = hop.isTouchDevice();
			expect(result).to.equal(false);
		});

		it('should return true from isDesktop', function() {
			var result = hop.isDesktop();
			expect(result).to.equal(true);
		});

	});

	// Mobile tests
	describe('Mobile', function() {

		beforeEach(function() {
			window.ontouchstart = function(){};
		});

		it('should return true from isTouchDevice', function() {
			var result = hop.isTouchDevice();
			expect(result).to.equal(true);
		});

		it('should return false from isDesktop', function() {

			window.navigator.__defineGetter__('userAgent', function(){
				return "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25"
			});
			
			var result = hop.isDesktop();
			expect(result).to.equal(false);
		});

		// iOS
		describe('iOS', function() {

			beforeEach(function() {
				window.navigator.__defineGetter__('userAgent', function(){
					return "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25"
				});
			});

			it('should return true from isIos', function() {
				var result = hop.isIos();
				expect(result).to.equal(true);
			});

			it('should return false from isAndroid', function() {
				var result = hop.isAndroid();
				expect(result).to.equal(false);
			});

			it('should return false from isWindows', function() {
				var result = hop.isWindows();
				expect(result).to.equal(false);
			});

		});

		// Android
		describe('Android', function() {

			beforeEach(function() {
				window.navigator.__defineGetter__('userAgent', function(){
					return "Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36"
				});
			});

			it('should return true from isAndroid', function() {
				var result = hop.isAndroid();
				expect(result).to.equal(true);
			});

			it('should return false from isIos', function() {
				var result = hop.isIos();
				expect(result).to.equal(false);
			});

			it('should return false from isWindows', function() {
				var result = hop.isWindows();
				expect(result).to.equal(false);
			});

		});

		// Windows Phone
		describe('Windows Phone', function() {

			beforeEach(function() {
				window.navigator.__defineGetter__('userAgent', function(){
					return "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586"
				});
			});

			it('should return true from isWindows', function() {
				var result = hop.isWindows();
				expect(result).to.equal(true);
			});

			it('should return false from isAndroid', function() {
				var result = hop.isAndroid();
				expect(result).to.equal(false);
			});

			it('should return false from isIos', function() {
				var result = hop.isIos();
				expect(result).to.equal(false);
			});

		});

	});
});