
"use strict";
/* mocha tests */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */


function mochaTests() {
    describe("nameString", function () {
        it("object has no properties", function () {
            assert.equal(nameString([]), "object has no properties");
        });
	});
	
    describe("nameString", function () {
        it("no object passed", function () {
            assert.equal(nameString(), "no object passed");
        });
	});	

    describe("nameString", function () {
        it("null argument", function () {
            assert.equal(nameString(null), "null argument");
        });
	});	
}	