/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if (string === undefined){ 
		return "missing argument";
	}
	if (typeof string !== "string") {
		return "argument not string";
	}
	if (string.length === 0){ return "";
}
	let str = "";
	for (let i = 1; i < string.length; i += 2) {
	  str += string[i];
	}
	return str;
  }
  console.log(removeEvenCharacters("abcd"));

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!


	function sumPositiveNumbers(array) {
		let sum =0;
		
		let postives = array.filter(value => value > 0);
		if(postives.length === 0){
			return 0;
		}
		 sum = postives.reduce(function(total, num){
			return total + num
		})
		return sum;
	}




// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
	function numberFilter(item) {
	  return typeof item == "number";
	}
	function stringFilter(item) {
	  return typeof item == "string";
	}
  }



// Makes all negative numbers of the input array positive

function makePositive(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 0) {
				result.push(arr[i] * -1);
			} else {
				result.push(arr[i]);
			}
		}
		return result;
	}


// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
		let arr = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] !== 0) {
				arr.push(array[i]);
			}
			else {
				if (arr[arr.length - 1] !== "*") {
					arr.push("*");
				}
			}
		}
		return arr;
	}
	



