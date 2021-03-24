"use strict";

function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D2";
}

function nameString(obj) {
    if (obj === null) {
        return "null argument";
    }
    if (obj === undefined) {
        return "no object passed";
    }
    if (obj.length === 0) {
        return "object has no properties";
    }
    let arr = [];
    for (let k in obj) {
        arr.push(k)
    }
    arr.sort();

    let str = arr.join('.')
    return str;
}
